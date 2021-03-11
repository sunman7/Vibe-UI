<template>
<div class="asd">
    <Popover position="top">
        <template v-slot:content>
            aoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasd
        </template>
        <VibeButton>点我</VibeButton>
    </Popover>
    <Popover position="bottom">
        <template v-slot:content>
            aoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasd
        </template>
        <VibeButton>点我</VibeButton>
    </Popover>
    <Popover position="left">
        <template v-slot:content>
            aoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasd
        </template>
        <VibeButton>点我</VibeButton>
    </Popover>
    <Popover position="right">
        <template v-slot:content>
            aoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasdaoisjdoiasd
        </template>
        <VibeButton>点我</VibeButton>
    </Popover>
</div>
</template>

<script type="ts">
    import Popover from "../lib/Popover.vue";
    import VibeButton from "../lib/Button.vue";

    export default {
        components: {
            VibeButton,
            Popover
        }
    };
</script>

<style lang="scss" scoped>
    .asd{
        margin: 100px;
    }
</style>
