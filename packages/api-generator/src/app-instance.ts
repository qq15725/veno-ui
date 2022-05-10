// Utils
import { createApp } from 'vue'
import { createVeno } from 'veno-ui'

const app = createApp({})

app.use(createVeno())

export { app }