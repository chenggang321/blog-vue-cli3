<template>
    <el-dialog
        title="登录"
        :visible.sync="subValue"
        width="60%"
        v-bind="$attrs"
        @click="$listeners"
        :modal-append-to-body="false"
    >
        <el-tabs type="border-card">
            <el-tab-pane label="登录">
                <LoginForm @loginSuccess="close" />
            </el-tab-pane>
            <el-tab-pane label="注册">
                <RegisterForm />
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
import modelMixins from "@/mixins/modelMixins";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default {
    name: "Login",
    mixins: [modelMixins],
    components: {
        LoginForm,
        RegisterForm,
    },
    methods: {
        close() {
            this.subValue = false;
        },
    },
};
</script>

<style scoped></style>
