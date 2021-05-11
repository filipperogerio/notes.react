import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/index.css';
import './assets/App.css'
import { nativeTouchData } from 'react-dom/test-utils';
import { ListaDeCategorias } from './components/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/ArrayDeNotas';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   notas: [],
    //   // categorias: []
    // }

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

  }

  // criarNota(titulo, texto , categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoEstado = [...this.state.notas, novaNota];
  //   this.setState({ notas: novoEstado });
  // }

  // deletarNota(indice) {
  //   let notas = this.state.notas;
  //   notas.splice(indice, 1);
  //   this.setState({ notas: notas });

  // }

  // adicionarCategoria(categoria) {
  //   this.setState({
  //     categorias: [...this.state.categorias, categoria]
  //   })
  // }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
