<template>
    <div class="collapse-item">
        <div class="title" @click="open = !open">
            {{title}}
            <img src="../assets/right.png" alt="" :class="{'down':open}">
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script type="ts">
    export default {
        props: {
            title: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                open: false,

            };
        }
    };
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    .collapse-item {
        > .title {
            font-size: 20px;
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding:  10px;

            > img {
                margin-left: 4px;
                width: 16px;
                height: 14px;

                &.down {
                    transform: rotate(90deg);
                    transition: .4s;
                }
            }
        }

        > .content {
            padding: 10px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }

        &:last-child {
            > .title {
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }
</style>
