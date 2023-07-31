<template>
    <div class="box-local">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="titulo">Local onde se monitora o acesso</h1>
          <hr class="hr1">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <Button :callback="adicionarLocais" label="Gravar"></Button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th></th>
              </tr>
            </thead>
              <tbody>
                <tr v-for="item in catracas" :key="item.id">
                  <td class="icons">{{ item.local_nome}}</td>
                  <td><i @click="excluirLocais" class="fa-regular fa-trash-can icone-tabela"></i></td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
     </div>
  </template>
  
  <script>
  import Button from '@/components/button/button.vue'
  import localService from '../services/local'
  import Local from '../models/Local'
  import convertData from '../util/conversor-data'
  
  export default {
    name: 'LocalView',
    components:{
      Button
    },
    filters:{
      data(data){
        return convertData.aplicaMascaraEmDataHoraIso(data);
      }
    },
    data(){
      return {
        catracas:[]
      }
    },
    methods:{
      obterLocais(){
        localService.lista() 
        .then(response=>{
          this.catracas = response.data.map(a=> new Local(a));
          console.log(this.catracas);
        })
        .catch(error=>{
          console.log(error);
        })
        console.log(this.catracas);
      },
      adicionarLocais(){
        this.$router.push({name:"LocalNovo"});
      },
      excluirLocais(){
        this.$router.push({name:"Local"});
      }
      
    },  
    mounted(){
      this.obterLocais();
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
  </style>
  