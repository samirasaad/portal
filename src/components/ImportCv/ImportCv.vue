<template>
  <section class="import-cv-wrapper py-5">
    <h4 class="heading semiBold-font font-weight-bold mt-2">
      Upload your resume to import your cv
    </h4>
    <p class="hint pb-5">
      Quickly build your profile by uploading your C.V or Importing data from
      your LinkedIn profile.
    </p>
    <!-- import cv -->
    <div
      class="position-relative d-flex align-items-center justify-content-between py-3  upload-wrapper"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        name="fields[assetsFieldHandle][]"
        id="import-cv"
        class=" import-cv-input h-100 w-100"
        @change="onChange"
        ref="file"
        accept=".pdf"
        title=" "
      />
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="./../../assets/images/uploading.png" class="px-4 " />
        </div>
        <div v-if="!filelist || !filelist.length">
          <p class="mb-0 file-name">Upload your C.V</p>
          <p class="file-size mt-1 mb-0">Drag and drop files here</p>
        </div>
        <div class="d-flex" v-for="file in filelist" :key="file">
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
      </div>
      <img
        src="./../../assets/images/success.png"
        v-for="file in filelist"
        :key="file"
        class="mr-4  ml-3"
      />
    </div>

    <!-- import from linkedin -->
    <div
      class="position-relative d-flex align-items-center justify-content-between py-3  mt-4 import-wrapper"
    >
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img
            src="./../../assets/images/linkedin.png"
            class="linkedin-icon px-4"
          />
          <p class="mb-0">Import from LinkedIn</p>
        </div>
      </div>
      <img src="./../../assets/images/success.png" class="mr-4  ml-3" />
    </div>
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
      if (this.$refs.file.files.length) {
        this.filelist = [...this.$refs.file.files];
      }
    },
    remove(i) {
      this.filelist.splice(i, 1);
      console.log(this.filelist);
      console.log(document.getElementById("import-cv"));
      document.getElementById("import-cv").attr("title", " ");
    },
    dragover(event) {
      event.preventDefault();
      if (!event.currentTarget.classList.contains("bg-gray-darker")) {
        event.currentTarget.classList.remove("bg-gray-original");
        event.currentTarget.classList.add("bg-gray-darker");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-original");
      event.currentTarget.classList.remove("bg-gray-darker");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-original");
      event.currentTarget.classList.remove("bg-gray-darker");
    },
  },
};
</script>
<style lang="scss" src="./ImportCv.scss" scoped></style>
