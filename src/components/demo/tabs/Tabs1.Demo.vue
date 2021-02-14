<demo>
    常规使用
</demo>
<template>
    <Tabs v-model:selected="selectedItem">
        <Tab title="Tabs1">one</Tab>
        <Tab title="Tabs2">two</Tab>
        <Tab title="Tabs3">three</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tabs from "../../../lib/Tabs.vue";
    import Tab from "../../../lib/Tab.vue";
    import {
        ref
    } from "vue";

    export default {
        components: {
            Tabs,
            Tab
        },
        setup() {
            const selectedItem = ref("Tabs1");
            return {
                selectedItem
            };
        }
    };
</script>