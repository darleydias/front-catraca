// import { reject, resolve } from 'core-js/fn/promise';
import api from './api';
function lista(){
    return new Promise((resolve,reject)=>{
        return api.get(`/api/local`)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function grava(local){
    return new Promise((resolve,reject)=>{
        return api.post(`/api/acessos`,local)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function atualiza(local,id){
// function atualiza(acesso){
    return new Promise((resolve,reject)=>{
        return api.put(`/api/local/${id}`,local)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function excluir(id){
    return new Promise((resolve,reject)=>{
        return api.delete(`/api/local/${id}`)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
export default{
    lista,
    grava,
    atualiza,
    excluir
}