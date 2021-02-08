<template>
    <div :class="disabled">
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
    };
</script>
<style lang="scss">
    .disabled {
        color:black;
    }
</style>