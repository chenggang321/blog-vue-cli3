<template>
    <div>
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

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <form class="form-inline my-2 my-lg-0 mr-auto">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="搜索文章"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        搜索
                    </button>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a
                            class="nav-link"
                            href="https://github.com/chenggang321"
                            >github</a
                        >
                    </li>
                    <li class="nav-item dropdown">
                        <a v-if="!userInfo" class="nav-link" href="#">
                            登录
                        </a>
                        <a v-else class="nav-link dropdown-toggle" href="#">
                            {{ userInfo.username }}
                        </a>
                        <div class="dropdown-menu" style="display: block;">
                            <router-link
                                v-if="(userInfo || {}).type === 0"
                                class="dropdown-item"
                                to="/admin"
                                >进入后台</router-link
                            >
                            <a
                                class="dropdown-item"
                                href="#"
                                @click="removeUser"
                                >退出</a
                            >
                        </div>
                        <!--<modal id="loginModal" title="登录/注册">
              <div slot="modal-body">
                <login />
              </div>
              &lt;!&ndash;<div slot="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              </div>&ndash;&gt;
            </modal>-->
                    </li>
                </ul>
            </div>
        </nav>
    </div>
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
    },
};
</script>

<style scoped>
.logo {
    width: 32px;
    height: 32px;
}
</style>
