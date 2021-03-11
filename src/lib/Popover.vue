<template>
    <div class="popover"  ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="trigger" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script type="ts">
    export default {
        mounted() {
            if (this.trigger === "click") {
                this.$refs.popover.addEventListener("click", this.onClick);
            } else {
                this.$refs.popover.addEventListener("mouseenter", this.open);
                this.$refs.popover.addEventListener("mouseleave", this.close);
            }
        },
        destroyed() {
            if (this.trigger === "click") {
                this.$refs.popover.removeEventListener("click", this.onclick);
            } else {
                this.$refs.popover.removeEventListener("mouseenter", this.open);
                this.$refs.popover.removeEventListener("mouseleave", this.close);
            }
        },
        props: {
            position: {
                type: String,
                default: "top",
                validator(value) {
                    return ["top", "left", "bottom", "right"].indexOf(value) >= 0;
                }
            },
            trigger: {
                type: String,
                default: "click",
                validator(value) {
                    return ["click", "hover"].indexOf(value) >= 0;
                }
            }
        },
        data() {
            return {
                visible: false
            };
        },
        methods: {
            positionContent() {
                const {contentWrapper, trigger} = this.$refs;
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = trigger.getBoundingClientRect();
                let {height: height2} = contentWrapper.getBoundingClientRect();
                switch (this.position) {
                    case "top":
                        contentWrapper.style.left = left + window.scrollX + "px";
                        contentWrapper.style.top = top + window.scrollY + "px";//监听整个document而不是body
                        break;
                    case "bottom":
                        contentWrapper.style.left = left + window.scrollX + "px";
                        contentWrapper.style.top = top + height + window.scrollY + "px";// 加上高度
                        break;
                    case "left":
                        contentWrapper.style.left = left + window.scrollX + "px";
                        contentWrapper.style.top = top + window.scrollY - (height2 - height) / 2 + "px";// 居中对齐
                        break;
                    case "right":
                        contentWrapper.style.left = left + window.scrollX + width + "px"; //加上按钮的距离
                        contentWrapper.style.top = top + window.scrollY - (height2 - height) / 2 + "px";// 居中对齐
                        break;

                }
            },
            clickDocument(e) {
                //解决点击上面也会关闭popover的问题
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return;
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return;
                }
                this.close();
            },
            close() {
                this.visible = false;
                document.removeEventListener("click", this.clickDocument);
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {// 解决点击就关闭问题 用nextTick
                    this.positionContent();
                    //使用function是为了让函数有名字 可以removeListener
                    document.addEventListener("click", this.clickDocument);
                });
            },
            onClick(event) {
                //点击按钮就触发
                if (this.$refs.trigger.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                        console.log("关闭");
                    } else {
                        this.open();
                    }

                }
            }
        }
    };
</script>

<style lang="scss">
    $border-color: #333;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        background: #fff;
        box-shadow: 3px 3px 3px #c8c8c8;
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: .5em 1em;
        max-width: 15em;
        word-break: break-all;

        &::before, &::after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            border: 10px solid transparent;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before {
                border-top-color: black;
                border-bottom: none;
                top: 100%;
            }

            &::after {
                border-top-color: #fff;
                border-bottom: none;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before {
                border-bottom-color: black;
                border-top: none;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: #fff;
                border-top: none;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                border-right: none;
                top: 50%;
            }

            &::before {
                border-left-color: black;
                left: 100%;
            }

            &::after {
                border-left-color: #fff;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                border-left: none;
                top: 50%;
            }

            &::before {
                border-right-color: black;
                right: 100%;
            }

            &::after {
                border-right-color: #fff;
                right: calc(100% - 1px);
            }
        }

    }
</style>
.
