<template>
  <div id="app">
    <div class="box-main">
      <Menu v-if="this.$router.currentRoute.name!='login'"></Menu>
      <div class="row">
        <div class="col-sm-6">
          <router-view class="main"/>
        </div>
        <div class="col-sm-6">
          <DisplayView class="display"/>
        </div>
      </div>
    </div>
  <section>
    <nav>
      <div class="box-lateral">
         <MenuLateral v-if="this.$router.currentRoute.name!='login'"></MenuLateral>
      </div>
    </nav>
  </section>

  </div>
</template>

<script>
import Menu from '@/views/menu/MenuView.vue';
import MenuLateral from '@/views/menu/MenuLateralView.vue';
import DisplayView from '@/components/DisplayView.vue';
export default{
  components:{
    Menu,
    MenuLateral,
    DisplayView
  }
}
</script>

<style>
.main{
  width: 130%;
  margin-top: 1%;
  margin-left: 240px;
  padding-left: 240px;
  margin-right: 0px;
  padding-right: 0px;
  overflow:inherit;
}
.display{
  margin-top: 0px;
  padding: 0px;
  margin-right: 20px;
  padding-right: 20px;
  margin-left: 0px;
  float:none;
}


:root{
  --cor-primaria: #3A85A2;
  --cor-secundaria:#3A88C8
}
body {
  margin:0px;
  padding:0px
}
.box-main{
  margin-left:20px;
  margin-right:20px
}
.box-lateral{
  margin-top:-10px;
  margin-left: 20px;
  margin-right: 90%;
  overflow:inherit;
}
.titulo{
  font-weight: 800;
  color: #363636;
  font-family: 'Quicksand', sans-serif;
  font-size: xx-large;
}
.hr1{
  margin-bottom: 20px;
}

</style>
