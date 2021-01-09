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
    .markdown-body {
        @media (min-width: 800px) {
            font-size: 32px;
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