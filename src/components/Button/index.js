import PropTypes from "prop-types";

import "./styles.scss"

const index = ({ color, onClick, text }) => {

  return (
      <button 
        className="button"
        style={{ backgroundColor: color }}
        onClick={onClick}
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
  onClick: PropTypes.func
}

export default index;