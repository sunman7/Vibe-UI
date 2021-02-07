<template>
    <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
    export default {
        props: {
            content: {
                type: String,
                required: true
            }
        },

    };

</script>
<style lang="scss">
    $text: #df7861;
    $blockquote: #fcf8e8;

    article.markdown-body {
        font-size: 24px;
        @media (max-width: 500px) {
            font-size: 16px;
        }

        > h1, h2 {
            color: $text;
        }

        > p {
            > code {
                color: $text;
            }
        }

        > blockquote {
            background: $blockquote;

            > p {
                color: $text;
            }
        }
    }

</style>