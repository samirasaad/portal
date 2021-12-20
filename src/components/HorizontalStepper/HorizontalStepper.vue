<template>
  <div>
    <div class="w-100 steps-wrapper horizontal-stepper">
      <!-- headers-->
      <div class="headers px-0  justify-content-md-center">
        <div
          :key="item.id"
          v-for="(item, index) in options.headers"
          :class="{
            'step-header': true,
            active: index <= currentPosition,
            end: index === options.headers.length,
          }"
        >
          <div class="header-indicator">
            <div class="step-header-line" v-if="index > 0"></div>
            <div class="step-header-content" @click="slideTo(index)">
              <img
                :src="require(`./../../assets/images/${item.icon}`)"
                alt=""
                class="header-icon"
              />
            </div>
          </div>
          <!-- step title-->
          <div
            class="title my-2 py-2 semibold-font justify-content-center"
            :class="{ title: true }"
          >
            {{ item.title }}
          </div>
          <!-- time line-->
          <div class="d-flex align-items-center time-line-wrapper">
            <div class="time-line-divider"></div>
            <div
              :class="{
                'time-line-active-circle': index === currentPosition,
                'time-line-dimmed-circle': index != currentPosition,
              }"
            ></div>
            <div class="time-line-divider"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- step content-->
    <div style="width:100%" class="step-content-wrapper mt-4 pb-4">
      <transition-group :name="transitionType" class="step-body " mode="out-in">
        <div
          v-for="(item, index) in options.headers"
          :key="'step' + index"
          :id="'step' + index"
          v-show="currentPosition === index"
          :class="{ 'steps-item ': true }"
        >
          <slot :name="'step-' + (index + 1)"></slot>
        </div>
      </transition-group>
      <!-- stepper actions-->
      <div
        class="foot mt-5 my-4 flex-md-row "
        :class="{
          'justify-content-end': currentPosition == 0,
          'justify-content-between': currentPosition != 0,
        }"
      >
        <button
          v-if="currentPosition > 0"
          class="prev-button semibold-font "
          type="button"
          @click="prev()"
        >
          {{ options.prevText ? options.prevText : "Prev" }}
        </button>
        <button
          v-if="currentPosition < options.headers.length - 1"
          class="next-button semibold-font"
          type="button"
          @click="next()"
        >
          {{ options.nextText ? options.nextText : "Next" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      console.log(this.currentPosition);

      this.currentPosition = index;
    },
  },
};
</script>
<style lang="scss" src="./HorizontalStepper.scss" scoped></style>
