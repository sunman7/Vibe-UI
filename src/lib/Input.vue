<template>
    <div class="wrapper">
        <input class="input" type="text">
    </div>
</template>

<script lang="ts">
    export default {};
</script>

<style lang="scss">
    $height: 32px;


    $border-color: #999;
    .wrapper {
        > .input {
            outline-style: none;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 13px 14px;
            width: 620px;
            font-size: 14px;
            font-weight: 700;

            &:focus {
                border-color: #66afe9;
                outline: 0;
                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
            }
        }

    }

</style>