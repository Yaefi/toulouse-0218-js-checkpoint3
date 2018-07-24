import React from 'react'

class Item extends React.Component {

  render() {
    return (
      <div>
        {this.props.itemList.map((item, k) => (
          <div
            key={k}
            className="PlayaList-item"
          >
            <img src={item.picture} alt={item.name} />
            <div>{item.name}</div>
            {/*<span className="icon-cancel-circle"></span>*/}
          </div>
        ))}
      </div>
    )
  }
}

export default Item
