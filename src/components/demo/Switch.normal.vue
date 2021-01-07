<demo>
    常规用法
</demo>
<template>
    <Switch v-model:value="value"/>
</template>

<script lang="ts">
    import Switch from "../../lib/Switch.vue";
    import {ref} from "vue";

    export default {
        components: {
            Switch
        },
        setup() {
            const value = ref(false);
            return {value};
        }
    };

</script>

<style lang="scss" scoped>

</style>