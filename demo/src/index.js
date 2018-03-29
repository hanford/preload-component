import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import Preload from '../../src'

const img1 = 'https://placeimg.com/250/250/any'
const img2 = 'https://placeimg.com/251/251/any'
const img3 = 'https://placeimg.com/249/249/any'
const img4 = 'https://placeimg.com/249/251/any'

class App extends Component {
  render() {
    return (
      <Preload images={[img1, img2, img3, img4]}>
        {loaded => {
          return loaded ? (<div><img src={img1} /><img src={img2} /><img src={img3} /><img src={img4} /></div>) : null
        }}
      </Preload>
    )
  }
}

render(<App />, document.getElementById('root'))
