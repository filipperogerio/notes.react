import React, { Component } from 'react';
import './estilo.css'
class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = '';
        this.Texto = '';
    }

    handlerMudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    handleTexto(evento) {
        this.texto = evento.target.value;
    }

    handleSubmit(evento) {
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className='form-cadastro' onSubmit={this.handleSubmit.bind(this)}>
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this.handlerMudancaTitulo.bind(this)}
                />
                <textarea
                    className='form-cadastro_input'
                    rows={15}
                    placeholder="Escreva sua nota ..."
                    onChange={this.handleTexto.bind(this)}
                />
                <button
                    className='form-cadastro_button form-cadastro_submit'
                >
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;