app.component("product-details", {
  props: {
    details: {
      required: true,
      type: Array,
    },
  },
  template:
    /*html*/
    `
  <div>
    <ul>
        <li v-for="detail in details" ></li>
    </ul>
  </div>
  `,
});
