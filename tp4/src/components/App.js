import React, { Component } from 'react';
import Formulir from './Formulir';
import { Table } from './Table';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      tglLahir: '',
      jnsKelamin: '',
      hobi: '',
      agama: '',
      pesan: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    const formulir = document.querySelector('#form-biodata');

    const hobi1 = formulir.elements['hobi'];
    let hobi = '';
    for (let i = 0; i < hobi1.length; i++) {
      if (hobi1[i].checked) {
        if (hobi.length > 0) {
          hobi += ', ';
        }
        hobi += hobi1[i].value;
      }
      console.log(hobi);
    }

    this.setState({ hobi: hobi });
  };

  handleSubmit(e) {
    e.preventDefault();
    const table = document.querySelector('.table-result');

    table.classList.remove('d-none');
  }

  render() {
    return (
      <div>
        <Formulir
          {...this.state}
          handleChange={this.handleChange}
          handleCheckbox={this.handleCheckbox}
          handleSubmit={this.handleSubmit}
        />
        <Table {...this.state} />
      </div>
    );
  }
}
