import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    _handleEventoInput(evento) {
        if (evento.key === 'Enter') {

            this.props.adicionarCategoria(evento.target.value);
        }
    }

    render() {
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {this.props.categorias.map((categoria, indice) => {
                        return <li key={indice} className='lista-categorias_item'>{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;