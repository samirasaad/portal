<template>
  <div class="vertical-stepper">
    <div class="w-100 steps-wrapper">
      <!-- headers-->
      <div class="headers px-0  justify-content-md-center">
        <div
          :key="item.id"
          v-for="(item, index) in options.headers"
          class="d-flex align-items-end"
          :class="{
            'step-header': true,
            active: index <= currentPosition,
            end: index === options.headers.length,
          }"
        >
          <!-- time line-->
          <div
            class="d-flex flex-column justify-content-center align-items-center time-line-wrapper"
          >
            <div class="time-line-divider"></div>
            <div
              class="d-flex justify-content-center align-items-center "
              :class="{
                'time-line-active-circle': index === currentPosition,
                'time-line-dimmed-circle': index != currentPosition,
              }"
            >
              <span class="semibold-font">
                {{ index + 1 }}
              </span>
            </div>
            <div class="time-line-divider"></div>
            <div class="time-line-small-divider"></div>
          </div>
          <div class="step-header-content mx-4 w-100" @click="slideTo(index)">
            <div class="mb-2 mt-4 mt-md-0">
              <label class="question">{{ item.title }}</label>
            </div>
            <component :is="item.content"></component>
          </div>
        </div>
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
<style scoped lang="scss">
.vertical-stepper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .steps-wrapper {
    border-radius: 23px;
  }
  .headers {
    overflow-x: auto;
  }

  .time-line-active-circle,
  .time-line-dimmed-circle {
    height: 3.1rem;
    width: 3.1rem;
    border-radius: 50%;
  }

  .time-line-active-circle {
    background-color: #ffffff;
    border: 1px solid #ffc629;
    color: #ffc628;
    border-radius: 50px;
  }

  .time-line-dimmed-circle {
    color: #3a3a3a;
    border: 1px solid #ededed;
  }

  .time-line-divider {
    height: 34px;
    width: 1px;
    background-color: #ededed;
  }
  .time-line-small-divider {
    height: 12px;
    width: 1px;
    background-color: #ededed;
  }

  .header-icon {
    height: 1.3rem;
    width: 1.3rem;
  }
  .header-indicator {
  }
  .step-header.start > .header-indicator {
    align-self: flex-end;
  }

  .step-header-content {
    border-radius: 50%;
    align-items: center;
  }

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
    width: 87%;
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

  .step-content-wrapper {
    background-color: #ffffff;
    border-radius: 23px;
    overflow: hidden;
    width: 100%;
    background-color: #ffffff;
    min-height: 60vh;
    height: auto;
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
}
</style>
