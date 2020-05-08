<template>
    <el-form :model="registerForm" ref="registerForm">
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
                v-model="registerForm.username"
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
                v-model="registerForm.password"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item
            label="确认密码"
            prop="repassword"
            :rules="[
                {
                    required: true,
                    validator: validateRePass,
                    trigger: 'blur',
                },
            ]"
        >
            <el-input
                type="password"
                v-model="registerForm.password"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item
            label="邮箱"
            prop="email"
            :rules="[
                {
                    required: true,
                    message: '请填写邮箱',
                    trigger: 'blur',
                },
            ]"
        >
            <el-input
                type="password"
                v-model="registerForm.email"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button size="small" type="primary" @click="register"
                >注册</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script>
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
        const validateRePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.registerForm.repassword) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            validatePass,
            validateRePass,
            registerForm: {
                username: "",
                password: "",
                repassword: "",
                email: "",
            },
        };
    },
    methods: {
        register() {
            this.$refs["registerForm"].validate((valid) => {
                if (valid) {
                    const user = {
                        username: this.username,
                        password: this.password,
                        email: this.email,
                    };
                    this.$api.register(user).then((res) => {
                        if (res.status === 200) {
                            this.$message.success("注册成功");
                        }
                    });
                }
            });
        },
    },
};
</script>

<style scoped></style>
