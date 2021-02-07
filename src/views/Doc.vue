<template>
    <div class="layout">
        <TopNav :toggleAsideVisible="true" class="nav"/>
        <div class="content">
            <Aside class="aside"></Aside>
            <main>
                <router-view/>
            </main>

        </div>
    </div>
</template>
<script lang="ts">

    import TopNav from "../components/TopNav.vue";
    import {inject, Ref} from "vue";
    import Aside from "./Aside.vue";

    export default {
        components: {
            TopNav, Aside
        },
        setup() {

        }
    };
</script>
<style lang="scss" scoped>


    $bg: #fcf8e8;
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 300px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }

    .content {
        display: flex;
        > aside {
            flex-shrink: 0;
        }

        > main {
            flex-grow: 1;
            padding: 60px 50px;
            background: white;
            @media (max-width: 500px) {
                padding: 60px 10px;
            }

        }
    }

    main {
        height: 100vh;
        overflow: auto;
    }

</style>
