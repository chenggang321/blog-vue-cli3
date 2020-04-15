<template>
    <div v-if="compileContent">
        <div class="blog-card" style="margin-top:20px;">
            <h4>详情</h4>
            <h4>{{content.title}}</h4>
            <hr/>
            <p style="font-size: 10px">
                <span class="blog-tag blog-tag&#45;&#45;info"><span
                        class="glyphicon glyphicon-user blog-icon"></span><span>{{content.author}}</span></span>&nbsp;
                <span class="blog-tag blog-tag&#45;&#45;success"><span
                        class="glyphicon glyphicon-time blog-icon"></span><span>{{content.create_time}}</span></span>&nbsp;
                <span class="blog-tag blog-tag&#45;&#45;warning"><span
                        class="glyphicon glyphicon-eye-open blog-icon"></span><span>({{content.meta.views}})</span></span>&nbsp;
                <span class="blog-tag blog-tag&#45;&#45;danger"><span
                        class="glyphicon glyphicon-comment blog-icon"></span><span>({{content.meta.comments}})</span></span>
            </p>
            <div v-html="compileContent"></div>
        </div>
        <comment :articleDetail="content"></comment>
    </div>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/tomorrow.css'
    import Comment from '@/views/home/detail/comment'

    const rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    const highlightCode = () => {
        const preEl = document.querySelectorAll('pre')

        preEl.forEach((el) => {
            hljs.highlightBlock(el)
        })
    };

    export default {
        name: "detail",
        data() {
            return {
                content: null,
                compileContent: ''
            }
        },
        created() {
            const id = this.$route.params.id
            const self = this
            this.$api.getArticleDetail({id}).then(res => {
                const data = res.data
                self.content = data.data
                self.compileContent = marked(self.content.content)
            })
        },
        mounted() {
            highlightCode()
        },

        updated() {
            highlightCode()
        },
        components: {
            Comment
        }
    }
</script>

<style scoped>

</style>
