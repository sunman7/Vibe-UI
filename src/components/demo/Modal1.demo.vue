<demo>
    常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Modal v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts">
    import Modal from "../../lib/Modal.vue";
    import Button from "../../lib/Button.vue";
    import {
        ref
    } from "vue";
    import {
        openModal
    } from "../../lib/openModal";

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
                return false;
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