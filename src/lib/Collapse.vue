<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    export default {};
</script>

<style lang="scss" >
    $grey:#ddd;
    .collapse {
        border: 1px solid $grey;
        border-radius: 4px;
    }
</style>
