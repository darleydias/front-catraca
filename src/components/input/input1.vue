<template>
<div>
    <label for="">{{ label }}</label><br>
    <input :type="type" :placeHolder="placeHolder"/>
</div>
</template>
  
<script>
  /* eslint-disable */ 
  export default {
    name: 'inputComponent',
    props:{
      label:{type:String,require},
      placeHolder:{type:String,require},
      type:{type:String,defalt:'text'}
    },
    data(){
        return {

        }
    }
  }
</script>
<style>
input{
  width:100%;
  padding:12px 20px;
  margin:8px 0px ;
  display:inline-block;
  border: 1px solid #ddd;
  outline:none;
  border-radius:4px;
  box-sizing:border-box;
}
</style>
  