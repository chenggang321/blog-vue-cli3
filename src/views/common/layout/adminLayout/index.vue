<template>
  <div>
    <AdminHeader />
    <div class="container-fluid">
      <div class="row">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/views/common/layout/adminHeader'

export default {
  name: 'Index',
  components: {
    AdminHeader
  }
}
</script>

<style scoped></style>
