<demo>
    常规使用
</demo>
<template>
    <div>
        <Button level="main" @click="toggle">打开对话框</Button>
        <Modal v-model:visible="x" :close-on-click-over-lay="false" :ok="f1" :cancel="f2">
            <template v-slot:title>
                <strong>标题</strong>
            </template>
            <template v-slot:content>
                <p>内容</p>
            </template>

        </Modal>
    </div>
</template>

<script lang="ts">
    import Modal from "../../../lib/Modal.vue";
    import Button from "../../../lib/Button.vue";
    import {
        ref
    } from "vue";
    import {
        openModal
    } from "../../../lib/openModal";

    export default {
        components: {
            Modal,
            Button
        },
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value;
            };
            const f1 = () => {
                return true;
            };
            const f2 = () => {
            };
            return {
                x,
                toggle,
                f1,
                f2
            };
        }
    };
</script>