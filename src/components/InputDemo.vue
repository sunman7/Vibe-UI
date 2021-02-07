<template>
   <Input placeholder="输入内容" />
   <Input disabled placeholder="disabled"/>
   <Input readonly placeholder="readonly" />
   <Input error="error" />
   <Input success="success" />
</template>

<script lang="ts">
    import Input from "../lib/Input.vue";

    export default {
        components: {
            Input
        },
        setup(){

        }
    };
</script>

<style lang="scss" scoped>

</style>