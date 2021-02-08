<template>
    <div class="wrapper" :class="{error,success}">
        <input :value="value" class="input" type="text" :disabled="disabled" @change="$emit('change',$event)"
               @focus="$emit('change',$event)" :placeholder="placeholder" :readonly="readonly">
        <template v-if="error">
            <span class="error-message">
                {{error}}
            </span>
        </template>
        <template v-else-if="success">
            <span class="success-message">
                {{success}}
            </span>
        </template>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            success: {
                type: String
            },
            placeholder: {
                type: String
            }
        },
        setup() {

        }
    };
</script>

<style lang="scss">
    $height: 40px;
    $border-color: #999;
    $box-shadow: #999;
    $disabled: rgb(224, 224, 224);
    $error-color: #FF5252;
    $success-color: #4CAF50;

    .wrapper {
        font-size: 18px;
        display: inline-flex;
        flex-direction: column;
        margin: 10px;

        &.error {
            > input {
                border-color: $error-color;
                color:$error-color;
            }
        }
        &.success{
            > input{
                border-color: $success-color;
                color: $success-color;
            }
        }

        > .input {
            height: $height;
            border: 2px solid $border-color;
            padding: 0 8px;
            border-radius: 4px;
            font-size: inherit;


            &:hover, &:focus {
                outline: 0;
                box-shadow: inset 0 1px 3px $box-shadow;
            }

            &[disabled], &[readonly] {
                cursor: not-allowed;
                color: #ccc;
                border-color: #ccc;
            }

        }

        .error-message {
            color: $error-color;
        }

        .icon-error {
            fill: $error-color;
        }

        .success-message {
            color: $success-color;
        }

        .icon-success {
            fill: $success-color;
        }
    }

</style>