export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this._notificar();
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1);
        this._notificar();
    }

    inscrever(fn) {
        this._inscritos.push(fn);
    }

    desinscrever(fn) {
        this._inscritos = this._inscritos.filter(f => f !== fn);
    }

    _notificar() {
        this._inscritos.forEach(fn => fn(this.notas));
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}