<template>
  <section class="bg">
    <ConfirmationAlert></ConfirmationAlert>
    <nav class="container d-flex justify-content-between align-items-center">
      <img src="./../assets/images/logo.png" class="logo mx-4 mx-md-0" />
      <button class="sign-out-btn mx-md-2 mx-4 px-3">
        <img src="./../assets/images/sign-out.png" class="mr-2" />
        <span class="d-md-inline-block  d-none">Sign out</span>
      </button>
    </nav>
    <div class="parent pb-4">
      <HorizontalStepper
        :options="stepperOptions"
        class="container px-3 px-md-0"
      >
        <div slot="step-1">
          <component :is="stepperOptions.headers[0].content"></component>
        </div>

        <div slot="step-2">
          <component :is="stepperOptions.headers[1].content"></component>
        </div>

        <div slot="step-3">
          <component :is="stepperOptions.headers[2].content"></component>
        </div>

        <div slot="step-4">
          <component :is="stepperOptions.headers[3].content"></component>
        </div>

        <div slot="step-5">
          <component :is="stepperOptions.headers[4].content"></component>
        </div>

        <div slot="step-6">
          <component :is="stepperOptions.headers[5].content"></component>
        </div>
      </HorizontalStepper>
    </div>

    <!-- modal -->
    <modal name="edit-email">
      <div class="d-flex justify-content-between align-items-baseline">
        <h4 class="heading">Edit Email</h4>
        <img
          src="./../assets/images/close.png"
          @click="hideModal"
          class="close-icon"
        />
      </div>
      <p class="hint border-bottom pb-2">
        You will receive verification code on this email
      </p>

      <div class="mt-4">
        <label class="label">Email adrress </label>
        <input-field></input-field>
        <button class="action-button w-100 mt-3">Save</button>
      </div>
    </modal>
  </section>
</template>

<script>
import Vue from "vue";
import HorizontalStepper from "./../components/HorizontalStepper/HorizontalStepper.vue";
import BasicInfo from "./../components/BasicInfo/BasicInfo";
import ImportCv from "./../components/ImportCv/ImportCv.vue";
import ConfirmationAlert from "./../components/ConfirmationAlert/ConfirmationAlert.vue";
import VModal from "vue-js-modal";
import InputField from "./../components/InputField.vue";
Vue.use(VModal);

export default {
  components: {
    HorizontalStepper,
    BasicInfo,
    ImportCv,
    ConfirmationAlert,
    InputField,
  },
  data() {
    return {
      stepperOptions: {
        headers: [
          { title: "Basic info", icon: "basic-info.png", content: BasicInfo },
          { title: "Import C.V", icon: "import-cv.png", content: ImportCv },
          { title: "Experience", icon: "experience.png", content: BasicInfo },
          { title: "Education", icon: "basic-info.png", content: BasicInfo },
          { title: "Certificates", icon: "basic-info.png", content: BasicInfo },
          { title: "Accounts", icon: "basic-info.png", content: BasicInfo },
        ],
        prevText: "Back",
        nextText: "Next",
      },
    };
  },
  methods: {
    hideModal() {
      this.$modal.hide("edit-email");
    },
  },
};
</script>

/*************************************** section bg ***************************/
<style lang="scss" scoped>
.heading {
  color: #422e87;
  font-family: "PoppinsSemiBold";
}
.hint {
  color: #292929;
  font-size: 13px;
}

nav {
  padding: 1.9rem 0px;
  .sign-out-btn {
    color: white;
    border: 1px solid #aba2c9;
    border-radius: 10px;
    background-color: transparent;
    height: 3.4rem;
    img {
      height: 17px;
    }
  }
}
</style>
