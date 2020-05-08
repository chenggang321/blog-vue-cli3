<template>
    <el-dialog
        title="提示"
        :visible.sync="subValue"
        width="30%"
        v-bind="$attrs"
        @click="$listeners"
        :modal-append-to-body="false"
    >
        <span>这是一段信息</span>
    </el-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import toast from "@/components/toast/toast";
import modelMixins from "@/mixins/modelMixins";

export default {
    name: "Login",
    mixins: [modelMixins],
    data() {
        return {
            username: "",
            password: "",
            repassword: "",
            email: "",
            error: "",
        };
    },
    methods: {
        login() {
            if (!this.username || !this.password) {
                this.error = "账号密码不能为空！";
                return false;
            }
            const user = {
                username: this.username,
                password: this.password,
            };
            // 请求后台数据
            this.$api.login(user).then((res) => {
                const data = res.data;
                if (data.code === 200) {
                    this.setUser(JSON.stringify(data.data));
                    toast({
                        position: "top",
                        message: "登录成功！",
                    });
                    // eslint-disable-next-line
                    $("#loginModal").modal("hide");
                } else {
                    toast({
                        hasIcon: true,
                        position: "top",
                        message: data.message,
                    });
                }
            });
        },
        toLogin() {
            // eslint-disable-next-line
            $("#loginBox").show();
            // eslint-disable-next-line
            $("#registerBox").hide();
        },
        register() {
            if (!this.username || !this.password) {
                this.error = "账号密码不能为空！";
                return false;
            }
            if (this.password !== this.repassword) {
                this.error = "两次密码不一致！";
                return false;
            }
            if (!this.email) {
                this.error = "邮箱不能为空！";
                return false;
            }

            const user = {
                username: this.username,
                password: this.password,
                email: this.email,
            };

            this.$api.register(user).then((res) => {
                const data = res.data;
                if (data.code === 200) {
                    toast({
                        hasIcon: true,
                        position: "top",
                        message: "注册成功！",
                    });
                    // eslint-disable-next-line
                    $("#loginModal").modal("hide");
                } else {
                    toast({
                        hasIcon: true,
                        position: "top",
                        message: data.message,
                    });
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
.form-horizontal {
    /*width: 450px;*/
    margin: 0 auto;
}
</style>
