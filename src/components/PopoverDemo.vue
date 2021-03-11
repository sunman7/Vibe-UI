<template>
    <CodeDemo :component="PopoverPositionDemo"></CodeDemo>
    <CodeDemo :component="PopoverHoverDemo"></CodeDemo>
</template>

<script type="ts">
    import PopoverPositionDemo from "./demo/popover/PopoverPositionDemo.vue";
    import PopoverHoverDemo from "./demo/popover/PopoverHoverDemo.vue";
    import CodeDemo from "./CodeDemo.vue";

    export default {
        components: {
            CodeDemo
        },
        setup() {
            return {PopoverPositionDemo, PopoverHoverDemo};
        }
    };
</script>

<style lang="scss" scoped>
    .asd {
        margin: 100px;
    }
</style>
