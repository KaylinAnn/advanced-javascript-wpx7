import React, { Component } from 'react'
import axios from 'axios'

const fakeAxios = {
  get: function (num) {
    return new Promise((resolve, reject) => {
      // setTimeout(() =>
      //   resolve({
      //     data: num
      //   })
      //   , 2000);
      setTimeout(() => reject('Internet is down'))
    })
  }
}

export default class AsyncDemo extends Component {
  state = {
    message: null
  }

  // componentDidMount() {
  //   fakeAxios.get().then(res => {
  //     this.setState({
  //       message: `data was ${res.data}`
  //     })
  //   }).catch(error => {
  //     this.setState({
  //       message: error
  //     })
  //   })
  // }


  async componentDidMount() {
    try {
      let response = await fakeAxios.get(9)
      this.setState({ message: `data was ${response.data}` })
      response = await fakeAxios.get(10)
      this.setState({ message: this.state.message + ` and data was ${response.data}` })
    } catch (error) {
      this.setState({ message: error })
    }

  }

  // getData(){
  //   return 'hello'
  // }

  // doThing(){
  //   const myString = this.getData()
  // }

  render() {
    return (
      <div>
        <h1>AsyncDemo</h1>
        <div>{this.state.message}</div>
      </div>
    )
  }
}
