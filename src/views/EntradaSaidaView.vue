<template>
     <div class="box-acesso">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="titulo">Grava entrada e saída</h1>
            <hr class="hr1">
          </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
              <div class="form-group">
                <label for="id">Código cartao</label>
                <input type="text" id="id" class="form-control" disabled>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label for="loc">Código Local</label>
                <input type="text" id="loc" class="form-control" disabled>
              </div>
            </div>
          </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'EntradaSaidaView'
  }
  </script>
  <style>
  .titulo{
    font-weight: 600;
    color: #363636;
    font-size: 25px;
  }

</style>
  