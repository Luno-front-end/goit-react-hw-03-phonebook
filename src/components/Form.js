import React, { Component } from 'react';
import shortid from 'shortid';
import s from './PhoneBock.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  InputValues = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    const lengthInputNemeChech = this.state.name.length;
    const lengthInputNumberChech = this.state.number.length;
    e.preventDefault();
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Введіть ім"я більше 1-го символа і не більше 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert('Введіть номер більше 7-ми цифр і не більше 10');
      return;
    }
    // if (this.checkValue())

    const checkName = this.props.contactList({ name: this.state.name });
    if (checkName) {
      alert('Це ім"я вже існує');

      return;
    }

    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetInputValues();
  };

  // checkValue = () => {

  // };

  resetInputValues = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const idName = shortid.generate();
    const idNumber = shortid.generate();
    //   const  = onAlert;
    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={idName} className={s.labelName}>
          Им'я
        </label>
        <input
          id={idName}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <label htmlFor={idNumber} className={s.labelNumber}>
          Номер
        </label>
        <input
          id={idNumber}
          placeholder="(0xx) xxx-xx-xx"
          type="tel"
          pattern="^[ 0-9]+$"
          name="number"
          value={this.state.number}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <button className={s.btnForm} type="submite">
          Додати контакт
        </button>
      </form>
    );
  }
}
