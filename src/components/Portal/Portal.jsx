import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }


  componentDidMount() {
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}