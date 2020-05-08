<template>
    <el-form :model="loginForm" ref="loginForm">
        <el-form-item
            label="账号"
            prop="username"
            :rules="[
                {
                    required: true,
                    message: '请填写账号',
                    trigger: 'blur',
                },
            ]"
        >
            <el-input
                type="text"
                v-model="loginForm.username"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            prop="password"
            :rules="[
                {
                    required: true,
                    validator: validatePass,
                    trigger: 'blur',
                },
            ]"
        >
            <el-input
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button size="small" type="primary" @click="login"
                >登录
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "index",
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        return {
            validatePass,
            loginForm: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapMutations({
            setUser: "SET_USER",
        }),
        login() {
            this.$refs["loginForm"].validate((valid) => {
                if (valid) {
                    const user = {
                        username: this.loginForm.username,
                        password: this.loginForm.password,
                    };
                    this.$api.login(user).then((res) => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.setUser(JSON.stringify(data.data));
                            this.$message({
                                message: "登录成功",
                                type: "success",
                            });
                            this.$emit("loginSuccess");
                        } else {
                            this.$message.error(data.message);
                        }
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped></style>
