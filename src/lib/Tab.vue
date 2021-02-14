<template>
    <div :disabled="disabled">
        <slot/>
    </div>
</template>
<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        name: "Tab",
        setup(props) {
            console.log(props);
        }
    };
</script>
<style lang="scss">
</style>