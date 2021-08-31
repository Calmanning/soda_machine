import PropTypes from "prop-types";

import "./styles.scss"

const index = ({ color, onClick, text, disabled }) => {

  return (
      <button 
        className="button"
        style={{ backgroundColor: color }}
        onClick={onClick}
        disabled={disabled}
        >
        {text}
      </button>
  )
}

index.defaultProps = {
  color: "steelBlue"
}

index.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default index;