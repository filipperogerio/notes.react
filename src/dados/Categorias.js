export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria) {
        console.log(this.categorias)
        this.categorias.push(novaCategoria);
    }

    inscrever(fn) {
        this._inscritos.push(fn);
    }

    notificar() {
        this._inscritos.forEach(fn => fn(this.categorias));
    }
}