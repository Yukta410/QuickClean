<template>
    <div>
      <headerPage/>
      <div class="mainpage">
        <div class="loginimg">
            <img src="../assets/images/login.png" class="imgforlogin">
        </div>
        <div class="loginform">
            <!-- <div class="newuser">
                <h5><span @click="alertmsg"><RouterLink to="/AdminDashboard" class="rlink">Dashboard</RouterLink></span> </h5>
            </div> -->
            <div class="welcome">
                <h1>Welcome Admin!</h1>
                <h4>Login to continue</h4>
            </div>
            <div class="emailpass">
                <h3><label for="email" class="labels">Email Address</label></h3>
                <input type="email" placeholder="  email@gmail.com" v-model="email" class="inputs" @keyup.enter="login"> <br>
                <h3><label for="password" class="labels">Password</label></h3>
                <input type="password" placeholder="  Enter password" v-model="password" class="inputs" @keyup.enter="login" >


            </div>
            <div class="lastdiv">
            <div class="loginbtndiv">
                <button class="loginbtn" @click="login" >Login</button>
            </div>
            <!-- <div class="loginwith">
                <div><h5>Login with </h5></div>
                <div class="loginicons">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
        </div>
      </div>
      <footerPage/>
    </div>
  </template>
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import headerPage from '@/views/headerPage.vue';
  import footerPage from '@/views/footerPage.vue';
//   import { RouterLink } from 'vue-router';
    export default
    {
        components:
        {
    headerPage,
    footerPage,
    // RouterLink
}, data()
      {
          return{
             userInput:'',
             email: '',
             password: '',
             eyeSvg: "eye-closed",
            //  useremail: '',
          }
      },
      methods: {
        login: function() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            () => {
                if(this.email == 'yuktabhatkar4@gmail.com' && this.password == 'Adminyukta4'){
                    alert('You are logging in as an Admin')
                    window.localStorage.setItem("useremail", this.email)
                    this.$router.replace('/AdminDashboard')
                }
                else{
                    window.localStorage.setItem("useremail", this.email)
                    this.$router.replace('/service');
                }
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          );
        },
        login1()
        {
            console.log("pressed");
        }, 
      },
      
    }
  </script>
  <style scoped>
.mainpage{
    /* border: 10px solid black; */
    height: 630px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 2rem;
    
}
.loginimg{
    /* border: 6px solid black; */
    height: 700px;
    width: 40%;
}
.imgforlogin{
    /* margin-top: 50px; */
    /* border: 2px solid black; */
    height: 600px;
    width: 650px;
}
.loginform{
    margin-top: 50px;
    /* border: 3px solid black; */
    height: 700px;
    width: 60%;
}
.welcome{
    margin-right: 400px;
    /* border: 2px solid black; */
    text-align: left;
    margin-left: 70px;
}
.emailpass{
    /* border: 2px solid black; */
    margin-left: 50px;
    height: 300px;
    width: 660px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.labels{
    width: 600px;
    /* border: 2px solid black; */
    text-align: left;
    margin-left: -20px;
}
.inputs{
    height: 60px;
    width: 600px;
    border: 2px solid #421E4A;
}
.inputs:hover{
    border: 2px solid #834092;
}
.loginbtndiv{
    /* border: 2px solid black; */
    height: 70px;
    width: 400px;
}
.loginbtn{
    height: 50px;
    width: 150px;
    border: #421E4A;
    background-color: #421E4A;
    color: #e7ebee;
    border-radius: 20px;
    font-weight: bold;
    margin-right: 120px;
    margin-top: -50px;
    box-shadow: 1px 5px 9px #888888;
    transition: 0.5s;

}
.loginbtn:hover{
    transform: scale(1.05);
}
.loginwith{
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    /* margin-top: 30px; */
}
ul{
  list-style-type:none;
  display:flex;
  justify-content: center;
  gap: 2rem;
}
ul li{
    display: list-item;
    cursor: pointer;
    transition: 0.5s;
}
ul li:hover{
    transform: scale(1.4);
}
.lastdiv{
    display: flex;
    flex-direction: row;
}
</style>