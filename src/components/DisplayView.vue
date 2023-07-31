<template>
    <div class="display" style="margin-left:48px">
      <div class="row">
        <div class="col-sm-12">
          <div class="box-foto">
            <img :src="require('@/assets/foto.png')" width="390" height="480" />
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
.box-foto{
    width:400px;
    height: 500px;
    margin-top:70px;
    padding-right: 20px;
    margin-right: 20px;
    padding-left: 20px;
    margin-left: 20px;
}
.box-texto{
  padding-top: 20px;
  text-align:justify;
  color:black;
  font-size: 28;
  width:400px;
  max-width:500px;
  margin-left:40px;
}
</style>

  
  