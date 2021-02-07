<demo>
    一键打开 Modal
</demo>
<template>
    <div>
        <Button @click="showModal">打开对话框</Button>
    </div>
</template>

<script lang="ts">
    import Button from "../../../lib/Button.vue";
    import {
        ref,
        h
    } from "vue";
    import {
        openModal
    } from "../../../lib/openModal";

    export default {
        components: {
            Button
        },
        setup() {
            const showModal = () => {
                openModal({
                    title: h("strong", {}, "标题"),
                    content: "你好",
                    ok() {
                        console.log("ok");
                    },
                    cancel() {
                        console.log("cancel");
                    }
                });
            };
            return {
                showModal
            };
        }
    };
</script>