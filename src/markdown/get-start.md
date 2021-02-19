## 下载与使用

## 使用 `vibe-ui`

```
    import 'vibe-ui/dist/lib/vibe-ui.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { Button,Switch,Modal,Tabs,Tab,Input } from 'vibe-ui'

    createApp(App)
        .component("Button",Button)
        .component("Switch",Switch)
        .component("Modal",Modal)
        .component("Tabs",Tabs)
        .component("Tab",Tab)
        .component("Input",Input);
    
      
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
