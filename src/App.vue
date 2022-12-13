
<template>
  <div id="app">
    
    <NavBar></NavBar>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <CardComponent class="col"  v-for="show in tvshows" v-bind:key="show.id" :movie="show" @push-to-movies="pushToMovies" ></CardComponent>
    </div>
    
    <table class="table table-striped"  v-show = "movieselectedAray.length >0">
      <h1 >Shopping Cart</h1>
  <tr>
    <th scope="col">Movie Name</th>
    <th scope="col">Child Tickets</th>
    <th scope="col">Adult Tickets</th>
    <th scope="col">Subtotal</th>
    <th scope="col">Remove Button</th>
  </tr>
  <!--Made it to where it will cycle through all the objects int the array that we got from our card components and in each row its simply calling the name and amount of tickets that was in that object. I used index here to show which object we were looking at and it helps later on with calling specific item in our negative buttons. -->
  <tr scope="row"  v-for="(TOTALPACKAGE, index) in movieselectedAray" v-bind:key="TOTALPACKAGE.Name" >
    <td>{{TOTALPACKAGE.Name}}</td>
    <td>{{TOTALPACKAGE.childTicketAmount}} X $10 <button @click="subtractchild(index)">-</button></td>
    <td>{{TOTALPACKAGE.adultTicketAmount}} X $13<button @click="subtractadult(index)">-</button></td>
    <td>${{subtotal(TOTALPACKAGE)}}</td>
    <td><button v-on:click="remove(TOTALPACKAGE)">Remove</button></td>
  </tr>
  <tr>
    <!--simple function call but passing the entire array to it so it calculates all objects in it-->
    <td>Total: ${{ total(movieselectedAray) }}</td>
  </tr>
</table>
 <span id="total-price"></span>
  </div>
</template>

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
      movieselectedAray: [],
      //sumArray: []
    }
  },
  mounted() {
  axios
  .get("https://api.themoviedb.org/3/movie/now_playing?api_key=0da26c065354dc35d436eebfbd585205&language=en-US&page=1")
  .then((response) => {
    //the slice is showing us how many results we are getting out of our axios call
    this.tvshows = response.data.results.slice(0,12);
  })
  
 
},
  methods: {
    //this one was fairly easy to where it just deletes the object out of that array gets called in the - button too 
    remove(TOTALPACKAGE) {
      const index = this.movieselectedAray.indexOf(TOTALPACKAGE)
    this.movieselectedAray.splice(index, 1)
  },
  // both of these subtract buttons are bassically the same for me. What i did was if it was 1 or higher you can press and it will take the amount that was storen under that ticket ammount in the totalpackage obj and subract one from it, and if both adult and child tickets = 0 it calls the remove function to take away the object listing. 
  subtractchild(indie){
    if (this.movieselectedAray[indie].childTicketAmount>=1){this.movieselectedAray[indie].childTicketAmount -= 1}
    if (this.movieselectedAray[indie].childTicketAmount ==0 && this.movieselectedAray[indie].adultTicketAmount ==0) { this.remove(this.movieselectedAray[indie])
    }
  },
  subtractadult(indie){
    if (this.movieselectedAray[indie].adultTicketAmount>=1){this.movieselectedAray[indie].adultTicketAmount -= 1}
    if (this.movieselectedAray[indie].childTicketAmount ==0 && this.movieselectedAray[indie].adultTicketAmount ==0) { this.remove(this.movieselectedAray[indie])
    }
  },
  //just returning the subtotals easy math 
    subtotal(haha) { 
    return (haha.adultTicketAmount * 13.00) + (haha.childTicketAmount * 10.00);
    //this.sumArray.push ((haha.adultTicketAmount * 13.00) + (haha.childTicketAmount * 10.00))
    
}
,// simply get the array and loops through all the objects adding them into child and adult sums, them multiplies them base off of our constants. 
  total(movies) 
  {
    var Asum = 0;
    var Csum = 0;
    for ( let i=0; i<movies.length; i++) 
    { //had to put it as number or it was add the numbers at the end like 1+1 would =11 not 2
      Asum += Number(movies[i].adultTicketAmount)
      Csum += Number(movies[i].childTicketAmount)
    }
    var sum= (Asum * 13.00) + (Csum * 10.00);
    return sum;
  },

    // this is how we are getting the array to the main. 
    pushToMovies(itemtopush)
    {
      this.movieselectedAray.push(itemtopush)
    }
    
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

