import React from 'react'
const Item = (props) => {
    return (<div className='item'><h3>{props.brand}</h3> <div className='notification-count'>{props.count}</div></div>)
}
export default Item;