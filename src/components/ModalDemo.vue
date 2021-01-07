<template>
    <CodeDemo :component="ModalDemo1"></CodeDemo>
    <CodeDemo :component="ModalDemo2"></CodeDemo>
</template>

<script lang="ts">
    import Modal from "../lib/Modal.vue";
    import Button from "../lib/Button.vue";
    import {ref} from "vue";
    import {openModal} from "../lib/openModal";
    import CodeDemo from "./CodeDemo.vue";
    import ModalDemo1 from "./demo/Modal1.demo.vue";
    import ModalDemo2 from "./demo/Modal2.demo.vue";

    export default {
        components: {
            Modal,
            Button,
            CodeDemo
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
            const f1 = () => {
                console.log("ok");
            };
            const f2 = () => {
                console.log("cancel");
            };
            return {x, toggle, showModal, f1, f2, ModalDemo1, ModalDemo2};
        }
    };

</script>

<style lang="scss" scoped>

</style>