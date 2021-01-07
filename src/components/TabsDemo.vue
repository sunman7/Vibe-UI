<template>
    <Tabs v-model:selected="x">
        <Tab title="导航1">11</Tab>
        <Tab title="导航2">2</Tab>
        <Tab title="导航3">3</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue";
    import {ref} from "vue";

    export default {
        setup() {
            const x = ref("导航2");
            return {x};
        },
        components: {
            Tabs, Tab
        },

    };
</script>

<style lang="scss" scoped>

</style>