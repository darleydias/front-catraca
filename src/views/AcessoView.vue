<template>
  <div class="box-acesso">
      <div class="row">
        <div class="col-sm-10">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="titulo">Acesso</h1>
                  <hr class="hr1">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2">
                  <Button :callback="adicionarAcessos" label="Gravar"></Button>
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
                          <td><i @click="excluirAcessos" class="fa-regular fa-trash-can icone-tabela"></i></td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
        </div>
        <div class="col-sm-2">
          <DisplayView class="display"/>        
        </div>
      </div>
  </div>
</template>

<script>
import Button from '@/components/button/button.vue'
import acessoService from '../services/acesso'
import Acesso from '../models/Acesso'
import convertData from '../util/conversor-data'
import DisplayView from '@/components/DisplayView.vue';

export default {
  name: 'AcessoView',
  components:{
    Button,
    DisplayView
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
    },
    adicionarAcessos(){
      this.$router.push({name:"EntradaSaida"});
    },
    excluirAcessos(){
      this.$router.push({name:"EntradaSaida"});
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
.display{
  margin-top: 0px;
  padding: 0px;
  margin-right: 20px;
  padding-right: 20px;
  margin-left: 0px;
}

</style>
