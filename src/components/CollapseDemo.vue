<template>
    <CodeDemo :component="CollapseNormal"/>
</template>

<script type="ts">
    import CodeDemo from "./CodeDemo.vue";
    import CollapseNormal from "./demo/Collapse/Collapse.normal.vue";

    export default {
        components: {
            CodeDemo
        },
        setup() {
            return {CollapseNormal};
        }
    };
</script>

<style scoped>

</style>
