import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    appointments: {
      success: true,
      status_code: 200,
      message: "Showing appointments list",
      data: [],
      pagination: {
        current_page: 1,
        // prev_page: 0,
        // next_page: 2,
        per_page: 8,
        total: 69,
        number_of_pages: 9
      }
    },
    appointment: {}
  },
  mutations: {
    FETCH_APPOINTMENTS(state, appointments) {
      // GET DATA
      state.appointments.data = appointments;
      // GET TOTAL ROWS
      state.appointments.pagination.total = appointments.length;
      // GET NUMBER OF PAGES
      let number_of_pages = Math.round(
        appointments.length / state.appointments.pagination.per_page
      );
      let temp =
        appointments.length % state.appointments.pagination.per_page > 1
          ? 1
          : 0;
      number_of_pages += temp;
      state.appointments.pagination.number_of_pages = number_of_pages;
    },
    SELECT_APPOINTMENT(state, appointment) {
      state.appointment = appointment;
    },
    SET_CURRENT_PAGE(state, current_page) {
      state.appointments.pagination.current_page = current_page;
    },
    SET_TOTAL(state, total) {
      state.appointments.pagination.total = total;
    }
  },
  actions: {
    async fetchAppointment({ commit }) {
      try {
        let { data } = await axios.get("http://52.221.118.28/api/appointments");
        commit("FETCH_APPOINTMENTS", data);
      } catch (error) {
        alert("Something wrong, could not fetch data!");
      }
    }
  },
  modules: {}
});
