export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this._notificar();
    }

    inscrever(fn) {
        this._inscritos.push(fn);
    }

    desinscrever(fn) {
        this._inscritos = this._inscritos.filter(f => f !== fn);
    }

    _notificar() {
        this._inscritos.forEach(fn => fn(this.categorias));
    }
}