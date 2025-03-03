import PropTypes from "prop-types";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
    </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  toggleTodo: PropTypes.any.isRequired,
  deleteTodo: PropTypes.any.isRequired,
}