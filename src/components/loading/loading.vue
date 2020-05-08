<template>
    <div class="loadingBox">
        <img id="loading" width="60" height="60" src="./loading.gif" />
        <p class="desc">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        title: {
            type: String,
            default: "正在载入...",
        },
    },
};
</script>

<style scoped>
.loadingBox {
    position: fixed;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
.desc {
    color: #333;
    font-size: 14px;
}
#loading {
    width: 60px;
    height: 60px;
}
</style>
