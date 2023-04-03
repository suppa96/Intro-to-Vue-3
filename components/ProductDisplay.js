app.component("product-display", {
  //Possiamo creare delle property che il componente riceverà dall'app
  props: {
    // possiamo anche definire dei property validators
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    // devo per forza aggiungere questa roba sotto per far sì che es6 lo legga
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }"
            ></div>

            <product-details :details ="details"></product-details>
            
            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              v-on:click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>`,
  // qua sotto inserisco tutti i data, method e computed properties di main.js.
  // Lì lascio solo le informazioni globali che afferiscono a tutti i componenti
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "1.99$";
    },
  },
});
// usando il metodo component su app, creo un componente con un nome
// e che prende il template come stringa

// ES6 permette di vedere la sintassi HTML anche se è una stringa
