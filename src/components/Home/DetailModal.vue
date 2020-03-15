<template>
  <!-- Info modal -->
  <b-modal id="appointment-detail" size="xl">
    <b-row>
      <!-- Left block -->
      <ModalKeyData :data="$store.state.appointment" />
      <!-- Right block -->
      <ModalImportantNote :data="$store.state.appointment" />
    </b-row>
    <template v-slot:modal-footer>
      <div></div>
    </template>
  </b-modal>
</template>
<script>
export default {
  components: {
    ModalKeyData: () => import("@/components/Home/ModalKeyData.vue"),
    ModalImportantNote: () => import("@/components/Home/ModalImportantNote.vue")
  }
};
</script>
