<template>
    <div id="movieobj" class="card" style="width: 18rem;">
        <img :src=imgPath class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{movie.overview}}</p>
            <input type="number" class="form-control" :id="`adult${movie.title}`"  placeholder="0"> Number of Adult's Ticket
            <input type="number" class="form-control" :id="`child${movie.title}`" placeholder="0"> Number of Children's Ticket
            <button id="purchase-Tickets" v-on:click="addTickets(movie.title)"> Purchase tickets</button>
        </div>
    </div>
</template>

<script>
    export default({
        name: 'CardComponent',
        props:['movie',],
        data()
        {

            return {
                //getting the image for the movie in the cards spot
                imgPath:  "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path ,
                
                 
            }
        },


        methods: {
            //this is when you click on the adult ticket button and adds this var object with a few helpful items
            //sending in the name of the movie to the object
            addTickets(moviename) {
            var TOTALPACKAGE = {
            //making the name element of the object set to the movies name
            Name: moviename,
            //making the ticket amounts equal to what I have the inputs
            adultTicketAmount: document.getElementById('adult'+moviename).value,
            childTicketAmount: document.getElementById('child'+moviename).value
            }
            //this is how i saw you can send these event listners to the main
            this.$emit('push-to-movies', TOTALPACKAGE)
            let element= document.getElementById("total-price")
            window.scroll(0, element.offsetTop)
            }
           
           

        }
      
    })
</script>

