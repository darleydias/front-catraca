<template>
    <nav class="menu-lateral">
        <div class="btn-expandir"><i class="fa fa-align-justify" aria-hidden="true"></i></div>
        <ul>
        <li class="item-menu"><a @click="()=>this.$router.push({path:'/home'})"><span class="fa fa-home icon"></span><span class="txt-link">Home</span></a></li>
        <li class="item-menu"><a @click="()=>this.$router.push({path:'/local'})"><span class="fa fa-table icon"></span><span class="txt-link">Local</span></a></li>
        <li class="item-menu"><a @click="()=>this.$router.push({path:'/acesso'})"><span class="fa fa-qrcode icon"></span><span class="txt-link">Acessos</span></a></li>
        <li class="item-menu"><a @click="()=>this.$router.push({path:'/cartao'})"><span class="fa fa-address-card icon"></span><span class="txt-link">Cartoes</span></a></li>
        <li class="item-menu"><a @click="()=>this.$router.push({path:'/visitante'})"><span class="fa fa-male icon"></span><span class="txt-link">visitantes</span></a></li>
    </ul>

    </nav>
</template>
<script>
export default {
  name: 'MenuLateralView' 
}
</script>
<style scoped>
.menu-lateral{
    width: 240px;
    height: 100%;
    padding: 40px 0px 40px 1%;
    background-color:var(--cor-primaria);
    position: fixed;
    top: 0px;
    left:0px;
    overflow: hidden;
    transition: 0.1s;
    margin-top: 60px;
}
ul{
    height: 100;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
}
ul li.item-menu a{
    color: white;
    text-decoration: none;
    font-size: 20px;  
    padding: 20px 4%; 
    display: flex;
    line-height: 40px;
}ul li.item-menu:hover{
    background: #4C9FB4;
    color: aliceblue;
    
}

ul li.item-menu a .txt-link{
    margin-left: 40px;
}
ul li.item-menu a .icon{
   font-size: 30px;
}
.btn-expandir{
    color: white;
    width: 100px;
   padding-left: 10px;
   font-size: 30px;
}
.btn-expandir > i{
   color: white;
   
   cursor: pointer;
}

</style>