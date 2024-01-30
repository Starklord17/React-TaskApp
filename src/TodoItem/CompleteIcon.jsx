// import { TodoIcon } from '../TodoIcon';
// import PropTypes from 'prop-types';
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

export {CompleteIcon}