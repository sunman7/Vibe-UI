<template>
    <div class="vibe-tabs">
        <div class="vibe-tabs-nav" ref="container">
            <div class="vibe-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)"
                 :ref="el =>{if(t === selected) selectedItem =el}"
                 :key="index"
                 :class="{selected: t === selected}">
                {{t}}
            </div>
            <div class="vibe-tabs-nav-indicator" ref="indicator"></div>

        </div>
        <div class="vibe-tabs-content">
            <component :is="current" :key="current.props.title"/>
        </div>
    </div>

</template>

<script lang="ts">
    import Tab from "./Tab.vue";
    import {ref, onMounted, onUpdated, watchEffect, computed} from "vue";

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const selectedItem = ref<HTMLDivElement>(null);
            const indicator = ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);
            const current = computed(() => {
                return defaults.find(tag => tag.props.title === props.selected);
            });

            onMounted(() => {
                watchEffect(() => {
                    const {width, left: left2} = selectedItem.value.getBoundingClientRect();
                    indicator.value.style.width = width + "px";
                    const {left: left1} = container.value.getBoundingClientRect();
                    indicator.value.style.left = left2 - left1 + "px";
                }, {flush: "post"});
            });
            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                if (tag.type !== Tab) {
                    throw new Error("Tabs的子标签是Tab");
                }
            });

            const titles = defaults.map((tag) => {
                return tag.props.title;
            });
            const select = (title) => {
                context.emit("update:selected", title);
            };
            return {defaults, titles, selectedItem, indicator, select, container,current};

        }


    };

</script>

<style lang="scss">
    $blue: rgb(24, 103, 192);
    $color: #333;
    $border-color: #d9d9d9;
    .vibe-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;

            & &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:hover,&:focus{
                    background: darken(white, 5%);
                }
                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }

            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                transition: all 250ms;
            }
        }

        &-content {
            padding: 8px 0;


        }
    }
</style>