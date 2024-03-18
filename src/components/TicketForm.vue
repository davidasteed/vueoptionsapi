<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <section class="container" @submit.prevent="submitForm">
    <form>
      <h2>Ticket Details</h2>
      <div class="side-by-side">
        <div class="margin-bottom-15">
          <div class="margin-bottom-10">
            <label class="label-style">Category</label>
          </div>
          <select v-model="category" class="inline-input">
            <option v-for="(element, key) in defaultCategories" :key="key">
              {{ element }}
            </option>
          </select>
        </div>
        <div>
          <div class="margin-bottom-10">
            <label class="label-style">Type</label
            ><span v-if="formErrors.type" class="validation-error">{{
              formErrors.type
            }}</span>
          </div>
          <VueMultiselect
            v-model="typesChosen"
            :options="categoryChosen()"
            :multiple="true"
            :close-on-select="true"
            label=""
            placeholder=""
            track-by=""
            class="inline-input"
          />
        </div>
      </div>
      <div class="margin-bottom-10">
        <label class="label-style">Subject</label
        ><span v-if="formErrors.subject" class="validation-error">{{
          formErrors.subject
        }}</span>
      </div>
      <div class="margin-bottom-15">
        <input v-model="subject" class="block-input-width" />
      </div>
      <div class="margin-bottom-10">
        <label class="label-style">Description</label
        ><span v-if="formErrors.description" class="validation-error">{{
          formErrors.description
        }}</span>
      </div>
      <div class="margin-bottom-15">
        <input v-model="description" class="block-input-width" />
      </div>
      <div class="margin-bottom-10">
        <label class="label-style">Ticket Files & Documents</label>
      </div>
      <ul v-for="(element, key) in files" :key="key" class="ul-style">
        <span class="file-attachment-style">{{ element.name }}</span
        ><span @click="onFileDelete(element.name)"
          ><i fileName="element.name" class="fa-regular fa-trash-can"></i
        ></span>
      </ul>
      <div class="margin-bottom-20">
        <input
          type="file"
          id="fileUpload"
          ref="fileUploadRef"
          v-on:change="onFileChange($event)"
          v-on:click="$event.target.value = ''"
          hidden
        />
        <button v-on:click="chooseFiles" type="button" class="attach-button">
          <i fileName="element.name" class="fa-regular fa-plus"></i>
          Attach File
        </button>
      </div>
      <div class="form-button-container">
        <button v-on:click="cancelForm" type="button" class="cancel-button">
          Cancel
        </button>
        <button type="submit" class="submit-button submit-button">
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import VueMultiselect from "vue-multiselect";
</script>

<script>
import { toRaw } from "vue";
import {
  defaultCategories,
  defaultTypes,
  ticketFormErrors
} from "../data/ticketData";
import { getKeyByValue } from "../utils/utils";

export default {
  props: ["childFormData"],
  data() {
    return {
      category: defaultCategories.hardware, // default Category value when component initializes
      description: null,
      files: [],
      formData: this.childFormData,
      formErrors: {},
      formSubmitted: false,
      typesChosen: defaultTypes[this.categoryChosen()],
      subject: null
    };
  },
  emits: ["childFormSubmitted", "childFormData"],
  methods: {
    displayDebugData() {
      console.log("this.category: ", this.category);
      console.log("this.typesChosen: ", this.typesChosen);
      console.log("this.subject: ", this.subject);
      console.log("this.description: ", this.description);
      console.log("files: ", this.files);
      console.log(
        "file name of first file: ",
        this.files[0] ? this.files[0].name : ""
      );
      console.log("formErrors: ", this.formErrors);
    },
    categoryChosen() {
      for (let i = 0; i < Object.keys(defaultCategories).length; i++) {
        const key = getKeyByValue(defaultCategories, this.category)[0];
        if (this.category === defaultCategories[key]) {
          return defaultTypes[key];
        }
      }
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    onFileChange(event) {
      console.log("onFileChange() event.target.files: ", event.target.files);
      this.files.push(event.target.files[0]);
    },
    onFileDelete(fileName) {
      console.log("file delete event for file: ", fileName);
      console.log("file array was: ", this.files);
      this.files = this.files.filter((element) => element.name != fileName);
      console.log("file array is now: ", this.files);
    },
    validateForm() {
      let returnValue = true;
      this.formErrors = [];
      if (!this.subject) {
        this.formErrors[
          getKeyByValue(ticketFormErrors, ticketFormErrors.subject)[0]
        ] = ticketFormErrors.subject;
        returnValue = false;
      }
      if (!this.description) {
        this.formErrors[
          getKeyByValue(ticketFormErrors, ticketFormErrors.description)[0]
        ] = ticketFormErrors.description;
        returnValue = false;
      }

      let rawTypesChosen = [];
      rawTypesChosen = toRaw(this.typesChosen);
      if (!rawTypesChosen || (rawTypesChosen && rawTypesChosen.length === 0)) {
        this.formErrors[
          getKeyByValue(ticketFormErrors, ticketFormErrors.type)[0]
        ] = ticketFormErrors.type;
        returnValue = false;
      }
      return returnValue;
    },
    cancelForm() {
      this.category = defaultCategories.hardware;
      this.description = null;
      this.files = [];
      this.formErrors = {};
      this.formSubmitted = false;
      this.typesChosen = defaultTypes[defaultCategories.hardware];
      this.subject = null;
      this.formData = null;
    },
    buildFormData() {
      this.formData = {
        category: [toRaw(this.category)],
        type: toRaw(this.typesChosen),
        subject: this.subject,
        description: this.description,
        files: toRaw(this.files)
      };
    },
    submitForm() {
      this.validateForm()
        ? (this.formSubmitted = true)
        : (this.formSubmitted = false);
      if (this.formSubmitted) {
        console.log("form was submitted");
        this.buildFormData();
        console.log("formData: ", this.formData);
        this.$emit("childFormSubmitted", this.formSubmitted);
        this.$emit("childFormData", this.formData);
      } else {
        console.log("form was NOT submitted");
      }
    }
  },
  watch: {
    category: function (value, previousValue) {
      if (value !== previousValue) {
        this.typesChosen = defaultTypes[this.categoryChosen()];
      }
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style></style>
