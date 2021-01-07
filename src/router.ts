import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import ModalDemo from "./components/ModalDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import {h} from "vue";
import intro from "./markdown/intro.md";
import getStart from "./markdown/get-start.md";
import install from "./markdown/install.md";
// @ts-ignore
const md = str => h(Markdown, {content: str, key: str});
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc", component: Doc, children: [
                {
                    path: "", redirect: "/doc/intro"
                },
                {
                    path: "intro", component: md(intro)
                },
                {
                    path: "install", component: md(install)
                },
                {
                    path: "get-started", component: md(getStart)
                }, {
                    path: "switch", component: SwitchDemo
                }, {
                    path: "button", component: ButtonDemo
                },
                {
                    path: "modal", component: ModalDemo
                },
                {
                    path: "tabs", component: TabsDemo
                },]
        }
    ]
});
router.afterEach(() => {
    console.log("路由切换了");
});