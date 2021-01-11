<demo>
    支持 size
</demo>
<template>
    <div>
        <div>
            <Button size="big">大大大</Button>
            <Button>普普通</Button>
            <Button size="small">小小小</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>