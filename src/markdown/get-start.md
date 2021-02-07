## 下载与使用

## 使用 `vibe-ui`


```
    import 'vibe-ui/dist/lib/vibe.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { vibeUI } from 'vibe-ui'

    createApp(App)
      .use(vibeUI)
      .mount('#app')
```
## Vue单文件组件中使用
```
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from 'vibe-ui'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
```
