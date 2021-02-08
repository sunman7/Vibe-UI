<demo>
    支持 size
</demo>
<template>
    <div>
        <div>
            <Button size="big">big</Button>
            <Button>normal</Button>
            <Button size="small">small</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from "../../../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>