<template>  
<div class="container ">
    <div class="main">
        <!-- <div class="row">
            <div class="col-md-12">
            <h1 class="titulo">Adicionar Local</h1>    
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="id">Código</label>
                    <input type="text" id="id"  class="form-control" disabled>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-10">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome"  class="form-control" disabled>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="date">Data</label>
                    <input type="date" id="date"  class="form-control" disabled>
                </div>
            </div>
        </div> -->
    </div>
</div>

</template>
  
  <script>
//   import Button from '@/components/button/button.vue'
//   import localService from '../services/local'
//   import Local from '../models/Local'
//   import convertData from '../util/conversor-data'
  
  export default {
    name: 'LocalNovo',
    components:{
    //   Button
    },
    filters:{
    },
    data(){
      return {
        catracas:[]
      }
    },
    methods:{
    }, 
    mounted(){
    //   this.obterLocais();
    }
    
  }
  
  </script>
  <style>
  .box-local{
    margin-left: 60px;
    margin-right: 60px;
  }
  .icone-tabela{
    margin: 8px;
    cursor: pointer;
    color: var(--cor-primaria);
  }
  icons{
    text-align: right;
  }
  .main{
  width: 130%;
  margin-top: 1%;
  margin-left: 240px;
  padding-left: 240px;
  margin-right: 0px;
  padding-right: 0px;
  overflow:inherit;
}
  </style>
  