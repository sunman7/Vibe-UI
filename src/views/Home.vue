<template>
    <div>
        <div class="topnav-banner">
            <TopNav/>
            <div class="banner">
                <h1>VibeUI</h1>
                <h2>Vibe</h2>
                <p class="actions">
                    <a href="https://github.com">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#iconVue"></use>
                    </svg>
                    <h3>Vue3</h3>
                    <p>使用了Vue3 Composition API开发</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#iconts"></use>
                    </svg>
                    <h3>TypeScript</h3>
                    <p>源代码采用TypeScript编写</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#iconknow"></use>
                    </svg>
                    <h3>源码简洁</h3>
                    <p>组件代码简单易懂</p>

                </li>
            </ul>

        </div>
    </div>
</template>
<script lang="ts">
    import TopNav from "../components/TopNav.vue";

    export default {
        components: {
            TopNav
        }
    };
</script>
<style lang="scss" scoped>
    $text: #df7861;

    $font-color: #ff9d72;
    $button: #fcf8e8;
    $border-radius: 4px;
    .features {

        margin: 64px auto;

        @media (min-width: 800px) {
            width: 800px;
            > ul {
                > li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            > ul {
                > li {
                    width: 33.333%;
                }
            }
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                color: $text;
                width: 400px;
                padding-left: 30px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;
                @media (max-width: 400px) {
                    justify-content: start;
                }

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 32px;
                }

                > p {
                    grid-area: text;
                }
            }
        }
    }

    .topnav-banner {
        background: linear-gradient(180deg, rgba(252, 248, 232, 1) 0%, rgba(252, 242, 218, 1) 27%, rgba(250, 236, 208, 1) 47%, rgba(240, 195, 142, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
        height: 50vh;
    }

    .banner {
        color: $text;
        padding: 200px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $button;
                color: $text;
                display: inline-block;
                $h: 28px;
                line-height: $h;
                border-radius: $h/2;
                padding: 8px 24px;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

</style>