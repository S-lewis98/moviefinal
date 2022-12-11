

<script>  
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from './components/CardComponent.vue';
import NavBar from './components/NavBar.vue'
//import TableComp from './components/TableComp.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    NavBar,
    CardComponent,
    //TableComp
  },
  data(){
    return{
      tvshows:[],
      movieselectedAray: []
    }
  },
  mounted(){
    axios
    .get("https://api.themoviedb.org/3/movie/now_playing?api_key=0da26c065354dc35d436eebfbd585205&language=en-US&page=1")
    .then((response) => {
      this.tvshows = response.data.results.slice(0,12);
    })
    this.$bus.$on('push-to-movies', function(TOTALPACKAGE){
         console.log(TOTALPACKAGE);
         this.movieselectedArray.push(TOTALPACKAGE)
}.bind(this))
  },
  events:
  {
   
  },
  methods: {
    remove(DUMB)
    {
      DUMB.childTicketAmount= 0;
      DUMB.adultTicketAmount=0;
    },
    subtotal(haha)
    { 
      (haha.adultTicketAmount * 13.00) + (haha.childTicketAmount * 10.00)}
    },
    total(allArrays) {
      let Asum = 0;
      let Csum = 0;
    for ( let i=0; i<allArrays.length; i++) 
    {
      Asum += allArrays[i].adultTicketAmount
      Csum += allArrays[i].childTicketAmount
    }
      var sum= (Asum* 13.00)+ (Csum*10);
      return sum;
    },
    pushToMovies(event, itemtopush)
    {
      this.movieselectedAray.push(itemtopush)
    }
    
  }
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>


<template>
  <div id="app">
    
    <NavBar></NavBar>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <CardComponent class="col"  v-for="show in tvshows" v-bind:key="show.id" :movie="show"  ></CardComponent>
    </div>
    <h1 id="total-price">Shopping Cart</h1>
    <table>
  <tr>
    <th>Movie Name</th>
    <th>Child Tickets</th>
    <th>Adult Tickets</th>
    <th>Subtotal</th>
    <th>Remove Button</th>
  </tr>
  <tr v-for="TOTALPACKAGE in movieselectedAray" v-bind:key="TOTALPACKAGE.name " >
    <td>{{TOTALPACKAGE.Name}}</td>
    <td>{{TOTALPACKAGE.childTicketAmount}}</td>
    <td>{{TOTALPACKAGE.adultTicketAmount}}</td>
    <td>{{subtotal(TOTALPACKAGE)}}</td>
    <td><button v-on:click="remove(TOTALPACKAGE)">Remove</button></td>
  </tr>
  <tr>
    <td>{{total}}</td>
  </tr>
</table>
  </div>
</template>