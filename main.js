const app = Vue.createApp({
  data() {
    return {
      cart: [],
      // provo a cambiare il cart da un numero ad un array
      premium: true,
    };
  },
  methods: {
    //cambio il metodo per far sì che aggiunga id ad un array anziché
    // aumentare un semplice contatore
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
