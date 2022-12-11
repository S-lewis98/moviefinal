<template>
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
</template>


<script>


  export default {
    name: "TableComp",
    props:['movieselectedAray'],
    data() {
        return{
       
        
    }},
    methods: {
        remove(DUMB){
            DUMB.childTicketAmount= 0;
            DUMB.adultTicketAmount=0;
        },
        subtotal(haha){ 
        (haha.adultTicketAmount * 13.00) + (haha.childTicketAmount * 10.00)}
    }
  };
  </script>
  