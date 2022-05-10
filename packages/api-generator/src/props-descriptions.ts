// Utils
import { Project, SyntaxKind } from 'ts-morph'

// Types
import type { CallExpression, JSDocTag, PropertyAssignment } from 'ts-morph'
import type { PropDescription } from './types'

// 找到这个注释的上层函数名
function getMethodExpression(tag: JSDocTag): [string, CallExpression] | undefined {
  const ancestors = tag.getAncestors()
  for (let i = 0; i < ancestors.length; i++) {
    const ancestor = ancestors[i]
    if (ancestor.getKind() === SyntaxKind.CallExpression) {
      const callExpression = ancestor as CallExpression
      const expression = callExpression.getExpression().getText()
      if (expression.indexOf('propsFactory') === 0) {
        return ['propsFactory', callExpression]
      } else if (expression.indexOf('genericComponent') === 0) {
        return ['genericComponent', callExpression]
      } else if (expression.indexOf('defineComponent') === 0) {
        return ['defineComponent', callExpression]
      }
    }
  }
}

// 找到这个注释的来源
function getPropSource(filePath: string, tag: JSDocTag): string | undefined {
  const [name, callExpression] = getMethodExpression(tag) || []

  switch (name) {
    case 'propsFactory':
      return callExpression!.getArguments()[1]?.getText()?.replace(/\'|\"/g, '')
    case 'genericComponent':
    case 'defineComponent':
      const res = filePath.match(/([\w|-]*)\.ts/)
      if (res && res[1]) {
        return res[1]
      }
  }
}

// 获取所有的属性描述
export function getPropsDescriptions(paths: string) {
  const project = new Project()
  project.addSourceFilesAtPaths(paths)
  const descriptions: PropDescription[] = []
  project.getSourceFiles().forEach(file => {
    const filePath = file.getFilePath()
    file.getDescendantsOfKind(SyntaxKind.JSDocTag).forEach((tag: JSDocTag) => {
      const language = tag.getTagName()
      if (language === 'zh') {
        const parent = tag.getParent()?.getParent() as PropertyAssignment | undefined
        if (parent?.getKind() === SyntaxKind.PropertyAssignment) {
          const description = tag.getCommentText()
          const source = getPropSource(filePath, tag)
          if (description && source) {
            descriptions.push({
              language,
              name: parent.getName(),
              description,
              source,
            })
          }
        }
      }
    })
  })
  return descriptions
}

