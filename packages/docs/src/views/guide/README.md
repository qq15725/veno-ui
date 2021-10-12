## 安装

```shell
npm i veno-ui
```

## 使用

plugins/veno-ui.js

```js
import 'veno-ui/dist/style.css'

import { createVenoUi } from 'veno-ui'

export default createVenoUi()
```

main.js

```js
import venoUi from './plugins/veno-ui'

// ...
app.use(venoUi)
```