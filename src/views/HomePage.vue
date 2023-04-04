<template>
  <div>
    <headerPage/>
    <!--------------------------------------------------Container1- Homepage main image ----------------------------------------->
    <div class="container1">
      <div class="containertext">
        <h2> Revitalize Your Ride and get Instant Vehicle Cleaning with <span class="span1"> QuickClean </span></h2>
        <button class="booknow" @click="bookNow">Book Now</button>
      </div>
      <div class="homepageimg">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/car-washing-by-spraying-water-3323957-2809523.png" alt="">
      </div>
    </div>
    <!-------------------------------------------------------Container 2----------------------------------------->
    <div class="container2">
      <!-- div 1 -->
      <div class="div1">
        <div class="divimg">
          <img src="https://i.ibb.co/PwkV6Jw/carwash-removebg-preview-1.png"  alt="">
        </div>
        <div class="divtext">
          <h2>Instant Appointment</h2>
          <p>Say goodbye to the hassle of scheduling appointments over the phone and try our convenient instant appointment feature today! Our real-time availability calendar means you can see the next available appointment and book it on the spot.</p>
        </div>
      </div>
      <!-- div 2 -->
      <div class="div2">
        <div class="divtext">
          <h2>Instant Service</h2>
          <p>Our instant washing service is designed to provide a hassle-free cleaning experience in a matter of minutes. Book an appointment today and experience the convenience of our instant washing service.</p>
        </div>
        <div class="divimg">
          <!-- <img src="https://i.ibb.co/4s5smJN/2ndCard.png" alt=""> -->
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/car-washing-machine-3323956-2809528.png" alt="">

        </div>
      </div>
      <!-- div 3 -->  
      <div class="div3">
        <div class="divimg">
          <img src="https://i.ibb.co/GVqC9mD/3rdCard.png" id="divimg3" alt="">
        </div>
        <div class="divtext">
          <h2>Instant Clean</h2>
          <p>Trust us to leave your vehicle looking brand new in no time. Our trained professionals are committed to delivering top-notch services, including exterior and interior cleaning. So, with our trained professionals you can enjoy a spotless and shining vehicle in just minutes.</p>
        </div>
      </div>
    </div>

    <!------------------------------------------------Container3 - Subcription cards --------------------------------->
    <div id="subscriptions"><h1>Try Our Subscriptions</h1></div>
    <div class="container3">

      <div class="scard">
        <div class="divcardtext">
          <h1 class="cardtext">Basic</h1>
        </div> <br>
        <div class="cardtext2">
          <p class="permonth"><span class="subprice">₹500/-  </span> month</p>
          <div class="underline"></div>
          <div class="listsdiv">
            <ul class="lists">
              <!-- <h5><li>&#10003;</li></h5> -->
              <h5><li>&#10003; &nbsp; Weekly cleaning which &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comes with -</li></h5>
              <h5><li>&#10003; &nbsp; Dry clean</li></h5>
              <h5><li>&#10003; &nbsp; Water wash</li></h5>
            </ul>
          </div>
        </div> <br>
        <div class="cardbtndiv">
          <button class="cardbtn" @click="bookNow">Try Now</button>
        </div>
      </div>

      <div class="scard">
        <div class="divcardtext">
          <h1 class="cardtext">Standard</h1>
        </div> <br>
        <div class="cardtext2">
          <p class="permonth"><span class="subprice">₹800/-  </span> month</p>
          <div class="underline"></div>
          <div class="listsdiv">
            <ul class="lists">
              <!-- <h5><li>&#10003; Subscribe for one month</li></h5> -->
              <h5><li>&#10003; &nbsp; Alternate day cleaning</li></h5>
              <h5><li>&#10003; &nbsp; Dry Clean alternate days</li></h5>
              <h5><li>&#10003; &nbsp; Water wash once a week</li></h5>
            </ul>
          </div>
        </div> <br>
        <div class="cardbtndiv">
          <button class="cardbtn" @click="bookNow">Try Now</button>
        </div>
      </div>

      <div class="scard">
        <div class="divcardtext">
          <h1 class="cardtext">Premium</h1>
        </div> <br>
        <div class="cardtext2">
          <p class="permonth"><span class="subprice">₹1000/-  </span> month</p>
          <div class="underline"></div>
          <div class="listsdiv">
            <ul class="lists">
              <h5><li>&#10003; &nbsp; Daily dry cleaning</li></h5>
              <h5><li>&#10003; &nbsp; Water wash twice a week</li></h5>
              <h5><li>&#10003; &nbsp; Interior cleaning once in a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;week</li></h5>
            </ul>
          </div>
        </div> <br>
        <div class="cardbtndiv">
          <button class="cardbtn" @click="bookNow">Try Now</button>
        </div>
      </div>
    </div>

<!--------------------------------------------------------- Container 4 ------------------------------------------------>
    <div class="container4">
      <div class="part1">
        <h1>Save TIME</h1>
        <h1>Save MONEY</h1>
        <h1>Save EFFORTS!</h1>
      </div>
      <div class="part2">
        <img src="https://i.ibb.co/R92LDZy/CARWASH2-removebg-preview.png" alt="">
      </div>
    </div>

<footerPage/>  

    <Router-view></Router-view>
  </div>
</template>

<script>
// import { RouterLink } from 'vue-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import headerPage from '@/views/headerPage.vue'
import footerPage from '@/views/footerPage.vue';

export default {
  name: 'HomePage',
  components: {
    // RouterLink,
    headerPage,
    footerPage 
}, methods:{
  bookNow(){
    var user=firebase.auth().currentUser;
    if(user==null){
      this.$router.replace("/login")
    }
    else{
      this.$router.replace("/service")
    }
  },  
}
}
</script>
<style scoped>
/*------------------------------------------------container1 - css for homepage main image ---------------------------------- */
.container1{
  display: flex;
  height: 650px;
  background-color: #421E4A;
  color:#e7ebee;
}
.containertext{
  /* border: 2px solid black; */
  margin-top: 150px;
  margin-left: 100px;
  height: 350px;
  letter-spacing: 1px;
}
.homepageimg img{
  margin-left: 100px;
  height: 600px;
}
.booknow{
  margin-top: 30px;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  background-color: #d7dbde;
  border: 2px solid #d7dbde;
  color: #421E4A;
  font-weight: bolder;
}
.booknow:hover{
  border: 2px solid rgb(255, 148, 7);
  background-color: rgb(255, 148, 7);
  transform: scale(1.05);
}
.span1{
color: rgb(255, 148, 7) ;
font-size: 40px;
}




/* @media screen and (min-width: 768px) {
  .container1 {
    flex-direction: row;
    padding: 100px;
  }
  
  .containertext {
    flex: 1;
    margin: 0;
    margin-right: 50px;
    text-align: left;
  }
  
  .homepageimg img {
    flex: 1;
    height: 100%;
    max-width: none;
  }
} */

/* ----------------- */
/* ------------------------------------------css for container2-------------------------- */
.div1, .div2, .div3{
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 5rem;
  margin-top: 50px;
  text-align: justify;

}
#divimg3{
padding-right: 120px;
}
.divtext{
  /* border: 2px solid black; */
  padding-top: 50px;
  height: 200px;
  width: 530px;
}
@media only screen and (max-width: 768px) {
  .container2 {
    flex-direction: column;
  }
  .divtext {
    width: 100%;
    padding: 0 20px;
  }
  #divimg3 {
    padding-right: 0;
    padding-bottom: 20px;
  }
  .div1, .div2, .div3 {
    margin-top: 20px;
  }
}

/* ----------------------------------------container3 - css for Subscription cards--------------------------------------- */
#subscriptions{
  margin-top: 100px;
}
.container3{
  margin-top: 80px;
  /* padding: auto; */
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 4rem;
  /* border: 2px solid black; */
}
.scard{
  height: 450px;
  width: 350px;
  /* border: 2px solid black; */
  border-radius: 20px;
  background-color: #421E4A;
  color: #e7ebee;
  cursor: pointer;
  box-shadow: 3px 3px 8px hsl(0, 1%, 27%);
  transition: 0.5s;
}
.scard:hover{
  transform: scale(1.05);
  /* opacity: 0.8; */
  /* box-shadow: 0 10px 20px rgba(0,0,0), 0 4px 8px rgba(0,0,0); */
}
.cardbtndiv{
  /* border: 2px solid black; */
  height: 60px;
  /* width: 200px; */
  width: 350px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 100px; */
}
.cardbtn{
  /* background-color: rgb(255, 148, 7); */
  background-color: #d7dbde;
  /* margin-right: 20px; */
  color: #421E4A;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  border: 2px solid #d7dbde;
  transition: 0.8s;
  
}
.cardbtn:hover{
  /* transform: scale(1.05); */
  border: #e7ebee;
  background-color: #e7ebee;
}
.divcardtext{
  /* border: 2px solid black;  */
  height: 80px;
  background-color: #d7dbde;
  /* background-color: rgb(255, 148, 7); */
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
}
.cardtext{
  /* font-size: 50px; */
  font-weight: bold;
  color: #421E4A;
  /* text-align: left; */
}
#cardimg1{
  margin-left: -15px;
}
.subprice{
  font-size: 40px;
}
.permonth{
  font-size: 30px;
}
.underline{
  background-color: #d7dbde;
  height: 3px;
  width: 150px;
  margin-left: 100px;
  margin-top: -10px;
}
.lists{
  /* border: 2px solid black; */
  height: 150px;
  width: 300px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
  /* text-align: justify; */

}
li{
  list-style: none;
}
/* ------------------------------------------------CSS for container4 -------------------------------------------------*/
.container4{
  /* border: 2px solid black; */
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 3rem; */
}
.part1{
  /* border: 2px solid black; */
  margin-left: 100px;
}
.part1 h1{
  font-size: 60px;
  float: left;
}
.part2 img{
  height: 650px;
  width: 850px;
  /* border: 2px solid black; */
}

</style>
