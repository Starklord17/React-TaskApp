import PropTypes from 'prop-types';
import {RxCheck} from 'react-icons/rx'


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCheck
        className={className}
        onClick={onClick}
    />
  )
}

CompleteIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export {CompleteIcon}