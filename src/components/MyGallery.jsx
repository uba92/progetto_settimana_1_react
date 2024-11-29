import { Component } from 'react'
import LOTRGallery from './LOTRGallery'
import BTFGallery from './BTFGallery'
import SWGallery from './SWGallery'

class MyGallery extends Component {
  state = {
    films1: [],
    films2: [],
    films3: [],
  }

  getFilms1 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=The Lord of the Rings')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)
        this.setState({
          films1: arrayOfFilms.Search,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  getFilms2 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=Star Wars')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)
        this.setState({
          films2: arrayOfFilms.Search,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  getFilms3 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=Back to Future')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)
        this.setState({
          films3: arrayOfFilms.Search,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  // this.getFilms2()
  // this.getFilms3()
  componentDidMount() {
    this.getFilms1()
    this.getFilms2()
    this.getFilms3()
  }

  render() {
    return (
      <>
        <div className='my-5 '>
          <h3>LOTR Saga</h3>
          <LOTRGallery filmList={this.state.films1} />
        </div>
        <div>
          <h3 className='my-5'>Star wars Saga</h3>
          <SWGallery filmList={this.state.films2} />
        </div>
        <div>
          <h3 className='my-5'>BTF Saga</h3>
          <BTFGallery filmList={this.state.films3} />
        </div>
      </>
    )
  }
}

export default MyGallery
