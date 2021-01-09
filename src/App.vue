<template>
    <router-view/>
</template>

<script lang="ts">
    import {ref, provide} from "vue";
    import {router} from "./router";

    export default {
        name: "App",
        setup() {
            const width = document.documentElement.clientWidth;
            const menuVisible = ref(width <= 500 ? false : true);
            provide("xxx", menuVisible);
            if (width <= 500) {
                router.afterEach(() => {
                    menuVisible.value = false;
                });
            }
        }
    };
</script>
<style lang="scss">
    body{
        overflow: hidden;
    }
</style>

