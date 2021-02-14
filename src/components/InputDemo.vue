<template>
    <CodeDemo :component="InputDemo1"></CodeDemo>
    <CodeDemo :component="InputDisabled"></CodeDemo>
    <CodeDemo :component="InputReadonly"></CodeDemo>
    <CodeDemo :component="InputSuccess"></CodeDemo>
    <CodeDemo :component="InputError"></CodeDemo>
</template>

<script lang="ts">
    import Input from "../lib/Input.vue";
    import CodeDemo from "./CodeDemo.vue";
    import InputDemo1 from "./demo/input/Input.normal.vue";
    import InputDisabled from "./demo/input/Input.disabled.vue";
    import InputReadonly from "./demo/input/Input.readonly.vue"
    import InputSuccess from "./demo/input/Input.success.vue"
    import InputError from "./demo/input/Input.error.vue"

    export default {
        components: {
            CodeDemo,
            Input,
        },
        methods: {
            inputChange(e) {
                console.log(e.target.value);
            }
        },
        setup() {
            return {InputDemo1, InputDisabled,InputReadonly,InputSuccess,InputError};
        }
    };
</script>

<style lang="scss" scoped>

</style>