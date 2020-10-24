<template>
  <article class="panel is-primary">
    <header class="panel-heading">Products</header>
    <section class="products-body">
      <div class="panel-block">
        <div class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <product
        v-for="product in products"
        :key="product._id"
        :_id="product._id"
        :title="product.title"
        :description="product.description"
        :amount="product.amount"
        :unit="product.unit"
      ></product>
      <div class="panel-block">
        <add-new-product>
          <template v-slot:button="slotProps">
            <button
              class="button is-link is-outlined is-fullwidth"
              @click="slotProps.click"
            >
              Add new
            </button>
          </template>
        </add-new-product>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '@/components/Product.vue';
import AddNewProduct from '@/components/AddNewProduct.vue';

export default defineComponent({
  name: 'Products',
  components: {
    Product,
    AddNewProduct,
  },
  data() {
    return {
      products: [{
        _id: 'eeef113f-056a-403c-993a-a43a8375e278',
        title: 'Juice - Orangina',
        description: 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
        amount: 70,
        unit: 'ame',
      }, {
        _id: '10dd0022-1a3c-49cf-9f60-c62568d75394',
        title: 'Soup Bowl Clear 8oz92008',
        description: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
        amount: 96,
        unit: 'at',
      }, {
        _id: 'c882f9af-d33f-4dbf-9662-6d7fc9dd46a1',
        title: 'Bread - French Stick',
        description: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
        amount: 73,
        unit: 'justo',
      }, {
        _id: '0266513c-96c9-4e93-8ea8-331fd7ead27e',
        title: 'Oil - Peanut',
        description: 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        amount: 85,
        unit: 'mus',
      }, {
        _id: 'ff813e3f-534b-4b22-8b9e-5c37af95c9a9',
        title: 'Wine - Chateauneuf Du Pape',
        description: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
        amount: 36,
        unit: 'mi',
      }, {
        _id: '0dc4401c-8ef9-4741-b682-2bd4c01aa87e',
        title: 'Beef - Texas Style Burger',
        description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        amount: 83,
        unit: 'iaculis',
      }, {
        _id: 'd34b9e73-d3ab-4b9c-b4ac-e699c89ec087',
        title: 'Spinach - Spinach Leaf',
        description: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
        amount: 24,
        unit: 'in',
      }, {
        _id: 'b77c54c6-2a3b-47a5-bde2-c61feaa18cdd',
        title: 'Pork - Kidney',
        description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        amount: 76,
        unit: 'pede',
      }, {
        _id: 'd025c1cd-92b7-41c0-8226-da843000c4d1',
        title: 'Bread - Roll, Italian',
        description: 'Aenean lectus.',
        amount: 54,
        unit: 'lectus',
      }, {
        _id: '146ae86e-2055-4236-a3a1-221869bbacf1',
        title: 'Cream - 10%',
        description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
        amount: 17,
        unit: 'nibh',
      }],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/theme/main";

.products-body {
  background-color: $white;
}
</style>
