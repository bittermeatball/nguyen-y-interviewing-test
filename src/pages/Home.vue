<template>
  <b-container fluid>
    <ListContainer class="mt-3 mb-3">
      <ListTable />
    </ListContainer>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer: () => import("@/components/Home/ListContainer.vue"),
    ListTable: () => import("@/components/Home/ListTable.vue")
  },
  methods: {
    ...mapActions(["fetchAppointment"])
  },
  computed: {
    ...mapState({
      appointments: "appointments"
    })
  },
  created() {
    if (this.appointments.data.length == 0) {
      this.fetchAppointment();
    }
  }
};
</script>
