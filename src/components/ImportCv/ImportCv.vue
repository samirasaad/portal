<template>
  <section class="import-cv-wrapper">
    <h4 class="heading semiBold-font font-weight-bold">
      Upload your resume to import your cv
    </h4>
    <p class="hint">
      Quickly build your profile by uploading your C.V or Importing data from
      your LinkedIn profile.
    </p>
    <!-- import cv -->

    <div
      class="position-relative d-flex align-items-center justify-content-between py-3 px-4 upload-wrapper"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="./../../assets/images/uploading.png" />
        </div>
        <div class="d-flex px-3 " v-for="file in filelist" :key="file">
          <div>
            <p class="mb-0 file-name">
              {{ file.name }}
            </p>
            <p class="file-size mt-1 mb-0">5MG in total</p>
          </div>
          <div>
            <img
              src="./../../assets/images/Remove.png"
              class="ml-2 px-2 remove-file"
              type="button"
              @click="remove(filelist.indexOf(file))"
            />
          </div>
        </div>
        <input
          type="file"
          multiple
          name="fields[assetsFieldHandle][]"
          id="assetsFieldHandle"
          class=" import-cv-input"
          @change="onChange"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </div>
      <img
        src="./../../assets/images/success.png"
        v-for="file in filelist"
        :key="file"
      />
    </div>
    <!-- ///////////////// -->
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      filelist: [], // Store our uploaded files
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
  },
};
</script>
<style lang="scss" src="./ImportCv.scss" scoped></style>
