<template>
  <div id="app">
    
    <NavBar></NavBar>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <CardComponent class="col"  v-for="show in tvshows" v-bind:key="show.id" :movie="show"></CardComponent>
    </div>
    <h1 id="total-price"></h1>
   
  </div>
</template>

<script>  
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from './components/CardComponent.vue';
import NavBar from './components/NavBar.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    NavBar,
    CardComponent
  },
  data(){
    return{
      tvshows:[]
    }
  },
  mounted(){
    axios
    .get("https://api.themoviedb.org/3/movie/now_playing?api_key=70ef7c62eee1244489c96681175a2a0f&language=en-US&page=1")
    .then((response) => {
      this.tvshows = response.data.results.slice(0,12);
    })
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

