<template>
  <button class="panel-block button is-fullwidth is-light product" @click="toggleDetail">
    <span class="product__title">
      {{title}}
    </span>
    <span class="tag is-info product__amount">{{amount}} {{unit}}</span>
  </button>
  <div class="modal" :class="{ 'is-active': showDetail }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h4 class="title is-4">{{title}}</h4>
            <p>{{description}}</p>
            <hr />
            <h6 class="subtitle is-6">
              {{amount}}
              <span class="is-size-7">{{unit}}</span>
            </h6>
            Added: <time class="is-italic">{{(new Date()).toDateString()}}</time>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="toggleDetail"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToggle } from '@/utils';

export default defineComponent({
  name: 'VProduct',
  props: {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { value: showDetail, toggle: toggleDetail } = useToggle(false);

    return {
      showDetail,
      toggleDetail,
    };
  },
});
</script>

<style lang="scss" scoped>
.product {
  justify-content: space-between;

  &__title {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__amount {
    margin-left: 0.75rem;
  }
}
</style>
