<template>
  <div>
    <headerPage/>
    <div class="main">
      <sideBar/>
      <div class="frame">

        <div class="upperdiv">  
          <div class="carimgdiv">
            <img src="../assets/images/carservice.png" alt="Car" class="carimg">
          </div>
          <div class="carservice">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam architecto maiores atque eligendi eveniet praesentium non minus exercitationem excepturi fuga sapiente assumenda ex eos sit mollitia, quaerat nisi beatae?</p>
            <button class="bookbtn" @click="on(e)" value="Four Wheeler">Book Now</button>
          </div>
        </div>

      <div class="lowerdiv">
        <div class="bikeimgdiv">
          <img src="../assets/images/bike.png" alt="Bike" class="bikeimg">
        </div>
        <div class="bikeservice">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam architecto maiores atque eligendi eveniet praesentium non minus exercitationem excepturi fuga sapiente assumenda ex eos sit mollitia, quaerat nisi beatae?</p>
          <button class="bookbtn" @click="on2(e)" value="Two Wheeler">Book Now</button>
        </div>
      </div>
    </div>
<!----------------------------------------------------------------------------------------------------------------------------------->

<!-- -----------------------------------------------------Overlay for Car-------------------------------------------------------------- -->
<div id="overlay" >
    <div class="frame2">
      
      <div class="divtext">
        <h1 id="steps">
            <svg id="back" @click="off()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          Just few more Steps to go!</h1>
      </div>
    <div class="framediv">
      <div class="divform">
        <h3 id="enterdetails">Please enter following details</h3>
        <label for="name" class="labels">Name:</label>
        <input type="text" class="inputs" v-model="name"> <br>
        <label for="phoneno" class="labels">Phone Number:</label>
        <input type="text" class="inputs" v-model="phoneno"> <br>

        <div class="datetime">
        <label for="date" class="datetimelbl">Date:</label>
        <input type="date" class="datetimeinput" v-model="date">
        <label for="time" class="datetimelbl">Time:</label>
        <input type="time" class="datetimeinput" v-model="time">
        </div> <br>

        <label for="Address" class="labels">Address:</label>
        <input type="text" class="inputs" v-model="address"> 
        <div class="rightarrowdiv">
          <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </div>
      </div>

      <div class="divsubscriptions" >
        <div class="divsub">
        <h3>Try our subscriptions</h3>
        <div class="sub1" v-if="sub1" id="myDiv1"  @click="enablebtn"  value="basic" :style="{ backgroundColor: color1 }" >
          <h5>Basic</h5>        
          <h4>₹500/month</h4>
        </div>
        <div class="sub2" v-if="sub2" id="myDiv2"  @click="enablebtn1" value="standard" :style="{ backgroundColor: color2 }">
          <h5>Standard</h5>
          <h4>₹800/month</h4>
        </div>
        <div class="sub3" v-if="sub3" id="myDiv3" @click="enablebtn2" value="premium" :style="{ backgroundColor: color3 }">
          <h5>Premium</h5>
          <h4>₹1000/month</h4>
        </div>
        <div class="nosubdiv" v-if="nosub" @click="enablebtn3" :style="{ backgroundColor: color4 }">
         <h5> No, I want a one time Booking</h5>
        </div>
      </div>
    </div>
    </div>
    <div class="bookservice" v-if="bookservicebtn">
    <button class="book" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Service</button>
    </div>
    
  </div>
</div>
<!-- -----------------------------------------------------Overlay for Bike-------------------------------------------------------------- -->
<div id="overlay2" >
    <div class="frame2">
      
      <div class="divtext">
        <h1 id="steps">
            <svg id="back" @click="off2()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          Just few more Steps to go!</h1>
      </div>
      <div class="framediv">
      <div class="divform">
        <h3 id="enterdetails">Please enter following details</h3>
        <label for="name" class="labels">Name:</label>
        <input type="text" class="inputs" v-model="name"> <br>
        <label for="phoneno" class="labels">Phone Number:</label>
        <input type="text" class="inputs" v-model="phoneno"> <br>

        <div class="datetime">
        <label for="date" class="datetimelbl">Date:</label>
        <input type="date" class="datetimeinput" v-model="date">
        <label for="time" class="datetimelbl">Time:</label>
        <input type="time" class="datetimeinput" v-model="time">
        </div> <br>

        <label for="Address" class="labels">Address:</label>
        <input type="text" class="inputs" v-model="address"> 
        <div class="rightarrowdiv">
          <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </div>
      </div>

      <div class="divsubscriptionsbike">
        <div class="divsubbike">
        <h3>Try our subscription</h3>
        <div class="sub1" v-if="subbike" id="myDiv4" @click="enablebtn4" value="standard" :style="{ backgroundColor: color5 }">
          <h5>Standard</h5>        
          <h4>₹500/month</h4>
        </div>
        <div class="nosubdiv" v-if="nosub" @click="enablebtn5" :style="{ backgroundColor: color6 }">
         <h5> No, I want a one time Booking</h5>
        </div>
      </div>
    </div>
    </div>
    <div class="bookservice" v-if="bookservicebtn">
    <button class="book" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Service</button>
    </div>
  </div>
</div>

<!-- ------------------------------------------------------------------------------------------------------------------------ -->
<div class="confirmbox" >
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirm Booking</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4> Do you want to confirm your booking?</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btncancel" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btnconfirm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="submitDetails">Confirm</button>
      </div>
    </div>
  </div>
</div>
</div>
<!-------------------------------------------------------------------------------------------------------------------------->
<div class="confirmbox2" >

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog confirmModal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Thank You!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Your booking has been confirmed! <br> Please check your registered email</h5>
        <img class="tickgif" src="../assets/images/tickkk.gif" alt="">
      </div>
      <div class="modal-footer">
       <RouterLink to="/DashboardPage"> <button type="button" class="btn btnconfirm" data-bs-dismiss="modal">OK</button></RouterLink>
      </div>
    </div>
  </div>
</div>
</div>  
  </div>
    <footerPage/>   
  </div>
</template>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  import axios from 'axios';
  // import { getAuth } from '@firebase/auth';
  // import firebase from 'firebase/compat/app';
  import headerPage from '@/views/headerPage.vue'
  import footerPage from '@/views/footerPage.vue';
  import sideBar from '@/views/sideBar.vue';
  import { getAuth } from '@firebase/auth';
// import { response } from 'express';
  export default{
        components: 
        {
          headerPage,
          footerPage,
          sideBar
        },
        data(){
          return{
            nosub:true,
            sub1:true,
            sub2:true,
            sub3:true,
            subbike:true,
            bookservicebtn:false,
            color1: ' ',
            color2: ' ',
            color3: ' ',
            color4: ' ',
            color5: ' ',
            color6: ' ',
            name:' ',
            phoneno: ' ',
            date: ' ',
            time: ' ',
            vehicle: ' ',
            address: ' ',
            fourWheeler: 'Four Wheeler',
            bike: 'Two Wheeler',
            subPlan:'',
            useremail:''
          }
        },
        
        methods:{
           on(e) {
              this.vehicle='Four Wheeler';
              document.getElementById("overlay").style.display = "block";
            },
            on2(e) {
              this.vehicle='Two Wheeler';
              document.getElementById("overlay2").style.display = "block";
            },
            off(){
              document.getElementById("overlay").style.display = "none";
            },
            off2(){
              document.getElementById("overlay2").style.display = "none";
            },
            // proceedFurther(){
            //   this.divsub=true;
            // },
            enablebtn(){
              this.bookservicebtn=true;
              this.subPlan='basic'
              this.color1 = 'lightslategray';
              // this.color1 = '#d5d8db';
              },
              enablebtn1(){
                this.bookservicebtn=true;
                this.subPlan='standard'
                this.color2 = 'lightslategray';
              },
              enablebtn2(){
                this.bookservicebtn=true;
                this.subPlan='premium'
                this.color3 = 'lightslategray';
              },
               enablebtn3(){
                this.bookservicebtn=true;
                this.subPlan='no plan'
                this.color4 = 'lightslategray';
              },
              enablebtn4(){
                this.bookservicebtn=true;
                this.subPlan='standard'
                this.color5 = 'lightslategray';
              },
              enablebtn5(){
                this.bookservicebtn=true;
                this.subPlan='no plan'
                this.color6 = 'lightslategray';
              },

              
              async  submitDetails(){

         
        const formData = {
          name:this.name,                
         phoneno:this.phoneno,
         date:this.date,
         time:this.time,
         address:this.address,
         vehicle:this.vehicle,
         subPlan : this.subPlan,
         useremail: this.useremail
        };
  
        try {
          const res = await axios.post(
            "http://localhost:3000/api/form-data",
            formData
          );
          console.log(res);
  
        
  
          // Show success message
          this.successMessage = "Form submitted successfully!";
        } catch (e) {
          console.log(e);
        }
  



        Email.send({
                Host: 'smtp.elasticemail.com',
                Username: 'yuktabhatkar@gmail.com',
                Password: 'A741F4B4878ED0AF584BFFF60B4C2D81272F',
                // To: this.toEmail,
                To: this.useremail,
                From: 'yuktabhatkar@gmail.com',
                Subject:'Booking Confirmed ! Thank You for choosing our service ',
                Body: 'Name: '+this.name + '<br>Phone No: '+this.phoneno+ '<br>Date: '+this.date+ '<br>Time: '+this.time+ '<br>Vehicle Type: '+this.vehicle+ '<br>Your Plan: '+this.subPlan+ '<br>Address: '+this.address
            }).then(message => {
            });

// ------------------------------------------------------------------------------------------            
        this.$store.state.user.username=this.name;
        window.localStorage.setItem("name", this.$store.state.user.username);
        axios.post(`https://quickclean-aaa69-default-rtdb.firebaseio.com/customerDetails.json`, {     //post data in firebase - customerdetails database
        //post this data
          name:this.name,                
         phoneno:this.phoneno,
         date:this.date,
         time:this.time,
         address:this.address,
         vehicle:this.vehicle,
        //  fourWheeler:'Four Wheeler',
         subPlan : this.subPlan,
         useremail: this.useremail
          
        })
      }
     },
     created(){
      const auth = getAuth();
      const user = auth.currentUser;
      if(user !== null){
        this.useremail = user.email;
        // console.log(this.useremail);
      }
      else{
        console.log('else part');
      }
     }
   }
      // }
</script>
<style scoped>
.main{
  /* border: 6px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
}
#overlay{
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#overlay2{
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.frame{
  /* border: 6px solid #e7ebee; */
  background-color: #e7ebee;
  margin-top: 2%;
  height: 600px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-shadow: 5px 5px 8px  #888888 ;
  /* box-shadow: 5px 10px 10px 4px #888888 ; */
}
#back{
  height: 40px;
  width: 100px;
  margin-left: -300px;
}
/* .frame:hover{
  filter: blur(5px);
  transform: scale(0.9);
  opacity: 0.5;
} */
.upperdiv{
  /* border: 2px solid #d5d8db; */
  background-color: #d5d8db;
  border-radius: 20px;
  height: 250px;
  width: 80%;
  display: flex;
  flex-direction: row;
  transition: 0.5s;

  /* padding: 50px; */
}
.upperdiv:hover{
  box-shadow: 5px 5px 8px  #888888 ;
  /* box-shadow: 10px 10px rgb(188, 195, 201); */
  /* filter: blur(0px); */
  /* transform: scale(1.1); */
  /* opacity: 1; */
}
.carimgdiv{
  /* border: 2px solid black; */
  height: 220px;
  width: 30%;
}
.carimg{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.carservice{
  /* border: 2px solid black; */
  padding: 30px;
  text-align: justify;
  height: 220px;
  width: 70%;
}
.bookbtn{
    border: 2px solid #421E4A;
    border-radius: 10px;
    background-color:  #421E4A;
    color: #e7ebee;
    font-weight: bold;
    /* margin-top: 50%; */
    margin-left: 400px;
    padding: 8px;
    box-shadow: 2px 5px 7px rgba(0,0,0);
}
.bookbtn:hover{
  transform: scale(1.05);
}
.lowerdiv{
  /* border: 2px solid black; */
  border: 2px solid #d5d8db;
  background-color: #d5d8db;
  border-radius: 20px;
  height: 250px;
  width: 80%;
  display: flex;
  flex-direction: row;
  transition: 0.5s;

}
.lowerdiv:hover{
  box-shadow: 5px 5px 8px  #888888 ;

}
.bikeimgdiv{
  /* border: 2px solid black; */
  height: 220px;
  width: 30%;
}
.bikeimg{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.bikeservice{
  /* border: 2px solid black; */
  padding: 30px;
  text-align: justify;
  height: 220px;
  width: 70%;
}
.bookbtn{
    border: 2px solid #421E4A;
    border-radius: 10px;
    background-color:  #421E4A;
    color: #e7ebee;
    font-weight: bold;
    /* margin-top: 50%; */
    margin-left: 400px;
    padding: 8px;
    box-shadow: 2px 5px 7px rgba(0,0,0);
}
.bookbtn:hover{
  transform: scale(1.05);
}
/* ----------------------------------------------------------Frame 2 css------------------------------------------------ */
.frame2{
  /* border: 2px solid black; */
  background-color: #421E4A;
  color: #e7ebee;
  margin-top: 30px;
  margin-left: 300px;
  height: 700px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 2s ease-in-out;

}
@keyframes float {
  0% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}

#steps{
  margin-top: 30px;
}
/* .divtext{
  margin-top: 50px;
} */
.framediv{
  /* border: 2px solid black; */
  height:580px;
  width: 90%;
  margin-top: 35px;
  /* border-radius: 20px ; */
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.divform{
  border: 2px solid #421E4A;
  background-color: #e7ebee;
  border-radius: 40px ;
  color: #421E4A;
  height:500px;
  width: 55%;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.rightarrowdiv{
  margin-left: 380px;
  margin-top: 30px;
}
.bi-arrow-right{
  width: 30px;
  height: 30px;
}
.divsubscriptions{
  background-color: #e7ebee;
  border-radius: 40px ;
  color: #421E4A;
  border: 2px solid #421E4A;
  height:500px;
  width: 45%;
}
.divsubscriptionsbike{
  background-color: #e7ebee;
  border-radius: 40px ;
  color: #421E4A;
  border: 2px solid #421E4A;
  height:300px;
  width: 45%;
  margin-top: 100px;
}
.divsub{
  margin-top: 30px;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
}
.divsubbike{
  margin-top: 10%;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
}
.sub1, .sub2, .sub3{
  /* border: 3px solid #d5d8db; */
  background-color: #d5d8db;
  /* border-radius: 20px; */
  height:80px;
  width: 300px;
  text-align: left;
  padding: 10px;
  box-shadow: 5px 5px 7px  #888888 ;
  transition: 0.5s;
}
.sub1:hover, .sub2:hover, .sub3:hover{
  /* border: 3px solid lightslategray; */
  transform: scale(1.05);
}  
.nosubdiv{
  margin-left: 16px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  
}
.nosubdiv:hover{
  transform: scale(1.05);
}
.frame2 .book{
/* margin-top: -20px; */
margin-bottom: 12px;
height: 60px;
width: 230px;
/* padding: 7px; */
border-radius: 10px;
background-color: #d5d8db;
border: 2px solid #d5d8db;
color: #421E4A;
font-size: 25px;
font-weight: bolder;
transition: 0.5s;
}
.book:hover{
transform: scale(1.05);
background-color:  #e7ebee;

}
#enterdetails{
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 20px;
}
.labels{
  /* margin-top: 20px; */
  margin-left: 30px;
  font-size: 23px;
}
.divform .inputs{
  /* margin-top: 20px; */
  margin-left: 30px;
  /* border: 2px solid lightgrey; */
  height: 40px;
  width: 80%;
  /* border-radius: 20px; */
  border: none;
  border-bottom: 2px solid #421E4A;
  outline: none;
  background-color: #e7ebee;
}
.datetime{
  display: flex;
  flex-direction: row;
}
.datetimelbl{
  margin-left: 30px;
  font-size: 23px;
}
.datetimeinput{
  margin-left: 9px;
  margin-top: -5px;
  height: 40px;
  width: 100px;
  /* border-radius: 20px; */
  border: none;
  border-bottom: 2px solid #421E4A;
  outline: none;
  background-color: #e7ebee;
}
/* .confirmbox{
  border: 2px solid black;
  height: 200px;
  width: 400px;
} */

.btnconfirm{
  background-color: #421E4A;
  border: 2px solid #421E4A;
  border-radius: 10px;
  color: #e7ebee;
  font-weight:lighter;
  transition: 0.5s;
}
.btnconfirm:hover{
  transform: scale(1.05);
}
.btncancel{
  background-color: #d5d8db;
  border: 2px solid #d5d8db;
  border-radius: 10px;
  color: #421E4A;
  font-weight:lighter;
  transition: 0.5s;
}
.btncancel:hover{
  transform: scale(1.05);
}
.modal-content{
  background-color: #e7ebee;
}
#exampleModalLabel{
  color: #421E4A;
}
.confirmModal{
  /* border: 9px solid black; */
  width: 400px;
  height: 400px;
}
</style>