import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dish) => this.onDishSelect(dish)}
        />
        <Dishdetail dish={this.state.selectedDish} />
        <Footer />
      </div>
    );
  }
}

export default Main;
