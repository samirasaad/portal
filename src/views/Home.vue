<template>
  <div>
    <input type="password" v-model="password" id="password" />
    <img
      src="https://via.placeholder.com/120
    "
      @click="togglePassword('password', $event)"
    />

    <input type="password" v-model="retypePassword" id="retype-password" />
    <img
      src="https://via.placeholder.com/120
    "
      @click="togglePassword('retype-password', $event)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    togglePassword(inputID, e) {
      console.log(inputID);
      console.log(e.target);
      let inputElem = document.querySelector(`#${inputID}`);
      if (inputElem.getAttribute("type") === "password") {
        console.log(inputElem);
        inputElem.setAttribute("type", "text");
        e.target.setAttribute("src", "path to /show-pass-icon");
      } else {
        inputElem.setAttribute("type", "password");
        e.target.setAttribute("src", "path to/hide-pass-icon");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
