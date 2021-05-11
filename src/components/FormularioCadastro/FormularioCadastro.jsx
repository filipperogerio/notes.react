import React, { Component } from 'react';
import './estilo.css'
class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem Categoria';
    }

    handleCategoria(evento) {
        this.categoria = evento.target.value;
    }

    handlerMudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    handleTexto(evento) {
        this.texto = evento.target.value;
    }

    handleSubmit(evento) {
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className='form-cadastro' onSubmit={this.handleSubmit.bind(this)}>
                <select className="form-cadastro_input" onChange={this.handleCategoria.bind(this)}>
                    <option>Sem Categoria</option>
                    {this.props.categorias.map((categoria, index) => {
                        return (<option key={index}>{categoria}</option>);
                    })}
                </select>
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