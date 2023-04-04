<template>
    <div>
      <headerPage/>
         <div class="servicecards" v-if="servicesDiv">
        <div class="scard">
          <div class="divcardtext">
            <h1 class="cardtext">For Car</h1>
          </div> <br>
          <div class="cardimg">
            <img src="../assets/images/carservice.png">
          </div> <br>
          <div>
            <button class="cardbtn" @click="bookservice()">Book Service</button>
          </div>
        </div>
  
  
        <div class="scard">
          <div class="divcardtext">
            <h1 class="cardtext">For Bike</h1>
          </div> <br>
          <div class="cardimg">
            <img src="../assets/images/bike.png" id="cardimg1">
          </div> <br>
          <div>
            <button class="cardbtn"  @click="bookservice()">Book Service</button>
          </div>
        </div>
        </div> 
  
  
  
      <div class="serviceinfo" v-if="serviceinfoDiv">
          <div class="div1">
            <form action="">
            <div class=" signlabels">
              <label class="formlabel ">Phone Number</label> <br>
              <input type="tel" class="forminput"/>
            </div>
  
            <div class=" signlabels">
              <label class="formlabel ">Date</label> <br>
              <input type="date" class="forminput"/>
            </div>
  
            <div class=" signlabels">
              <label class="formlabel ">Time</label> <br>
              <input type="time" class="forminput"/>
            </div>
            <div>
              <button class="btnbook">Book</button>
            </div>
          </form>
      </div>
      <div class="div2">
        <h1>Want to try our subscriptions?</h1>
        <button class="trybtn">Try Subscription</button>
      </div>
    </div>
  
  
      <div class="logoutbtn">
        <button @click="logout" class="btn btn-warning">Logout</button>
      </div>  
        <footerPage/>   
    </div>
  </template>
  
  <script>
   import firebase from 'firebase/compat/app';
  import headerPage from '@/views/headerPage.vue'
  import footerPage from '@/views/footerPage.vue';
  export default{
        components: 
        {
          headerPage,
          footerPage 
        },
        data(){
          return{
            servicesDiv:true,
            serviceinfoDiv:false
          }
        },
        methods:
      {
          logout: function() {
          firebase.auth().signOut().then(() => {
            this.$router.replace('/');
          })
      },
      bookservice(){
        // this.servicesDiv=false;
        this.serviceinfoDiv=true;
      }
  
  
      }
      }
    
  </script>
  
  <style scoped>
  .servicecards{
    margin-top: 100px;
    /* padding: auto; */
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 9rem;
    /* border: 2px solid black; */
  }
  .scard{
    height: 450px;
    width: 330px;
    /* border: 2px solid black; */
    border-radius: 20px;
    background-color: #421E4A;
    color: #e7ebee;
    cursor: pointer;
    box-shadow: 3px 3px 8px hsl(0, 1%, 27%);
  }
  .scard:hover{
    transform: scale(1.05);
    /* opacity: 0.8; */
    /* box-shadow: 0 10px 20px rgba(0,0,0), 0 4px 8px rgba(0,0,0); */
  }
  .cardimg img{
    width: 330px;
    height: 250px;
    /* border: 2px solid black; */
  }
  .divcardtext{
    /* border: 2px solid black;  */
    /* padding: 40px 50px 10px 50px; */
    height: 80px;
    background-color: #e7ebee;
    border-radius: 20px 20px 0px 0px;
    padding: 10px;
  }
  .cardtext{
    /* font-size: 50px; */
    font-weight: bold;
    color: #421E4A;
    /* text-align: left; */
  }
  /* #cardimg1{
    margin-left: -15px;
  } */
  .cardbtn{
    border: 2px solid #e7ebee;
    border-radius: 10px;
    background-color: #e7ebee;
    color: #421E4A;
    font-weight: bold;
    margin-top: -50%;
    padding: 8px;
    box-shadow: 2px 5px 7px rgba(0,0,0);
    /* box-shadow: 0 10px 20px rgba(0,0,0), 0 4px 8px rgba(0,0,0); */
  
  }
  /* .cardbtn:hover{
   box-shadow: 0 10px 20px rgba(0,0,0), 0 4px 8px rgba(0,0,0); 
   } */
  
  /* CSS for Service info */
  .serviceinfo{
    margin-top: 100px;
    /* border: 2px solid black;  */
    width: 1000px;
    margin-left: 250px;
    border: 2px solid #e7ebee;
    /* box-shadow: 5px 10px 8px #888888; */
    background-color: #e7ebee;
    border-radius: 20px;
    height: 400px;
    padding: 50px;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .div1{
    border: 2px solid #d5d8db;
    background-color: #d5d8db;
    border-radius: 20px;
    width: 60%;
    padding: 20px;
    box-shadow: 5px 10px 8px #888888;
  }
  .div2{
    margin-top: 50px;
    border-radius: 20px;
    width: 40%;
    border: 2px solid #d5d8db;
    background-color: #d5d8db;
    box-shadow: 5px 10px 8px #888888;
    height: 200px;
  }
  .btnbook{
    width: 100px;
    background-color: #421E4A;
    color: #e7ebee;
    font-weight: bold;
    border-radius: 10px;
    padding: 7px;
    margin-left: 180px;
  }
  .btnbook:hover{
      opacity: 0.9;
  }
  .trybtn{
    background-color: #421E4A;
    color: #e7ebee;
    font-weight: bold;
    border-radius: 10px;
    padding: 7px;
    margin-top: 40px;
    margin-left: 80px;
  }
  .trybtn:hover{
   opacity: 0.9;
  }
  .logoutbtn
  {
    margin-top: 5%;
  }
  .signlabels{
    text-align: left;
    font-size: 26px;
  }
  /* .formlabel{
    text-align: left;
  } */
  .forminput{
    border-radius: 10px;
    border: 2px solid #888888;
    
    /* background-color: ; */
  }
  </style>