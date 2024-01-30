// import { TodoIcon } from '../TodoIcon';
import PropTypes from 'prop-types';
import {RxCross1} from 'react-icons/rx'

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCross1
        className={className}
        onClick={onClick}
    />
  )
}

DeleteIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export {DeleteIcon}