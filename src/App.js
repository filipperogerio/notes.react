import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/index.css';
import './assets/App.css'
import { nativeTouchData } from 'react-dom/test-utils';
import { ListaDeCategorias } from './components/ListaDeCategorias';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    }

  }

  criarNota(titulo, texto , categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoEstado = [...this.state.notas, novaNota];
    this.setState({ notas: novoEstado });
  }

  deletarNota(indice) {
    let notas = this.state.notas;
    notas.splice(indice, 1);
    this.setState({ notas: notas });

  }

  adicionarCategoria(categoria) {
    this.setState({
      categorias: [...this.state.categorias, categoria]
    })
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
