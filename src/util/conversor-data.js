import moment from 'moment';
function aplicaMascaraEmDataIso(data){
    if(data){
        return moment(data).locale('pt-BR').format('DD-MM-YYYY');
    }
    return undefined;
}
function aplicaMascaraEmDataHoraIso(data){
    if(data){
        return moment(data).locale('pt-BR').format('DD-MM-YYYY HH:mm:ss');
    }
    return undefined;
}
export default {
    aplicaMascaraEmDataIso,
    aplicaMascaraEmDataHoraIso
}