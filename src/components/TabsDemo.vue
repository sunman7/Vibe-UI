<template>
    <CodeDemo :component="TabsDemo1"></CodeDemo>
</template>

<script lang="ts">

    import CodeDemo from "./CodeDemo.vue";
    import TabsDemo1 from "./demo/tabs/Tabs1.Demo.vue";


    export default {
        setup() {
            return {TabsDemo1};
        },
        components: {
            CodeDemo
        },

    };
</script>

<style lang="scss" scoped>

</style>