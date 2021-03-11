<demo>
    Click （默认点击出现卡片）
</demo>
<template>
    <div class="box">
        <Popover position="top">
            <template v-slot:content>
                内容
            </template>
            <Button>点我</Button>
        </Popover>
        <Popover position="bottom">
            <template v-slot:content>
                内容
            </template>
            <Button>点我</Button>
        </Popover>
        <Popover position="left">
            <template v-slot:content>
                内容
            </template>
            <Button>点我</Button>
        </Popover>
        <Popover position="right">
            <template v-slot:content>
                内容
            </template>
            <Button>点我</Button>
        </Popover>
    </div>
</template>

<script type="ts">
    import Popover from "../../../lib/Popover.vue";
    import Button from "../../../lib/Button.vue";

    export default {
        components: {Popover, Button}
    };
</script>

<style lang="scss" scoped>
    .box{
        margin: 50px 0;
        display: flex;
        justify-content: space-around;

    }
</style>
