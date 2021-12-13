<template>
  <section class="bg">
    <nav class="container py-4 d-flex justify-content-between">
      <img src="./../assets/images/logo.png" />
      <button class="sign-out-btn mx-2 px-3">
        <img src="./../assets/images/sign-out.png" class="mr-2" />
        <span>Sign out</span>
      </button>
    </nav>
    <stepper :options="stepperOptions" class="container">
      <div slot="step-1">
        <h3>Step 1</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque
      </div>

      <div slot="step-2">
        <h3>Step 2</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque
      </div>

      <div slot="step-3">
        <h3>Step 3</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque
      </div>

      <div slot="custom-step-name">
        <h3>Step 4</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque
      </div>
    </stepper>
  </section>
</template>

<script>
import Stepper from "./../components/Stepper.vue";
export default {
  components: { Stepper },
  data() {
    return {
      stepperOptions: {
        headers: [
          { title: "Basic info", icon: "basic-info.png" },
          { title: "Import C.V", icon: "import-cv.png" },
          { title: "Experience", icon: "experience.png" },
          { title: "Education", icon: "basic-info.png" },
          { title: "Certificates", icon: "basic-info.png" },
          { title: "Accounts", icon: "basic-info.png" },
        ],
        prevText: "Back",
        nextText: "Next",
      },
    };
  },
  methods: {},
};
</script>

/*************************************** section bg ***************************/
<style lang="scss" scoped>
.bg {
  background-image: url("./../assets/images/bg.png");
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
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
/* ************************************ media queries ****************************** */
@media (min-width: 1400px) {
  .container {
    max-width: 1120px;
  }
}
</style>
