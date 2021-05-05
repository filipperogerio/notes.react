import React, { Component } from 'react';
import CardNota from '../CardNota/';
import './estilo.css';

class ListaDeNotas extends Component {

    render() {
        return (
            <ul className='lista-notas'>
                {this.props.notas.map((item, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            <CardNota
                                indice={index}
                                titulo={item.titulo}
                                texto={item.texto}
                                apagarNota={this.props.apagarNota}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default ListaDeNotas;