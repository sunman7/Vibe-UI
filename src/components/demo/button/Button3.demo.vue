<demo>
    支持 level
</demo>
<template>
    <div>
        <div>
            <Button>normal</Button>
            <Button level="main">main</Button>
            <Button level="danger">danger</Button>
            <Button level="success">success</Button>
        </div>

    </div>
</template>

<script lang="ts">
    import Button from "../../../lib/Button.vue";

    export default {
        components: {
            Button
        }
    };
</script>
<style lang="scss" scoped>
    Button{
        margin: 10px;
    }
</style>
