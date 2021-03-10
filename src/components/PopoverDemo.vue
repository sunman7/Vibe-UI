<template>
    <Popover>
        <template slot="content">
            <div>内容</div>
        </template>
        <template>
            <button>点我</button>
        </template>
    </Popover>
</template>

<script type="ts">
    import Popover from "../lib/Popover.vue";

    export default {
        components: {
            Popover
        }
    };
</script>

<style lang="scss" scoped>

</style>
