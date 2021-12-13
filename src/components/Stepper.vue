<template>
  <div class="stepper">
    <div class="w-100 steps-wrapper">
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
                :src="require(`./../assets/images/${item.icon}`)"
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
    <div style="width:100%" class="step-content-wrapper my-4">
      <transition-group :name="transitionType" class="step-body " mode="out-in">
        <div
          v-for="(item, index) in options.headers"
          :key="'step' + index"
          v-show="currentPosition === index"
          :class="{ 'steps-item my-4': true }"
        >
          <slot :name="'step-' + (index + 1)"></slot>
        </div>
      </transition-group>
      <!-- stepper actions-->
      <div class="foot justify-content-between my-4">
        <button
          v-if="currentPosition > 0"
          class="prev-button semibold-font"
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
<style scoped>
.steps-wrapper {
  background-color: #ffffff;
  border-radius: 23px;
}
.headers {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px;
  width: 100%;
  justify-content: center;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}
.step-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.time-line-active-circle,
.time-line-dimmed-circle {
  height: 18px;
  width: 18px;
  border-radius: 18px;
}

.time-line-active-circle {
  border: 4px solid #fff6dd;
  background-color: #ffc735;
}

.time-line-dimmed-circle {
  border: 4px solid #e6e5e7;
}

.time-line-divider {
  border-top: 1px solid #f1f1f1;
  height: 3px;
  width: 5.773445rem;
}

.header-icon {
  height: 1.3rem;
  width: 1.3rem;
}
.header-indicator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.step-header.start > .header-indicator {
  align-self: flex-end;
}

.step-header-content {
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f1f1f1;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.step-header.active .step-header-content,
.step-header.active .step-header-line {
  background-color: #ffc628;
}
.title {
  display: inline-flex;
  text-transform: capitalize;
  position: relative;
}

.step-body {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
  min-height: 25rem;
}
.foot {
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.next-button {
  padding: 7px 15px;
  background-color: #ffc629;
  color: black;
  border: 0;
  outline: 0;
  border-radius: 12px;
  padding: 1.2rem 3.2em;
}
.prev-button {
  padding: 7px 15px;
  border: 1px solid #ffc629;
  background-color: transparent;
  color: #ffc629;
  outline: 0;
  border-radius: 12px;
  padding: 1.2rem 3.2em;
}

.stepper {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-content-wrapper {
  background-color: #ffffff;
  border-radius: 23px;
  overflow: hidden;
}

.steps-item {
  min-width: 100%;
  overflow: hidden;
}

.stepper-slide-1-enter-active {
  animation: slide-in 0.3s;
}
.stepper-slide-1-leave-active {
  animation: slide-out 0.3s;
}
@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.stepper-slide-2-enter-active {
  animation: slide2-in 0.3s;
}
.stepper-slide-2-leave-active {
  animation: slide2-out 0.3s;
}
@keyframes slide2-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide2-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@media screen and (max-width: 768px) {
  .time-line-divider {
    width: 3.8rem;
  }
  .step-header-line {
    display: inline-flex;
    height: 1px;
    background-color: #f1f1f1;
    width: 6.4rem;
  }
  .time-line-wrapper,
  .title {
    display: none !important;
  }

  .step-header-content {
    width: 2.5rem;
    height: 2.5rem;
  }
  .header-icon {
    height: 1rem;
  }
}

@media screen and (max-width: 520px) {
  .step-header-line {
    width: 4rem;
  }
}

@media screen and (max-width: 440px) {
  .step-header-line {
    width: 2.3rem;
  }
}

@media screen and (max-width: 1200px) {
  .time-line-divider {
    width: 4.8rem;
  }
}

@media screen and (max-width: 1024px) {
  .time-line-divider {
    width: 3.8rem;
  }
}
</style>
