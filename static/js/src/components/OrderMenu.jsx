import React from 'react';

import { getAllItems } from '../api/utils.js';

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    getAllItems().then((items) => {
      this.setState({ items: items });
    });
  }

  render() {
    return (
      <div className="MenuItems">
        <ul className="MenuItems-list">
          {this.state.items.map(function(item) {
            return ([
              <li key={item.id}>
                <div className="MenuItem-copy">
                  <p className="MenuItem-name">{item.name}</p>
                  <p className="MenuItem-description">{item.description}</p>
                </div>
                <p className="MenuItem-price">{item.price}</p>
                <a className="MenuItem-add" onClick="">+</a>
              </li>
            ]);
          })}
        </ul>
      </div>
    );
  }
};

class YourOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  render() {
    return (
      <div className="YourOrder">
        <h2>Your Order</h2>
        <ul className="YourOrder-list">

        </ul>
      </div>
    )
  }
}

export default class OrderMenu extends React.Component {
  render() {
    return (
      <div className="OrderMenu">
        <MenuItems />
      </div>
    );
  }
};
