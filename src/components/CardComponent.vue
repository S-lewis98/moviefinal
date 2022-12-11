<template>
    <div id="movieobj" class="card" style="width: 18rem;">
        <img :src=imgPath class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{movie.name}}</h5>
            <p class="card-text">{{movie.overview}}</p>
            <input type="number" class="form-control" :id="`adult${movie.name}`"  placeholder="0"> Number of Adult's Ticket
            <input type="number" class="form-control" :id="`child${movie.name}`" placeholder="0"> Number of Children's Ticket
            <button id="purchase-Tickets" v-on:click="addTickets(movie.name)"> Purchase tickets</button>
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
                imgPath:  "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path ,
                
                 
            }
        },


        methods: {
            //this is when you click on the adult ticket button and adds the ticket to an array
            addTickets(moviename) {
            var TOTALPACKAGE = {
            Name: moviename,
            adultTicketAmount: document.getElementById('adult'+moviename).value,
            childTicketAmount: document.getElementById('child'+moviename).value
            }
            this.$emit('push-to-movies', TOTALPACKAGE)
            let element= document.getElementById("total-price")
            window.scroll(0, element.offsetTop)
            }
           
            // I dont know how this is supposed to send the whole object in and with with ticket amount

        }
      
    })
</script>

