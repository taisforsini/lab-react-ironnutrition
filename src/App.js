import React from 'react';

import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import foods from './foods.json';

class App extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
    foods: [...foods],
  };

  render() {
    return (
      <div>
        <AddFood />
        {this.state.foods.map((food) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
