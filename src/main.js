import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');




// Define a class to represent a movie ticket
class MovieTicket {
    constructor(age, price) {
    this.age = age;
    this.price = price;
  }
}

// Define a class to represent a shopping cart for movie tickets
class MovieTicketCart {
  constructor() {
    this.tickets = [];
  }

  // Method to add a movie ticket to the cart
  addTicket(ticket) {
    this.tickets.push(ticket);
  }

  // Method to calculate the total price of all tickets in the cart
  getTotal() {
    return this.tickets.reduce((total, ticket) => total + ticket.price, 0);
  }
}

// Create a new shopping cart
const cart = new MovieTicketCart();

// Add an event listener to the "Add Adult Ticket" button
document.getElementById("add-adult-ticket").addEventListener("click", function() {
  // Create a new adult movie ticket and add it to the cart
  cart.addTicket(new MovieTicket("adult", 15.99));

  // Update the total price on the page
  document.getElementById("total-price").innerHTML = cart.getTotal();
});

// Add an event listener to the "Add Child Ticket" button
document.getElementById("add-child-ticket").addEventListener("click", function() {
  // Create a new child movie ticket and add it to the cart
  cart.addTicket(new MovieTicket("child", 10.99));

  // Update the total price on the page
  document.getElementById("total-price").innerHTML = cart.getTotal();
});


