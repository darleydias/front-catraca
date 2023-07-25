// import { reject, resolve } from 'core-js/fn/promise';
import api from './api';
function lista(id){
    return new Promise((resolve,reject)=>{
        return api.get(`/api/local/${id}/acessos`)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function grava(acesso){
    return new Promise((resolve,reject)=>{
        return api.post(`/api/acessos`,acesso)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function atualiza(acesso,id){
// function atualiza(acesso){
    return new Promise((resolve,reject)=>{
        // return api.put(`/acessos/${acesso.id}`,acesso)
        return api.put(`/api/acessos/${id}`,acesso)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
function exclue(id){
    return new Promise((resolve,reject)=>{
        return api.delete(`/api/acessos/${id}`)
        .then(response=>resolve(response))
        .catch(error=>(reject(error)));
    })
}
export default{
    lista,
    grava,
    atualiza,
    exclue
}