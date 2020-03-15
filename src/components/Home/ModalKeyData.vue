<template>
  <b-col xl="4" lg="4" md="12" sm="12">
    <b-card
      :title="
        `#${data.id} ${data.customer_first_name} ${data.customer_last_name}`
      "
      class="mb-2 p-3"
    >
      <p class="my-1">
        <b>
          Status:
        </b>
        <span :class="`text-${data.status == 1 ? 'success' : 'danger'}`">
          {{ data.status == 1 ? "Available" : "Unavailable" }}
        </span>
      </p>
      <p class="my-1">
        <b>
          Label:
        </b>
        <b-img
          blank
          :blank-color="data.color"
          class="ml-2"
          width="36"
          height="12"
          style="border-radius: 6px"
        />
      </p>
      <p class="my-1">
        <b>
          Birthday:
        </b>
        {{ data.date_born | formatDate("DD-MM-YYYY") }}
      </p>
      <p class="my-1">
        <b>
          Phone:
        </b>
        {{ data.customer_phone }}
      </p>
      <p class="my-1">
        <b>
          Email:
        </b>
        {{ data.customer_email }}
      </p>
      <p class="my-1">
        <b>
          Date time:
        </b>
        {{ data.date_time | formatDate("DD-MM-YYYY") }}
        at
        {{ data.date_time | formatDate("hh:mm") }}
      </p>
      <p class="my-1">
        <b>
          End date time:
        </b>
        <span v-if="data.end_date_time">
          {{ data.end_date_time | formatDate("DD-MM-YYYY") }}
          at
          {{ data.end_date_time | formatDate("hh:mm") }}
        </span>
        <span v-if="!data.end_date_time">NaN</span>
      </p>
      <p class="my-1">
        <b>
          Re-scheduled:
        </b>
        <span>
          {{ data.is_reschedule == 0 ? "No" : "Yes" }}
        </span>
      </p>
      <b-button href="#" variant="primary">Some action</b-button>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ["data"]
};
</script>
