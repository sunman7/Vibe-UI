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
                    <p>使用了Vue3</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#iconts"></use>
                    </svg>
                    <h3>Vue3</h3>
                    <p>使用了Vue3</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#iconknow"></use>
                    </svg>
                    <h3>Vue3</h3>
                    <p>使用了Vue3</p>

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
    $green: #02bcb0;
    $border-radius: 4px;
    $font-color: #007974;
    .features {
        margin: 64px auto;
        width: 400px;

        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: center;
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
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
        }
    }

    .topnav-banner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .banner {
        color: $font-color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                color: white;
                display: inline-block;
                $h: 28px;
                line-height: $h;
                border-radius: $border-radius;
                padding: 8px 24px;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

</style>