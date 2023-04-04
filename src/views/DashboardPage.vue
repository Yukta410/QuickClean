<template>
    <div>
        <headerPage/>
        <div class="main">
            <div class="welcome">
                <h2>Welcome, {{heading_name}}</h2>
                <button @click="logout" class="btn">Logout</button>
            </div>

            <div class="bhistory">
                <h3>Here's your booking history</h3>
            </div>

            <div class="table">
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Address</th>
                    <th scope="col">Your Plan</th>

                    </tr>
                </thead>
                <tbody v-for="(customer,index) in separateData" :key="index">
                    <tr>
                    <th scope="row">{{ separateData[index].name}}</th>
                    <td>{{ separateData[index].phoneno}}</td>
                    <td>{{ separateData[index].date}}</td>
                    <td>{{ separateData[index].time}}</td>
                    <td>{{ separateData[index].vehicle}}</td>
                    <td>{{ separateData[index].address}}</td>
                    <td>{{ separateData[index].subPlan}}</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
        <footerPage/>
    </div>
</template>

<script>
  import axios from 'axios';
  import firebase from 'firebase/compat/app';
  import headerPage from '@/views/headerPage.vue'
  import footerPage from '@/views/footerPage.vue';
// import { response } from 'express';
  export default{
        components: 
        {
          headerPage,
          footerPage 
        },
        data(){
            return{
                getCustomerDetails: [],
                separateData: [],
                heading_name : window.localStorage.getItem("name")
                // admin: ' Yukta Bhatkar'
            }
        },
        methods:
    {
        logout: function() {
        firebase.auth().signOut().then(() => {
          localStorage.removeItem("name");
          localStorage.removeItem("useremail");
          this.$router.replace('/');
        })
    },
    }, mounted()               //to fetch data as soon as page is reloaded
       {
        
        // let a =  this.$store.commit("changeName", " Yukta Bhatkar");
    //     this.$store.commit("changeName", {
    //    newName: " ABC",
    //     });
        // console.log(this.a);
        // this.$store.state.user.username =" Megha Bhatkar";
        axios.get(`https://quickclean-aaa69-default-rtdb.firebaseio.com/customerDetails.json`)
        .then(response=>{
            // console.log(response.data);
            this.getCustomerDetails=[];
            this.separateData=[];
            for(let key in response.data){
                // if(response.data[key].name == this.$store.state.user.username){
                    this.getCustomerDetails.push({...response.data[key], id:key})
                // }  
            }
            // console.log(this.getCustomerDetails);
            for(let key in this.getCustomerDetails){
                if(this.getCustomerDetails[key].useremail == window.localStorage.getItem("useremail")){
                    this.separateData.push({...this.getCustomerDetails[key]})
                }  
            }
            console.log(this.separateData);
            
        })
        
    }

}
</script>
<style scoped>
.welcome{
 margin-top: 20px;
 text-align: left;
 margin-left: 50px;
 display: flex;
 flex-direction: row;
 gap: 70rem;
}
.btn{
 height: 40px;
 background-color: #421E4A;
 color: #e7ebee;
}
.bhistory{
 text-align: left;
 margin-left: 50px;
}
.table{
    margin-top: 30px;
    margin-left: 20px;
    width: 600px;
}

</style>
