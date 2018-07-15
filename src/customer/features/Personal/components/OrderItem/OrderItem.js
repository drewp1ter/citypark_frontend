import React from 'react'
import PropTypes from 'prop-types'

class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDishes: false
    }
  }

  dishesList = () => {
    const { order } = this.props
    return order ?
      <ol>
        {
          order.dishes.map(dish => <li>{dish.title} - {dish.count}</li>)
        }
      </ol>
    : null
  }

  handleClick = () =>
    this.setState(prev => ({
      showDishes: !prev.showDishes
    }))

  render = () => {
    const { order } = this.props
    const { showDishes } = this.state
    return (
      <div className="order-item" onClick={this.handleClick}>
        <div className="ord-header">
          <h3>Дата заказа {order.created_at}</h3>
          <span className="bsm">
            <span className="bsm_n">{order.freezed_amount}</span>
            <span style={{fontSize: "30px"}}>₽</span>
          </span>
        </div>
        <div className="green">
          Оформлен
        </div>
        <div>
          <a>заказ #{order.id}</a>
        </div>
        {
          showDishes ?
            <div className="order-dish-list">
              { this.dishesList() }
              <div className="z_btn">Повторить заказ</div>
            </div>
          : null
        }
      </div>
    )
  }
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    status: PropTypes.string,
    freezed_amount: PropTypes.number,
    dishes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      count: PropTypes.number
    }))
  })
}

export default OrderItem