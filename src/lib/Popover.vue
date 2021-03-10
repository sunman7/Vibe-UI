<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper">
            <slot name="content" ref="contentWrapper" v-if="visible" @click.stop></slot>
        </div>
        <span ref="trigger">
            <slot></slot>
        </span>
    </div>
</template>

<script type="ts">
    export default {
        data() {
            return {
                visible: false
            };
        },
        methods: {
            xxx() {
                this.visible = !this.visible;
                if (this.visible === true) {
                    this.$nextTick(() => {// 解决点击就关闭问题 用nextTick
                        document.body.appendChild(this.refs.contentWrapper);
                        let {width, height, top, left} = this.$refs.trigger.getBoundingClientRect();
                        this.refs.contentWrapper.style.left = left + "px";
                        this.refs.contentWrapper.style.top = top + "px";//监听整个document而不是body
                        let eventHandler = () => {
                            this.visible = false;
                            document.removeEventListener("click", eventHandler);
                        };
                        //使用function是为了让函数有名字 可以removeListener
                        document.addEventListener("click", eventHandler);
                    });

                }
            }
        },
        mounted() {

        }
    };
</script>

<style lang="scss">
    .popover {
        display: block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>
