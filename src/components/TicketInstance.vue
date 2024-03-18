<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <section class="container">
    <h2>Ticket Details</h2>
    <div class="side-by-side">
      <div class="margin-bottom-15">
        <div class="margin-bottom-10">
          <label class="label-style">Category</label>
        </div>
        <select class="inhibit-input inline-input no-borders">
          <option v-for="(element, key) in ticketFormData.category" :key="key">
            {{ element }}
          </option>
        </select>
      </div>
      <div>
        <div class="margin-bottom-10">
          <label class="label-style">Type</label>
        </div>
        <VueMultiselect
          class="inhibit-input inline-input no-borders"
          v-model="typeDisplayed"
          :options="ticketFormData.type"
          :multiple="true"
          :close-on-select="true"
          label=""
          placeholder=""
          track-by=""
          initialValues="ticketFormData.type"
        />
      </div>
    </div>
    <div class="margin-bottom-10">
      <label class="label-style">Subject</label>
    </div>
    <div class="margin-bottom-15">
      <input
        v-model="subject"
        class="inhibit-input block-input-width no-borders"
      />
    </div>
    <div class="margin-bottom-10">
      <label class="label-style">Description</label>
    </div>
    <div class="margin-bottom-15">
      <input
        v-model="description"
        class="inhibit-input block-input-width no-borders"
      />
    </div>
    <div class="margin-bottom-10">
      <label class="label-style">Ticket Files & Documents</label>
    </div>
    <ul v-for="(element, key) in files" :key="key" class="ul-style">
      <span class="file-attachment-style">{{ element.name }}</span>
    </ul>
  </section>
</template>

<script setup>
import VueMultiselect from "vue-multiselect";
</script>

<script>
export default {
  props: ["ticketFormData"],
  data() {
    return {
      description: this.ticketFormData.description,
      files: this.ticketFormData.files,
      subject: this.ticketFormData.subject,
      typeDisplayed: this.ticketFormData.type
    };
  }
};
</script>

<style>
.inhibit-input {
  pointer-events: none;
}

input.no-borders,
select.no-borders {
  border: none;
}

/* Suppress border around <VueMultiselect> */
div.multiselect.inhibit-input.inline-input.no-borders {
  border: none;
}

div.multiselect__tags {
  border: none;
}
</style>
