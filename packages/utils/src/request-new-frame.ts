let clean = true
const frames = [] as any[]

/**
 * 安排任务在动画帧中运行，避免页面卡顿。
 */
export function requestNewFrame (cb: () => void) {
  if (!clean || frames.length) {
    frames.push(cb)
    run()
  } else {
    clean = false
    cb()
    run()
  }
}

let raf = -1

function run () {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const frame = frames.shift()
    if (frame) frame()

    if (frames.length) run()
    else clean = true
  })
}
