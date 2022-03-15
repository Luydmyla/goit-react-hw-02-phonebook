import { Component } from 'react';
// import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleFilterChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <label className="Filter__label">
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="Filter__input"
        />
      </label>
    );
  }
}

export default Filter;
