import React, { Component } from 'react'

export default class App extends Component {
    state={
      name:"sireesha"
    }
  render() {
    return (
      <div>
        <props>{this.state.name}</props>      </div>
    )
  }
}
