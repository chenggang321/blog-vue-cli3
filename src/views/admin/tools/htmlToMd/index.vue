<template>
    <div>
        <ol class="breadcrumb">
            <li><a href="/">首页</a></li>
            <li><span>工具</span></li>
        </ol>
        <h3>html转md</h3>
        <div class="form-group">
            <label for="code">html：</label>
            <textarea
                id="code"
                v-model="code"
                class="form-control"
                rows="10"
                placeholder="请输入html"
            />
        </div>
        <div class="form-group">
            <label for="editor">md：</label>ß
            <mavon-editor id="editor" v-model="content" style="height: 100%;" />
        </div>
        <button class="btn btn-default" @click="handleClick">转换</button>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
    name: "HtmlToMd",
    components: {
        mavonEditor,
    },
    data() {
        return {
            code: "",
            content: "",
        };
    },
    methods: {
        handleClick() {
            const self = this;
            // eslint-disable-next-line
            self.content = new reMarked().render(self.code);
        },
    },
};
</script>

<style scoped></style>
