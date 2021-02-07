<template>
    <button class="vibe-switch" @click="toggle" :class="{ 'vibe-checked' : value }">
        <span>
        </span>
    </button>
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
    $h: 16px;
    $h2: $h + 8px;
    $blue: rgb(24, 103, 192);
    .vibe-switch {
        height: $h;
        width: $h *3;
        border: none;
        background: rgba(grey, 0.7);
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: -$h2/6;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: left 300ms;
            box-shadow: 0px 3px 10px -1px rgba(0,0,0,.5);
        }

        &.vibe-checked {
            background: rgba($blue, 0.7);

            > span {
                left: calc(100% - #{$h2} - 2px);
                background: $blue;

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