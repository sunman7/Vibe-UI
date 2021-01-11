<template>
    <h2>Text</h2>
    <CodeDemo :component="Button1Demo"/>
    <h2>Size</h2>
    <CodeDemo :component="Button2Demo"/>
    <h2>Level</h2>
    <CodeDemo :component="Button3Demo"/>
    <h2>Disabled</h2>
    <CodeDemo :component="Button4Demo"/>
    <h2>Loading</h2>
    <CodeDemo :component="Button5Demo"/>
</template>

<script lang="ts">
    import CodeDemo from "./CodeDemo.vue";
    import Button1Demo from "./demo/Button1.demo.vue";
    import Button2Demo from "./demo/Button2.demo.vue";
    import Button3Demo from "./demo/Button3.demo.vue";
    import Button4Demo from "./demo/Button4.demo.vue";
    import Button5Demo from "./demo/Button5.demo.vue";


    export default {
        components: {
            CodeDemo
        },
        setup() {
            return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
        }
    };
</script>

<style lang="scss" scoped>
</style>