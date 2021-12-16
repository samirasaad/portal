<template>
  <section class="">
    <VerticallStepper :options="stepperOptions">
      <div slot="step-1">
        <input />
      </div>
    </VerticallStepper>
  </section>
</template>

<script>
import VerticallStepper from "./../VerticallStepper.vue";
import TestComponent from "./../TestComponent.vue";

export default {
  components: { VerticallStepper },
  data() {
    return {
      stepperOptions: {
        headers: [
          { title: "Basic info", content: TestComponent },
          { title: "Certificates", content: TestComponent },
          { title: "Accounts", content: TestComponent },
        ],
        prevText: "Back",
        nextText: "Next",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" src="./ImportCv.scss" scoped></style>
