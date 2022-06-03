import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo, idx) => (
				<TodoListItem todo={todo} key={idx} />
			))}
		</ul>
	);
}

export default TodoList;
