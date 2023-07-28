<template>
    <div class="display" style="margin-left:48px">
      <div class="row">
        <div class="col-sm-12">
          <div class="box-foto">
            <v-img :src="require('@/assets/foto.png')" width="390" height="480" ></v-img>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="box-texto">
            
                  <h5 class="texto">Carlos Antônio Garcia Ferdinando - Diretoria</h5>
                  <p class="texto">Entrada na Roleta 1 Sede as 10:00 de 27-07-2023</p>
          </div>
        </div>
      </div>
    
   </div>
  </template>
  
  <script>
  
  export default {
    name: 'DisplayView'
  }
  </script>

<style>
.display{
  margin-top: 1%;
  margin-right: 20px;
  padding-left: 1%;
  float:right;
}
.box-foto{
    width:400px;
    height: 500px;
    border:1px solid #524d4d;
    margin-top:70px;
    padding-right: 20px;
    margin-right: 20px;
    float:right;

}
.box-texto{
  padding-top: 20px;
  margin-block-end: 0;
  text-align:justify;
  color:black;
  font-size: 28;
  float:right;
}
</style>

  
  