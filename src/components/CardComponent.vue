<template>
    <div class="card" style="width: 18rem;">
        <img :src=imgPath class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{movie.name}}</h5>
            <p class="card-text">{{movie.overview}}</p>
            <button id="add-adult-ticket" v-on:click="addAdultTicket"> Add Adult Ticket</button>
            <button id="add-child-ticket" v-on:click="addChildTicket"> Add Child Ticket</button>
        </div>
    </div>
</template>

<script>
    export default({
        name: 'CardComponent',
        props:['movie'],
        data(){
            return {
                imgPath:  "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path ,
                adultAray: [],
                childAray: []

            }
        },


        methods: {
            //this is when you click on the adult ticket button and adds the ticket to an array
            addAdultTicket() {
            this.adultAray.push({
            name: 'adultTicket'})
            console.log(this.adultAray)},

            // this is the same thing but for when you click on the childs ticket
            addChildTicket(){
            this.childAray.push({
            name: 'childTicket'})
            console.log(this.childAray)}
            
        }
      
    })
</script>

