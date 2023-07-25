<template>
  <div id="app">
    <div class="box-main">
    <Menu v-if="this.$router.currentRoute.name!='login'"></Menu>
  </div>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/views/menu/MenuView.vue';
export default{
  components:{
    Menu
  }

}

</script>

<style>
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
