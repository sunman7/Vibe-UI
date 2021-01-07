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
            <use xlink:href="#iconmenu"></use>
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
    $font-color: #007974;
    .topNav {
        color: $font-color;
        display: flex;
        padding: 16px;
        position: relative;
        justify-content: center;
        align-items: center;
        z-index: 20;
        border-bottom: 1px solid rgba(grey,10%);

        > .logo {
            max-width: 6em;
            margin-right: auto;

            > svg {
                width: 32px;
                height: 32px;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

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
            background: fade-out(black, 0.9);
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