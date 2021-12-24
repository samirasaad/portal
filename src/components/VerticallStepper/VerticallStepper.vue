<template>
  <div class="vertical-stepper">
    <div class="steps-wrapper">
      <div class="headers px-0 justify-content-md-center">
        <div class="d-flex align-items-end step-header pb-4"></div>
        <!-- 1st question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 0 <= currentPosition,
            end: 0 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 0,
                'time-line-dimmed-circle': currentPosition !== 0,
              }"
            >
              <span class="semibold-font">
                {{ 1 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(0)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[0].title }}</label>
              </div>
              <input-field></input-field>
            </div>
          </div>
        </div>
        <!-- 2nd question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 1 <= currentPosition,
            end: 1 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 1,
                'time-line-dimmed-circle': currentPosition !== 1,
              }"
            >
              <span class="semibold-font">
                {{ 2 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(1)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[1].title }}</label>
              </div>
              <div
                class="skills-view-wrapper d-flex flex-wrap py-2"
                @click="showModal"
              >
                <p class="skill px-2 mx-2 py-2 mb-md-0 mb-2">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 mx-2 py-2 mb-md-0 mb-2">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 mx-2 py-2 mb-md-0 mb-2">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 mx-2 py-2 mb-md-0 mb-2">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 3rd question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 2 <= currentPosition,
            end: 2 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 2,
                'time-line-dimmed-circle': currentPosition !== 2,
              }"
            >
              <span class="semibold-font">
                {{ 3 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(2)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[2].title }}</label>
              </div>
              <input-field></input-field>
            </div>
          </div>
        </div>
        <!-- 4th question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 3 <= currentPosition,
            end: 3 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 3,
                'time-line-dimmed-circle': currentPosition !== 3,
              }"
            >
              <span class="semibold-font">
                {{ 4 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(3)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[3].title }}</label>
              </div>
              <input-field></input-field>
            </div>
          </div>
        </div>
        <!-- 5th question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 4 <= currentPosition,
            end: 4 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 4,
                'time-line-dimmed-circle': currentPosition !== 4,
              }"
            >
              <span class="semibold-font">
                {{ 5 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(4)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[4].title }}</label>
              </div>
              <div class="expected-salary position-relative">
                <div class="position-absolute">
                  <img
                    src="./../../assets/images/dollar.png"
                    class="mx-3 ml-md-4 ml-0 mt-2"
                  />
                </div>
                <input class="w-100" />
              </div>
            </div>
          </div>
        </div>
        <!-- 6th question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 5 <= currentPosition,
            end: 5 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 5,
                'time-line-dimmed-circle': currentPosition !== 5,
              }"
            >
              <span class="semibold-font">
                {{ 6 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(5)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[5].title }}</label>
              </div>
              <div class="d-flex available-for-part-time">
                <div
                  class="
                    availability-option
                    selected-availbility-option
                    p-3
                    text-center
                  "
                >
                  Yes
                </div>
                <div class="availability-option p-3 ml-4 text-center">No</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 7th question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 6 <= currentPosition,
            end: 6 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 6,
                'time-line-dimmed-circle': currentPosition !== 6,
              }"
            >
              <span class="semibold-font">
                {{ 7 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(6)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[6].title }}</label>
              </div>
              <div class="row">
                <div class="col-md-6 mb-md-0 mb-3">
                  <input-field></input-field>
                </div>
                <div class="col-md-6">
                  <input-field></input-field>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 8th question -->
        <div
          class="d-flex align-items-end pb-4"
          :class="{
            'step-header': true,
            active: 7 <= currentPosition,
            end: 7 === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              time-line-wrapper
            "
          >
            <div
              class="d-flex justify-content-center align-items-center"
              :class="{
                'time-line-active-circle': currentPosition === 7,
                'time-line-dimmed-circle': currentPosition !== 7,
              }"
            >
              <span class="semibold-font">
                {{ 8 }}
              </span>
            </div>
          </div>
          <div class="step-header-content" @click="slideTo(7)">
            <div class="step-header-wrapper">
              <div class="mb-2 mt-md-4 mt-0 mt-md-0 px-3 px-md-0">
                <label class="question">{{ options.headers[7].title }}</label>
              </div>
              <div class="row">
                <div class="col-md-6 mb-md-0 mb-3">
                  <input-field></input-field>
                </div>
                <div class="col-md-6">
                  <input-field></input-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- select skills modal -->
    <section class="select-skills">
      <modal id="select-skills" v-cloak>
        <template slot="title">
          <h4 class="heading mb-0 semiBold-font">Select project types</h4>
        </template>

        <div slot="body">
          <div class="mt-2 mx-0 row skills-wrapper py-4">
            <div class="col-lg-6 skills-tobe-selected">
              <div class="skills-search position-relative">
                <input class="w-100" placeholder="Search" />
                <img
                  src="./../../assets/images/ic_search.png"
                  class="position-absolute"
                />
              </div>
              <div class="skills-list mb-2 mt-3">
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>

                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>

                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>

                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>

                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
                <div class="d-flex align-items-baseline mb-2">
                  <label class="">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <p class="mb-0 skill-title mx-2">Accounting</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-2 skills-selected ">
              <div class="d-flex flex-wrap  align-items-baseline py-2">
                <p class="skill px-2 ml-2 mr-1 py-2  mb-2 mt-1">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>

                <p class="skill px-2 ml-2 mr-1 py-2 mb-2 mt-1">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 ml-2 mr-1 py-2  mb-2 mt-1">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 ml-2 mr-1 py-2  mb-2 mt-1">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
                <p class="skill px-2 ml-2 mr-1 py-2  mb-2 mt-1">
                  UI Design
                  <img
                    src="./../../assets/images/remove-skill.png"
                    class="remove-skill"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <button class="modal-cancel-btn  " @click="onClose">Cancel</button>
            <button class="modal-save-btn ">Save</button>
          </div>
        </div>
      </modal>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import InputField from "../InputField.vue";
// modal
import { Modal, VoerroModal } from "@voerro/vue-modal";
Vue.component("modal", Modal);
window.VoerroModal = VoerroModal;

export default {
  components: { InputField },
  name: "Stepper",
  props: ["options"],
  data() {
    return {
      currentPosition: 0,
      transitionType: "slide",
    };
  },
  methods: {
    next() {
      if (this.currentPosition < this.options.headers.length - 1) {
        this.transitionType = "stepper-slide-1";
        this.currentPosition++;
      }
    },
    prev() {
      if (this.currentPosition > 0) {
        this.transitionType = "stepper-slide-2";
        this.currentPosition--;
      }
    },
    slideTo(index) {
      if (this.currentPosition === index) return;
      if (this.currentPosition > index) {
        this.transitionType = "stepper-slide-2";
      } else {
        this.transitionType = "stepper-slide-1";
      }
      this.currentPosition = index;
    },
    showModal() {
      VoerroModal.show("select-skills");
    },
    onClose() {
      VoerroModal.hide("select-skills");
    },
  },
};
</script>
<style scoped lang="scss" src="./VerticallStepper.scss"></style>
