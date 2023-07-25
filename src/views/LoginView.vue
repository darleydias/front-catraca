<template>
  <div class="login" style="margin-left:48px">
      <div class="box-login">
            <div class="logo">
              <h1>Acesso</h1>
            </div>
            <Input label="e-mail" placeHolder="Digite um e-mail válido"/>
            <Input label="senha" placeHolder="Digite uma senha" type="password"/><br>
            <Button label="Enviar" :callback="()=>logar()"></Button>
      </div>
  </div>
</template>

<script>
import Input from '@/components/input/input1.vue';
import Button from '@/components/button/button.vue';
export default {
  name: 'LoginView',
  components:{
    Input,
    Button
  },
  methods:{
    logar(){
      this.$router.push({name:'home'});
    }
  }
}
</script>
<style>

.box-login{
    width:500px;
    margin:auto;
    border:1px solid #ddd;
    margin-top:70px;
    padding:70px;
}
.logo{
  text-align:center;
  color:var(--cor-primaria);
  font-size: 28;
}
</style>
