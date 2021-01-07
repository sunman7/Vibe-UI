import Modal from "./Modal.vue";
import { createApp, h } from "vue";
export const openModal = (options) => {
    const { title, content, ok, cancel } = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        console.log("1");
        app.unmount(div);
        div.remove();
    };
    const app = createApp({
        render() {

            return h(
                // @ts-ignore
                Modal,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    ok, cancel
                },
                {
                    title,
                    content,
                }
            );
        },
    });
    app.mount(div);
};