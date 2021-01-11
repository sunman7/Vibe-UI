<template>
    <template v-if="visible">
        <Teleport to="body">
            <div @click="onClickOverLay" class="vibe-modal-overlay"></div>
            <div class="vibe-modal-wrapper">
                <div class="vibe-modal">
                    <header>
                        <slot name="title"/>
                        <span @click="close" class="vibe-modal-close"></span></header>
                    <main>
                        <slot name="content"/>
                    </main>
                    <footer>
                        <Button level="main" theme="text" @click="ok">确定</Button>
                        <Button theme="text" level="main" @click="cancel">取消</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
    import Button from "./Button.vue";

    export default {
        components: {
            Button
        },
        props: {
            visible: {
                type: Boolean,
            },
            closeOnClickOverLay: {
                type: Boolean,
                default: true,
            },
            ok: {
                type: Function
            },
            cancel: {
                type: Function
            }
        },
        setup(props, context) {
            const close = () => {
                context.emit("update:visible", false);
            };
            const onClickOverLay = () => {
                if (props.closeOnClickOverLay) {
                    close();
                }
            };
            const ok = () => {
                if (props.ok?.() !== false) {
                    close();
                }
            };
            const cancel = () => {
                if (props.cancel?.() !== false) {
                    close();
                }
            };
            return {close, onClickOverLay, ok, cancel};
        }
    };
</script>
<style lang="scss">
    $radius: 4px;
    $border-color: #d9d9d9;
    .vibe-modal {
        background: white;
        border-radius: $radius;
        box-shadow: 0 0 3px fade_out(black, 0.5);
        min-width: 15em;
        max-width: 90%;

        &-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: fade_out(black, 0.5);
            z-index: 10;
        }

        &-wrapper {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
        }

        > header {
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
        }

        > main {
            padding: 8px 20px;
            > .content{

            }
        }

        > footer {
            padding: 12px 0;
            text-align: right;

        }

        &-close {
            position: relative;
            display: inline-block;
            width: 12px;
            height: 16px;
            cursor: pointer;

            &::before,
            &::after {
                content: '';
                position: absolute;
                height: 1px;
                background: black;
                width: 100%;
                top: 50%;
                left: 50%;
            }

            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }

            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }
</style>