<template>
    <button class="vibe-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="vibe-loading"></span>
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from "vue";

    export default {
        name:"vibe-button",
        props: {
            theme: {
                type: String,
                default: "button"
            },
            size: {
                type: String,
                default: "normal"
            },
            level: {
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            loading: {
                type: Boolean,
                default: false,
            }

        },
        setup(props) {
            const {theme, size, level} = props;
            const classes = computed(() => {
                return {
                    [`vibe-theme-${theme}`]: theme,
                    [`vibe-size-${size}`]: size,
                    [`vibe-level-${level}`]: level,
                };
            });
            return {classes};
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #494949;
    $color: #333;
    $blue: rgb(24, 103, 192);
    $green: rgb(76, 175, 80);
    $disabled: rgb(224, 224, 224);
    $radius: 4px;
    $red: red;
    $grey: grey;
    .vibe-button {
        height: $h;
        padding: 2px 20px !important;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        font-weight: 700;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade_out(black, 0.95);




        &:hover, &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        &::-moz-focus-inner {
            border: 0;
        }

        &.vibe-theme-link {
            border-color: transparent;
            box-shadow: none;
            color: $blue;

            &:hover,
            &:focus {
                color: lighten($blue, 10%);
            }
        }

        &.vibe-theme-text {
            border-color: transparent;
            box-shadow: none;
            color: inherit;

            &:hover,
            &:focus {
                background: darken(white, 5%);
            }
        }

        &.vibe-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }

        &.vibe-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }

        &.vibe-theme-button {
            &.vibe-level-main {
                background: $blue;
                color: white;
                border-color: $blue;

                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }

            &.vibe-level-danger {
                background: $red;
                border-color: $red;
                color: white;

                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }

            &.vibe-level-success {
                background: $green;
                border-color: $green;
                color: white;

                &:hover,
                &:focus {
                    background: darken($green, 10%);
                    border-color: darken($green, 10%);
                }
            }
        }

        &.vibe-theme-link {
            &.vibe-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.vibe-theme-text {
            &.vibe-level-main {
                color: $blue;

                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }

            &.vibe-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
            &.vibe-level-success {
                color: $green;

                &:hover,
                &:focus {
                    color: darken($green, 10%);
                }
            }
        }

        &.vibe-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: rgb(166,166,166);
                background: $disabled;
                border:none;

            }
        }

        &.vibe-theme-link, &.vibe-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
                text-decoration: line-through;
            }
        }

        > .vibe-loading {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: vibe-spin 1s infinite linear;
        }

    }

    @keyframes vibe-spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
