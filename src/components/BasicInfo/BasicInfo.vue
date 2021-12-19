<template>
  <section class="">
    <VerticallStepper :options="stepperOptions"> </VerticallStepper>
  </section>
</template>

<script>
import VerticallStepper from "../VerticallStepper/VerticallStepper.vue";

export default {
  components: { VerticallStepper },
  data() {
    return {
      stepperOptions: {
        headers: [
          {
            title: "What is your Current Role?",
          },
          {
            title: "What are Your skills ?",
          },
          {
            title: "How many years of experience do you have answer?",
          },
          {
            title: "What project types did you work on?",
          },
          { title: "What is your Expected Salary?" },
          {
            title: "Are you available for Part-time job?",
          },
          { title: "What is your First Language?" },
          { title: "What is your Second Language?" },
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
