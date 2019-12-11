<template>
 <div class="blog">
<b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">Bike Details </b-navbar-brand>
  </b-navbar>
<b-container class="bv-example-row my-3">
  <div class="card p-3">
  <b-row  v-for="(item, idx) in results" :key="idx">
    <b-col  xs="12" md="6" lg="6">
         <b-img src="item.currentBike['bikeImgUrl']" img-alt="" img-left class="mb-3"/>

    </b-col>
    <b-col  xs="12" md="6" lg="6">
      <hr>
  
   <b-card-text>
    <div class="d-flex justify-content-between align-items-center">
      <h5>{{item.currentBike["bikeName"]}}</h5>
        <p>{{item.currentBike["bikeCategory"]}}</p>
      </div>
       <div class="d-flex justify-content-between align-items-center">
          <p class="text-secondary" style="font-size:10px">Bike Brand<br><span style="font-size:14px"  class="text-dark ">{{item.currentBike.branches[0].bikeBranch}}</span></p><p class="text-secondary" style="font-size:10px">Current Location<br><span  style="font-size:14px"  class="text-dark ">{{item.currentBike["bikeCity"]}} </span></p>
       </div>
  <div class="d-flex justify-content-between align-items-center">
   <p>&#8377; {{item.currentBike.branches[0].localTrip}} /Day</p>
    <b-badge variant="success" pill>One Day</b-badge>
  </div>
        
          
         
    <b-alert show variant="success"> <p class="mb-0">
     Speed Limit 60Km/Hr| Km limit 100 Km/Day | Excess &#8377;4/km</p>
  </b-alert>
   <b-button variant="primary">Add To Cart</b-button> <b-button variant="outline-primary">Book Now
        </b-button>
    </b-card-text>
    
 
    </b-col>
  
  </b-row> </div>
</b-container>
</div>     
</template>
<script>
  import axios from 'axios';

 export default{
  name:'blog',
  data (){
   
   return{
    title:'Blog',
     results: [],
   
   }
  },
    mounted() {
    axios.get("http://139.59.46.107:8089/api/bikes/detail?sortBy=bikeName&pageNumber=0&size=20&direction=ASC&fromDate=2019-08-10 04:21:20.201&latitude=40.6655101&toDate=2019-08-10 04:21:20.201&longitude=-73.89188969999998&id=5d4ec5694ab174f8aa1a9a5c&bikeName=Activa&bikeCategory=test")
    .then(response => {
      this.results = response.data
     
    })
 }
}
</script>
