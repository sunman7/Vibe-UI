<template>
    <h1>示例1</h1>
    <Button @click="showModal"> toggle</Button>
    <Modal :ok="f1" :cancel="f2" v-model:visible="x" :closeOnClickOverlay="false">
        <template v-slot:title>
        </template>
        <template v-slot:content></template>
    </Modal>
</template>

<script lang="ts">
    import Modal from "../lib/Modal.vue";
    import Button from "../lib/Button.vue";
    import {ref} from "vue";
    import {openModal} from "../lib/openModal";

    export default {
        components: {
            Modal,
            Button
        },
        setup() {
            const x = ref(false);
            const showModal = () => {
                console.log(x.value);
                openModal({title: "标题", content: "你好"});
            };
            const toggle = () => {
                x.value = !x.value;
            };
            const f1 = ()=>{
                console.log("ok");
            }
            const f2 = ()=>{
                console.log("cancel");
            }
            return {x, toggle, showModal,f1,f2};
        }
    };

</script>

<style lang="scss" scoped>

</style>