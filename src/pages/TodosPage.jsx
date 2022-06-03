import React, { useEffect, useState } from "react";
import TodoQuickAddForm from "../components/form/TodoQuickAddForm";
import TodoList from "../components/TodoList";
import TodoService from "../services/todoService";

function TodosPage() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		(async () => {
			const resp = await TodoService.getAll();
			const todos = resp.data;
			setTodos(todos);
		})();
	}, []);

	return (
		<React.Fragment>
			<TodoQuickAddForm />
			<TodoList todos={todos} />
		</React.Fragment>
	);
}

export default TodosPage;
