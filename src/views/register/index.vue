<template>
    <div class="container">
        <div class="login-box">
            <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div v-if="error" class="c-error">{{ error }}</div>
        <div class="m-t-60">
            <label
                >账号：<input
                    v-model="username"
                    type="text"
                    placeholder="请输入账号"
                    class="vw-input"
            /></label>
        </div>
        <div class="m-t-20">
            <label
                >密码：<input
                    v-model="password"
                    type="password"
                    placeholder="请输入密码"
                    class="vw-input"
            /></label>
        </div>
        <div class="m-t-20">
            <label
                >邮箱：<input
                    v-model="email"
                    type="text"
                    placeholder="请输入邮箱"
                    class="vw-input"
            /></label>
        </div>
        <button class="vw-button inside m-t-60" @click="handleClick">
            注册
        </button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "Register",
    data() {
        return {
            username: "",
            password: "",
            email: "",
            error: "",
        };
    },
    methods: {
        handleClick() {
            if (!this.username || !this.password) {
                this.error = "账号密码不能为空！";
                return false;
            }
            if (!this.email) {
                this.error = "邮箱不能为空";
                return false;
            }
            const user = {
                username: this.username,
                password: this.password,
                email: this.email,
            };
            this.$api.register(user).then((res) => {
                if (res.status === 200) {
                    console.log(res);
                }
            });
        },
        ...mapMutations({
            setUser: "SET_USER",
        }),
    },
};
</script>

<style scoped>
.container {
    text-align: center;
}

.login-box {
    margin: 150px 0 10px 0;
}
</style>
