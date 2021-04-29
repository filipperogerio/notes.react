import React, { Component } from 'react';
import CardNota from '../CardNota/';
import './estilo.css';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className='lista-notas'>
                {Array.of("Trabalho", "Estudo", "Lazer").map((item, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            <div>{item}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default ListaDeNotas;