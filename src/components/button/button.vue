<template>
    <div>
        <button @click="callback" class="button1">{{ label }}</button>
    </div>
    </template>
      
    <script>
      /* eslint-disable */ 
      export default {
        name: 'buttonComponent',
        props:{
          label:{type:String,require},
          callback:{type:Function,default:()=>{}}
        },
        data(){
            return {
    
            }
        }
      }
    </script>
    <style>
    .button1{
      width:100%;
      padding:12px 20px;
      background-color:var(--cor-primaria);
      margin:8px 0px ;
      display:inline-block;
      border: none;
      outline:none;
      border-radius:4px;
      box-sizing:border-box;
      text-align:center;
      color:white;
      cursor:pointer;
    }
    button:hover{
        background-color:var(--cor-secundaria)
    }
    </style>
      