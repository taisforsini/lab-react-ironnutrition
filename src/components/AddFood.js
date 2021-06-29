import React from 'react';

class AddFood extends React.Component {
  state = {
    newFood: {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    },
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="control" onSubmit={this.handleSubmit}>
          <input
            className="input is-hovered   newfood-input"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="number"
            placeholder="Calories"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="text"
            placeholder="Image"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <button className="button is-info">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
