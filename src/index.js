import React, { PureComponent } from 'react'

export default class Preload extends PureComponent {
  state = {
    imgsLoaded: false
  }

  static defaultProps = {
    images: [],
    children: () => {},
    onLoad: () => {}
  }

  async componentDidMount () {
    await this.preloadImages()
  }

  preloadImages = () => {
    Promise.all([
      this.props.images.map(this.loadImage)
    ]).then(() => {
      this.setState({ imgsLoaded: true })
      this.props.onLoad()
    })
  }

  loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')

      img.onload = () => resolve()
      img.onerror = () => reject()

      img.src = src
    })
  }

  render () {
    return this.props.children(this.state.imgsLoaded)
  }
}
