<template>
  <div class="container-fluid">
    <BlogHeader />
    <div class="row">
      <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <BlogAside />
      </div>
      <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 blog-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/views/common/layout/header'
import BlogAside from '@/views/common/layout/aside'
export default {
  name: 'Index',
  components: {
    BlogHeader,
    BlogAside
  }
}
</script>

<style scoped></style>
