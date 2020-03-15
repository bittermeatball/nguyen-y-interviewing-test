<template>
  <div>
    <div class="d-flex mt-3 ml-3 mb-3" style="flex-direction: row-reverse;">
      <b-input-group style="width: 250px" class="mr-3">
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Type to Search"
          style="background: linear-gradient(270deg, rgb(181, 181, 181), rgb(255, 255, 255)); border: none; border-radius: 0; box-shadow: none"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            variant="danger"
            :disabled="!filter"
            @click="filter = ''"
            style="background: linear-gradient(90deg, rgb(186, 20, 20), rgb(199, 113, 113)); border: none; border-radius: 0"
            >Clear</b-button
          >
        </b-input-group-append>
      </b-input-group>
      <b-form-checkbox-group v-model="filterWith" class="mt-1">
        <b-form-checkbox value="customer_email"
          >Search with email</b-form-checkbox
        >
      </b-form-checkbox-group>
    </div>
    <b-table
      :fields="fields"
      :items="items.data"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterWith"
      @filtered="onFiltered"
      responsive="md"
      id="appointment-table"
    >
      <template v-slot:cell(id)="row">
        <b>{{ row.item.id }}</b>
        <b-img
          blank
          :blank-color="row.item.color"
          class="ml-2"
          width="12"
          height="12"
        />
      </template>
      <template v-slot:cell(status)="data">
        <b>
          <span :class="`text-${data.value == 1 ? 'success' : 'danger'}`">
            {{ data.value == 1 ? "Available" : "Unavailable" }}
          </span>
        </b>
      </template>
      <template v-slot:cell(date_time)="data">
        {{ data.value | formatDate("DD-MM-YYYY") }}
        at
        {{ data.value | formatDate("hh:mm:ss") }}
      </template>
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          @click="showDetail(row.item)"
          class="mr-1 appointment-table-action-button"
          variant="info"
        >
          Detail
        </b-button>
      </template>
    </b-table>
    <div class="mb-1">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :number_of_pages="numberOfPages"
        :per-page="perPage"
        size="sm"
        class="my-0 float-right"
        aria-controls="appointment-table"
      ></b-pagination>
    </div>
    <DetailModal />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {
    DetailModal: () => import("@/components/Home/DetailModal.vue")
    // Receive data from VueX-Store's state
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "customer_last_name", label: "Last name", sortable: true },
        { key: "customer_first_name", label: "First name", sortable: true },
        { key: "customer_email", label: "Email", sortable: true },
        { key: "customer_phone", label: "Phone", sortable: true },
        { key: "date_time", label: "Date time", sortable: true },
        "actions"
      ],
      currentPage: 1,
      filter: "",
      filterWith: []
    };
  },
  computed: {
    ...mapState({
      items: "appointments"
    }),
    totalRows() {
      return this.$store.state.appointments.pagination.total;
    },
    perPage() {
      return this.$store.state.appointments.pagination.per_page;
    },
    numberOfPages() {
      return this.$store.state.appointments.pagination.number_of_pages;
    }
  },
  methods: {
    showDetail(appointment) {
      this.$store.commit("SELECT_APPOINTMENT", appointment);
      this.$root.$emit("bv::show::modal", "appointment-detail");
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.$store.commit("SET_CURRENT_PAGE", 1);
      this.$store.commit("SET_TOTAL", filteredItems.length);
    }
  }
};
</script>

<style lang="scss" scoped>
.appointment-table-action-button {
  background: linear-gradient(120deg, rgb(71, 71, 207), rgb(129, 129, 233));
  border: none !important;
  border-radius: 0;
  transform: scale(1);
  transition-duration: 0.3s;
}
.appointment-table-action-button:hover {
  transform: scale(1.1);
}
</style>
