<template>
    <div>
        <CodeDemo :component="SwitchNormal"/>
        <CodeDemo :component="SwitchDisabled"/>
    </div>
</template>

<script lang="ts">
    import SwitchNormal from "./demo/Switch.normal.vue";
    import SwitchDisabled from "./demo/Switch.disabled.vue";
    import "prismjs";
    import "prismjs/themes/prism.css";
    import CodeDemo from "./CodeDemo.vue";

    const Prism = (window as any).Prism;
    console.log(Prism);


    export default {
        components: {
            SwitchNormal,
            SwitchDisabled,
            CodeDemo,
        },
        setup() {
            return {SwitchNormal, SwitchDisabled, Prism};
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }


</style>