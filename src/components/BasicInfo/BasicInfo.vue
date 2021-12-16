<template>
  <section class="">
    <VerticallStepper :options="stepperOptions"> </VerticallStepper>
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
          {
            title: "What is your Current Role?",
            content: TestComponent,
          },
          { title: "What are Your skills ?", content: TestComponent },
          {
            title: "How many years of experience do you have answer?",
            content: TestComponent,
          },
          {
            title: "What project types did you work on?",
            content: TestComponent,
          },
          { title: "What is your Expected Salary?", content: TestComponent },
          {
            title: "Are you available for Part-time job?",
            content: TestComponent,
          },
          { title: "What is your First Language?", content: TestComponent },
          { title: "What is your Second Language?", content: TestComponent },
        ],
        prevText: "Back",
        nextText: "Next",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped src="./BasicInfo.scss"></style>
