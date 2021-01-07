<template>
    <button class="vibe-switch" @click="toggle" :class="{'vibe-checked':value}"><span></span></button>
</template>

<script lang="ts">

    export default {
        props: {
            value: Boolean
        },
        setup(props, context) {
            const toggle = () => {
                console.log(props.value);
                context.emit("update:value", !props.value);
            };
            return {toggle};
        }

    };
</script>

<style lang="scss">
    $h: 26px;
    $h2: $h - 4px;
    .vibe-switch {
        height: $h;
        width: 2* $h;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: left 300ms;
        }

        &.vibe-checked {
            background: rgb(220, 87, 18);

            > span {
                left: calc(100% - #{$h2} - 2px);

            }
        }

        &:focus {
            outline: none;
        }

        &:active {
            > span {
                width: $h2 + 4px;
            }
        }

        &.vibe-checked:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }

    }


</style>