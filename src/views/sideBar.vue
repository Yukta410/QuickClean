<template>
  <div>
    <div id="mySidenav" :style="{ width: isNavOpen ? '50px' : '0' }" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
     
        <button >
          <img @click="gotoDashboard" class="icon" src="../assets/images/dashboard.png" title="Dashboard">
        </button> 
   
      <a>
        <button @click="logout()">
          <img class="icon" src="../assets/images/logout.png" title="Logout">
        </button>
      </a>
    </div>
    <div class="moreoptionsdiv">
    <span class="moreoptions" @click="openNav()">&#9776; More Options</span>
  </div>
  </div>
  
</template>
<script>
import firebase from '@firebase/app-compat';
export default {
  data() {
    return {
      isNavOpen: false
    };
  },

  methods: {
    openNav() {
      this.isNavOpen = true;
    },

    closeNav() {
      this.isNavOpen = false;
    },
    logout: function() {
            firebase.auth().signOut().then(() => {
              localStorage.removeItem("name");
              localStorage.removeItem("useremail");
              this.$router.replace('/');
          })
      },
      gotoDashboard: function() {
          
                if(  window.localStorage.getItem("useremail") == 'yuktabhatkar4@gmail.com')
                {
                    this.$router.replace('/AdminDashboard')
                }
                else{
                  console.log("heelooo");
                    this.$router.replace('/DashboardPage');
                }
            },
           
  }
};
</script>
<style scoped>
.moreoptionsdiv{
  text-align: left;
  margin-left: -750px;
  margin-top: 20px;
  color: #421E4A;
  /* border: 2px solid black; */
}
button{
  background-color: #421E4A;
  border: none;
}
.icon{
  height: 24px;
  width: 24px;
}
.moreoptions{
  font-size:22px;
  cursor:pointer
}
.sidenav {
  height: 180px;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 180px;
  left: 0;
  background-color: #421E4A;
  /* opacity: 0.8; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 10px 4px 4px 6px;
  text-decoration: none;
  font-size: 18px;
  color: #e7ebee;
  text-align: left;
  display: block;
  transition: 0.5s;
}

.sidenav a:hover {
  /* color: rgb(255, 148, 7); */
transform: scale(1.05);
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 36px;
  /* margin-left: 100px; */
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>