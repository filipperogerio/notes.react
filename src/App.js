import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/index.css';
import './assets/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    }

  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoEstado = [...this.state.notas, novaNota];
    this.setState({ notas: novoEstado });
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
}

export default App;
