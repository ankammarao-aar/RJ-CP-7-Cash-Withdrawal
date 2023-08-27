import './index.css'

const DenominationItem = props => {
  const {denominations, updateBalance} = props
  const {value} = denominations

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
