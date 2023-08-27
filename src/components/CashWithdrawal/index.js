// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstLetter = name.slice(0, 1)
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="main-card">
          <div className="name-card">
            <p className="logo">{firstLetter}</p>
            <h className="user-name">{name}</h>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {balance}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div className="denomination-card">
            <p className="amount">Withdraw</p>
            <p className="balance">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  denominations={each}
                  key={each.id}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
