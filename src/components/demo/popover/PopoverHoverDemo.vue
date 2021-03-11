<demo>
    Hover
</demo>
<template>
    <div class="box">
        <Popover position="top" trigger="hover">
            <template v-slot:content>
                内容
            </template>
            <Button>鼠标悬浮</Button>
        </Popover>
        <Popover position="bottom" trigger="hover">
            <template v-slot:content>
                内容
            </template>
            <Button>鼠标悬浮</Button>
        </Popover>
        <Popover position="left" trigger="hover">
            <template v-slot:content>
                内容
            </template>
            <Button>鼠标悬浮</Button>
        </Popover>
        <Popover position="right" trigger="hover">
            <template v-slot:content>
                内容
            </template>
            <Button>鼠标悬浮</Button>
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
        flex-wrap: wrap;

    }
</style>
