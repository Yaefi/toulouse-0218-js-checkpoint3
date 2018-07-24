import React, { Component } from 'react'
import Item from './Item'
import './PlayaList.css'
import logo from './mojito.ico'

// const items = [
//   {
//     name: 'Tongs',
//     picture: '/images/tongs.jpg'
//   },
//   {
//     name: 'Ballon de plage',
//     picture: '/images/ballon.jpg'
//   },
//   {
//     name: 'Raquettes de plage',
//     picture: '/images/raquettes.jpg'
//   },
//   {
//     name: 'Bouée grenouille',
//     picture: '/images/bouee-grenouille.jpg'
//   },
// ]

class App extends Component {
  state = {
    items: [],
    addItem: {}
  }

  componentDidMount() {
    fetch('/api/items')
    .then(res => res.json())
    .then(items => this.setState({items: items}))
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    const newItem = {...this.state.addItem}
    newItem[name] = value
    this.setState({addItem: newItem})
  }

  handleSubmit = e => {
    e.preventDefault()
    const newItems = [...this.state.items]
    newItems.push(this.state.addItem)
    this.setState({items: newItems})
    fetch('/api/items', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state.addItem)
    })
    .then(res => res.json())
    .then(item => {
      console.log(item)
})
  }

  render() {
    return (
      <div className="PlayaList">

        <header className="PlayaList-header">
          <img src={logo} className="PlayaList-logo" alt="logo" />
          <h1 className="PlayaList-title">PlayaList</h1>
        </header>

        <div className="PlayaList-list">
          <form onSubmit={this.handleSubmit}>
            <h5>Ajouter un item</h5>
            <div>
              <input name="name" placeholder="Nom" onChange={this.handleChange}/>
              <input name="picture" placeholder="image" onChange={this.handleChange}/>
              <button type="submit">
                <span className="icon-checkmark"></span>
              </button>
            </div>
          </form>
        </div>

        <div className="PlayaList-list">
          <Item itemList={this.state.items} />
        </div>

      </div>
    )
  }
}

export default App
