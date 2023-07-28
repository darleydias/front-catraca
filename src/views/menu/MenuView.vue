<template>
    <ul>
        <li><a @click="()=>this.$router.push({path:'/home'})">Home</a></li>
        <li><a @click="()=>this.$router.push({path:'/acesso'})">Acesso</a></li>
        <li><a @click="()=>this.$router.push({path:'/login'})">Login</a></li>
        <li><a @click="()=>this.$router.push({path:'/login'})">Sair</a></li>
    </ul>
</template>

<script>
export default {
  name: 'ManuView' 
}
</script>
<style scoped>
ul{
    list-style-type:none;
    margin-left:-20px;
    padding-left:-20px;
    overflow:hidden;
    background-color:#3A85A2;
    margin-bottom:20px
}
li{
    float:left;
    color:#FFFFFF
}
li:first-child{
    margin-left:40px;
}
li:last-child{
    float:right;
}
li a{
    display:block;
    color:var(--cor-primaria);
    padding: 15px 17px;
    text-decoration:none;
    text-align:center;
}
li a:hover{
    background-color:#3575D1;
    cursor:pointer;
}

</style>