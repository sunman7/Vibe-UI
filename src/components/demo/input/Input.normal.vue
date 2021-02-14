<demo>
    双向绑定
</demo>
<template>
    <Input v-model:value="val" v-model="changeValue"/>
    <div class="show-value">
        <h3>v-model:</h3>
        <div>{{val}}</div>
        <div>{{changeValue}}</div>
    </div>
</template>

<script lang="ts">
    import Input from "../../../lib/Input.vue";
    import {ref} from "vue";

    export default {
        components: {
            Input
        },
        setup() {
            const val = ref("");
            const changeValue = ref("");
            return {val, changeValue};
        }
    };
</script>
<style lang="scss" scoped>
    .show-value {
        > div {
            border: 1px solid grey;
            height: 40px;
            width: 237px;
            margin: 10px;
            border-radius: 4px;
            line-height: 40px;
            padding: 0px 8px;
        }
    }
</style>