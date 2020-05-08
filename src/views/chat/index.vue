<template>
    <div>
        <h3>chat</h3>
        <input v-model="text" type="text" />
        <button @click="send">发送</button>
        <input ref="file" type="file" />
        <button @click="upload">上传</button>
        <img src="http://localhost:80/api/loadImg" alt="" />
    </div>
</template>

<script>
import { sendMsg } from "@/utils/socket";

export default {
    name: "Index",
    data() {
        return {
            text: "",
            file: null,
        };
    },
    methods: {
        send() {
            sendMsg(1, 2, this.text);
        },
        upload() {
            const file = this.$refs.file.files[0];
            const formData = new FormData();
            formData.append("avatar", file);
            this.$api.uploads(formData);
        },
    },
};
</script>

<style scoped></style>
