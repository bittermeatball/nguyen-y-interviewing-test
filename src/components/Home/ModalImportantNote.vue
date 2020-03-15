<template>
  <b-col xl="8" lg="8" md="12">
    <div class="mb-2 p-3">
      <!-- Right block header -->
      <b-row>
        <b-col class="text-right">
          <small class="my-1 text-muted float-left">
            <b>
              Event id:
              <span> #{{ data.event_id == "" ? "NaN" : data.event_id }} </span>
            </b>
          </small>
          <small class="my-1 text-muted">
            <b>
              Added at:
            </b>
            {{ data.create_date | formatDate("DD-MM-YYYY") }}
            at
            {{ data.create_date | formatDate("hh:mm") }}
          </small>
        </b-col>
      </b-row>
      <b-row>
        <!-- Right block customer note -->
        <b-card class="m-3 pt-3 pl-3 pr-3" style="width: 100%">
          <b>
            <fa :icon="['fas', 'exclamation-circle']" />
            Customer's note:
          </b>
          {{ data.customer_note }}
        </b-card>
        <!-- Right block staff note -->
        <b-card class="mb-3 ml-3 mr-3 pt-3 pl-3 pr-3" style="width: 100%">
          <b>
            <fa :icon="['fas', 'exclamation-circle']" />
            Staff's note:
          </b>
          {{ data.staff_note == "" ? "None" : data.staff_note }}
        </b-card>
        <!-- Right block sent message -->
        <b-card class="mb-3 ml-3 mr-3 pt-3 pl-3 pr-3" style="width: 100%">
          <b>
            <fa :icon="['fas', 'exclamation-circle']" />
            Sent {{ data.send_sms }}
            {{ data.send_sms > 1 ? "messages" : "message" }}
            with the last was at
          </b>
          {{ data.last_sms | formatDate("DD-MM-YYYY hh:mm") }}
        </b-card>
        <!-- Right block available doctors -->
        <b-card class="mb-3 ml-3 mr-3 pt-3 pl-3 pr-3" style="width: 100%">
          <b>
            <fa :icon="['fas', 'exclamation-circle']" />
            There
            {{ data.available_doctors > 1 ? "are" : "is" }}
            {{ data.available_doctors }}
            {{ data.available_doctors > 1 ? "doctors" : "doctor" }}
            available
          </b>
        </b-card>
      </b-row>
      <!-- Right block selected items -->
      <b-row>
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Office selected"
            :icon="['fas', 'building']"
            :value="data.office_selected == '' ? '0' : data.office_selected"
          />
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Doctor selected"
            :icon="['fas', 'user-md']"
            :value="data.doctor_selected == '' ? '0' : data.doctor_selected"
          />
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Package selected"
            :icon="['fas', 'archive']"
            :value="data.package_selected == '' ? '0' : data.package_selected"
          />
        </b-col>
      </b-row>
      <!-- Right block completed items -->
      <b-row class="mt-3">
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Invoice completed"
            :icon="['fas', 'file-invoice-dollar']"
            :value="data.invoice_complete == '' ? '0' : data.invoice_complete"
          />
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Email completed"
            :icon="['fas', 'envelope-open-text']"
            :value="data.invoice_complete == '' ? '0' : data.invoice_complete"
          />
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <ModalListItem
            label="Fax completed"
            :icon="['fas', 'fax']"
            :value="data.invoice_complete == '' ? '0' : data.invoice_complete"
          />
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>
<script>
export default {
  props: ["data"],
  components: {
    ModalListItem: () => import("@/components/Home/ModalListItem.vue")
  }
};
</script>
