<template>
    <transition name="slide">
        <aside v-show="menuVisible">
            <h2>文档</h2>
            <ol>
                <li>
                    <router-link to="/doc/intro">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                    <router-link to="/doc/get-start">开始使用</router-link>
                </li>
            </ol>
            <h2>组件</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/modal">Modal 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
    </transition>
</template>
<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        setup() {
            const menuVisible = inject<Ref<boolean>>("xxx");
            return {menuVisible};
        },
    };
</script>
<style lang="scss" scoped>
    $text: #df7861;
    $bg: white;
    $font-color: #f88f01;
    $hover: #fcf8e8;
    aside {
        background: $bg;
        box-shadow: 2px 0 2px rgba(#333, 0.1);
        width: 300px;
        padding: 20px 10px;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 90px;
        height: 100%;
        z-index: 10;

        > h2 {
            margin-bottom: 4px;
            padding: 6px 16px;
        }

        > ol {
            line-height: 40px;

            > li {
                > a {
                    display: block;
                    padding: 4px 40px;
                    height: 50px;
                    color: $text;
                    position: relative;

                    &:hover {
                        background: $hover;
                        text-decoration: none;
                    }
                }

                .router-link-active {
                    display: block;
                    border-right: 4px solid $text;

                    @media (min-width: 500px) {
                        border-right: none;
                        &::before {
                            content: "";
                            display: block;
                            animation: out 1s;
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 3px;
                            height: 50px;
                            background-color: $text;
                        }
                    }

                }
            }
        }

        @media (min-width: 500px) {
            font-size: 20px;
        }

    }

    .slide-enter-from, .slide-leave-to {
        transform: translateX(-300px);
    }

    .slide-enter-active, .slide-leave-active {
        transition: .3s linear;
    }

    @keyframes out {
        0% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }
</style>