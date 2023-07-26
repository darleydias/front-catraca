<template>
  <div class="box-acesso">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Acesso</h1>
        <hr class="hr1">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <Button label="Gravar"></Button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Data-hora</th>
              <th>Nome</th>
              <th>Catraca</th>
              <th></th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="item in acessos" :key="item.id">
                <td>{{ item.acesso_DH | data}}</td>
                <td>{{ item.nomeCompleto}}</td>
                <td>{{ item.local_nome}}</td>
                <td><i class="fa-regular fa-trash-can icone-tabela"></i><i class="fa-regular fa-pen-to-square icone-tabela"></i></td>
              </tr>
            </tbody>
          
        </table>
      </div>
    </div>
   </div>
</template>

<script>
import Button from '@/components/button/button.vue'
import acessoService from '../services/acesso'
import Acesso from '../models/Acesso'
import convertData from '../util/conversor-data'

export default {
  name: 'AcessoView',
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
      acessos:[]
    }
  },
  methods:{
    obterAcessos(){
      acessoService.lista(1) // Local 1
      .then(response=>{
        this.acessos = response.data.data.map(a=> new Acesso(a));
        console.log(this.acesso);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },  
  mounted(){
    this.obterAcessos();
  }
  
}

</script>
<style>
.box-acesso{
  margin-left: 60px;
  margin-right: 60px;
}
.icone-tabela{
  margin: 8px;
  cursor: pointer;
  color: var(--cor-primaria);
}
</style>
