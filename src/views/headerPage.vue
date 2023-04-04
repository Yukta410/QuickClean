<template>
  <div>
     <!-- header -->
     <div class="navbardiv">
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="https://i.ibb.co/gjq8jSh/Capture-removebg-preview.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                
                <RouterLink to="/"><a class="nav-link">Home</a></RouterLink>
               <b> <a class="nav-link" @click="bookNow">Services</a></b>
                <RouterLink to="/register"><a class="nav-link">Register</a></RouterLink>
                <!-- <RouterLink to="/DashboardPage"><a class="nav-link">Dashboard</a></RouterLink> -->

                <div class="userlogin">
                <div class="icon">
                  <svg id="iconstyle" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
                </div>
                <div class="loginword">
                  <RouterLink to="/login"><a class="nav-link" >Login</a></RouterLink>
                </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </div>
    <!-- Header ends here -->
  </div>
</template>

<script>
import firebase from '@firebase/app-compat';
export default{
 name: 'headerPage',
 methods:{
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
/* css for header */
/* li{
  list-style: none;
  float: left;
} */
.navbardiv{
  background-color: #421E4A;
}
.navbardiv a{
  color: #e7ebee;
  text-decoration: none;
}
.nav-link{
  font-size: 20px;
  margin-left: 30px;
  transition: 0.5s;
}
.nav-link:hover{
  color:rgb(255, 148, 7);
}
.userlogin{
  margin-left: 900px;
  display: flex;
  flex-direction: row;
}
#iconstyle{
  margin-top: 10px;
  /* margin-left: 20px; */
  color: #e7ebee;
}
/* .icon{
  border: 2px solid whitesmoke;
} */
.loginword{
  margin-left: -30px;
  /* border: 2px solid whitesmoke; */

}
.navbar-brand img{
  height: 90px;
  width: 110px;
  margin-left: 2%;
}
.navbar-toggler{
  background-color: #e7ebee;
}
.nav-link{
  font-size: 20px;
  margin-left: 30px;
}
.nav-link:hover{
 transform: scale(1.05);
  color:rgb(255, 148, 7);
}
/* ---------------------- */
@media (max-width: 768px) {
  .userlogin {
    margin-left: auto;
  }
  .loginword {
    display: none;
  }
  .nav-link {
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
  .navbar-brand img {
    height: 60px;
    width: 80px;
  }
}


</style>