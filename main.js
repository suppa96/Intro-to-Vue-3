const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      //image: "./assets/images/socks_blue.jpg", --> togglo image e inStock perché verranno computate
      selectedVariant: 0,
      // inStock: false,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 0,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 50,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    // updateImage(variantImage) {
    //   this.image = variantImage;
    // },
    updateVariant(index) {
      this.selectedVariant = index;
      //   console.log(index);
      //   console.log(this.inStock);
    },
  },
  // le computed properties calcolano dei valori al posto nostro, senza bisogno che vengano chiamati
  // il valore viene calcolato a prescindere e storato nella cache (ergo viene ricalcolato solo quando serve)
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      // anziché essere cambiata con un metodo, il valore di image cambia a seconda del
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
      // Anche se inStock non è un valore booleano, JS lo legge come tale, poiché qualsiasi valore diverso da 0 è diverso da false, quindi è come se fosse vero
    },
    saleInfo() {
      return this.brand + " " + this.product + " is on sale!";
    },
  },
});
