<template>
    <Button>1</Button>
    <Button theme="button">1</Button>
    <Button theme="link">1</Button>
    <Button theme="text">1</Button>
    <hr>
    <Button size="normal">1</Button>
    <Button size="big">1</Button>
    <Button size="small">1</Button>
    <hr>
    <Button level="normal">1</Button>
    <Button level="main">1</Button>
    <Button level="danger">1</Button>
    <hr>
    <Button level="normal">1</Button>
    <Button level="main">1</Button>
    <Button level="danger">1</Button>
    <hr>
    <Button loading disabled></Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {

        components: {
            Button
        },
        setup() {
            const onClick = () => {
                console.log("hi");
            };
            return {onClick};
        }
    };
</script>

<style lang="scss" scoped>

</style>