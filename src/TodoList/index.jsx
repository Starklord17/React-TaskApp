import "./TodoList.css";
import PropTypes from 'prop-types';

function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoList };
