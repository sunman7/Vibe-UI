<demo>
    Collapse使用
</demo>
<template>
    <Collapse>
        <CollapseItem title="标题1">
            内容
        </CollapseItem>
        <CollapseItem title="标题2">
            内容2
        </CollapseItem>
        <CollapseItem title="标题3">
            内容3
        </CollapseItem>
    </Collapse>
</template>

<script type="ts">
    import Collapse from "../../../lib/Collapse.vue";
    import CollapseItem from "../../../lib/CollapseItem.vue";

    export default {
        components: {
            Collapse, CollapseItem
        }
    };
</script>

<style lang="scss" scoped>

</style>
