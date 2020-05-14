<template>
    <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000;"
    >
        <a class="navbar-brand" href="/"
            ><img
                class="logo"
                src="@/assets/images/favicon.png"
                style="margin-top: -5px;"
        /></a>

        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse">
            <el-input
                placeholder="搜索文章"
                v-model="key"
                class="my-2 mr-auto col-2"
                size="small"
            >
                <template slot="append"
                    ><el-button
                        icon="el-icon-search"
                        @click="search"
                    ></el-button
                ></template>
            </el-input>
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/chenggang321"
                        >github</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        v-if="!userInfo"
                        class="nav-link"
                        href="#"
                        @click="isShowLogin = true"
                    >
                        登录
                    </a>
                    <Login v-model="isShowLogin" />
                </li>
                <li class="nav-item" v-if="userInfo">
                    <el-dropdown class="m-t-10">
                        <span class="el-dropdown-link">
                            {{ userInfo.username
                            }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                v-if="(userInfo || {}).type === 0"
                            >
                                <router-link to="/admin">进入后台</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item @click="removeUser"
                                >退出</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Modal from "@/components/modal/blog-modal";
import Login from "@/views/login";
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "BlogHeader",
    components: {
        Modal,
        Login,
    },
    data() {
        return {
            isShowLogin: false,
            key: "",
        };
    },
    computed: {
        userInfo() {
            return this.user === undefined ? null : JSON.parse(this.user);
        },
        ...mapGetters({
            user: "user",
        }),
    },
    methods: {
        ...mapMutations({
            removeUser: "REMOVE_USER",
        }),
        search() {
            console.log(this.key);
        },
    },
};
</script>

<style scoped>
.logo {
    width: 32px;
    height: 32px;
}
</style>
