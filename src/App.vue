<template>
  <section v-if="!childFormSubmitted">
    <TicketForm
      @childFormSubmitted="processSubmitEvent"
      @childFormData="processChildFormData"
    ></TicketForm>
  </section>
  <section v-if="childFormSubmitted && childFormData">
    <TicketInstance :ticketFormData="childFormData"></TicketInstance>
  </section>
</template>

<script>
import TicketForm from "./components/TicketForm.vue";
import TicketInstance from "./components/TicketInstance.vue";

export default {
  components: { TicketForm, TicketInstance },
  data() {
    return {
      childFormSubmitted: false,
      childFormData: null
    };
  },
  methods: {
    processSubmitEvent(value) {
      console.log("processSubmitEvent occurred with value: ", value);
      if (value) {
        this.childFormSubmitted = true;
      }
    },
    processChildFormData(value) {
      console.log("processChildFormData occurred with value: ", value);
      this.childFormData = value;
    }
  }
};
</script>

<style>
.container {
  margin: auto;
  width: 850px;
}

.side-by-side {
  display: flex;
  justify-content: space-between;
}

.inline-input {
  width: 415px;
  min-height: 40px;
  border-radius: 3px;
  border-width: 1.25px;
  border-color: #b4b8ba;
  border-style: solid;
}

.inline-input:hover {
  cursor: pointer;
}

button:hover {
  cursor: pointer;
}

.block-input-width {
  min-width: 845px;
  min-height: 40px;
  border-radius: 3px;
  border-width: 1.25px;
  border-color: #b4b8ba;
  border-style: solid;
}

.block-input-width:hover {
  cursor: pointer;
}

i.fa-trash-can:hover {
  cursor: pointer;
}

i.fa-plus {
  margin-right: 10px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-15 {
  margin-bottom: 15px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.ul-style {
  padding-left: 0px;
}

.label-style {
  font-weight: bold;
}

span.multiselect__tag {
  background-color: #cce5fd;
  color: #324b64;
  font-weight: bold;
}

.file-attachment-style {
  color: #2f7bbb;
  margin-right: 40px;
}

.attach-button {
  background-color: #ffffff;
  border-color: #b4b8ba;
  border-radius: 8px;
  border-style: solid;
  border-width: 1.25px;
  height: 40px;
  width: 250px;
}

.submit-button {
  background-color: #082539;
  border-radius: 8px;
  border-style: solid;
  color: #ffffff;
  height: 40px;
  width: 75px;
}

.form-button-container {
  display: flex;
  justify-content: flex-end;
}

.cancel-button {
  border-color: #b4b8ba;
  border-radius: 8px;
  border-style: solid;
  border-width: 0px;
  background-color: #ffffff;
  font-weight: bold;
  height: 40px;
  width: 75px;
}

.validation-error {
  color: red;
  margin-left: 10px;
}

/* Suppress carat icon in <VueMultiselect> */
div.multiselect__select::before {
  visibility: hidden;
}
</style>
