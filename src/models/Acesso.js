export default class Acesso{
    constructor(obj){
    obj = obj || {};
      this.acesso_DH = obj.acesso_DH;
      this.nomeCompleto = obj.nomeCompleto || "";
      this.local_nome = obj.local_nome || "";
    }
}