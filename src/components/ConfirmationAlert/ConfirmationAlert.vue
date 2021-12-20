<template>
  <section
    class="confiramation-alert py-2 d-flex justify-content-center align-items-center"
  >
    <div
      class="d-lg-flex d-block container justify-content-between align-items-baseline"
    >
      <p class="medium-font mb-0 text-center">
        Please check your email account “saraeldriny@gmail.com” i for the
        verification link just sent to you!
      </p>
      <div
        class="d-flex justify-content-lg-end justify-content-center my-lg-0 my-3"
      >
        <button class="dimmed-btn mx-2" @click="displayToaster">Resend</button>
        <button class="secondary-btn mx-2" @click="showModal">
          Edit Email
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import "dtoaster/dist/dtoaster.css";
import DToaster from "dtoaster";

Vue.use(DToaster, {
  name: "success",
  icon: "mdi mdi-checkbox-multiple-marked-circle-outline",
  icon_size: "32px",
  duration: "95000",
  height: "75px",
  color: "#FFFFFF",
  show_progress_timeout: "true",
  progress_background: "transparent",
  progress_thumb_bg: "transparent",
  containerOffset: "45px", //toasts container offset from top/bottom of the screen
});

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    displayToaster() {
      this.$dtoast.pop({
        heading: ``,
        content: `A new verification link just sent to your email account`,
      });
    },
    showModal() {
      this.$modal.show("edit-email");
    },
  },
};
</script>
<style src="./ConfirmationAlert.scss" lang="scss" scoped></style>
