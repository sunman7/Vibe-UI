<template>
    <div class="topNav">

        <router-link to="/" class="logo">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconlogo"></use>
            </svg>
        </router-link>

        <ol class="menu">
            <router-link to="/doc">文档</router-link>
        </ol>

        <svg v-if="toggleAsideVisible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#iconmenu1"></use>
        </svg>

    </div>
</template>
S
<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        props: {
            toggleAsideVisible: false
        },
        setup() {
            console.log();
            const menuVisible = inject<Ref<Boolean>>("xxx");
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value;
            };
            return {toggleMenu};
        }
    };
</script>
<style lang="scss" scoped>
    $text: #df7861;
    $bg: #fcf8e8;
    $box-shadow: 0 5px 5px rgb(51 51 51 / 10%);

    .topNav {
        background: #fff;
        z-index:10;
        position: fixed;
        color: $text;
        display: flex;
        padding: 16px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(grey, 10%);
        box-shadow: $box-shadow;
        > .logo {
            max-width: 6em;
            margin-right: auto;

            > svg {
                width: 48px;
                height: 48px;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            flex-direction: row;

            > li {
                margin: 0 1em;
            }
        }

        .toggleAside {
            height: 32px;
            width: 32px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 16px;
            display: none;

        }

        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;

            }
            > .toggleAside {
                display: inline-block;
            }

        }
    }

</style>