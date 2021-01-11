<demo>
    常规使用
</demo>
<template>
    <div>

        <Button theme="text">Normal</Button>
        <Button theme="text" level="main">Main</Button>
        <Button theme="text" level="danger">Danger</Button>
        <Button theme="text" level="success">Success</Button>
    </div>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>