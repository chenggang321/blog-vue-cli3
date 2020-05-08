<template>
    <div>
        <form id="loginBox" class="form-horizontal">
            <div class="form-group">
                <label for="username" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-user"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="username"
                        v-model="username"
                        type="email"
                        name="username"
                        class="form-control"
                        placeholder="username"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-lock"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="password"
                        v-model="password"
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <input
                        type="button"
                        value="登陆"
                        class="btn btn-default"
                        @click="login"
                    />
                    <a
                        href="javascript:;"
                        class="btn btn-default colMint"
                        @click="toRegister"
                        >去注册</a
                    >
                    <br />
                    <div
                        class="alert colWarning"
                        role="alert"
                        style="text-align: center; margin-bottom: 0;"
                    />
                </div>
            </div>
        </form>
        <form id="registerBox" class="form-horizontal" style="display: none;">
            <div class="form-group">
                <label for="username-1" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-user"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="username-1"
                        v-model="username"
                        type="text"
                        name="username"
                        class="form-control"
                        placeholder="username"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="password-1" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-lock"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="password-1"
                        v-model="password"
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="repassword" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-ok"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="repassword"
                        v-model="repassword"
                        type="password"
                        name="repassword"
                        class="form-control"
                        placeholder="repassword"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-xs-1 col-sm-2 control-label"
                    ><span class="glyphicon glyphicon-envelope"
                /></label>
                <div class="col-xs-11 col-sm-10">
                    <input
                        id="email"
                        v-model="email"
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="email"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <input
                        type="button"
                        value="注册"
                        class="btn btn-default"
                        @click="register"
                    />
                    <a
                        href="javascript:;"
                        class="btn btn-default colMint"
                        @click="toLogin"
                        >去登录</a
                    >
                    <br />
                    <div
                        class="alert colWarning"
                        role="alert"
                        style="text-align: center; margin-bottom: 0;"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import toast from "@/components/toast/toast";

export default {
    name: "Login",
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
        toRegister() {
            // eslint-disable-next-line
            $("#loginBox").hide();
            // eslint-disable-next-line
            $("#registerBox").show();
        },
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
