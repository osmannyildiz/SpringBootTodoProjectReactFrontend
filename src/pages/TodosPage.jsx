import React, { useContext } from "react";
import TodoQuickAddForm from "../components/form/TodoQuickAddForm";
import TodoList from "../components/TodoList";
import { TodosContext } from "../contexts";

function TodosPage() {
	const { todos } = useContext(TodosContext);

	return (
		<React.Fragment>
			<TodoQuickAddForm />
			<TodoList todos={todos} />
		</React.Fragment>
	);
}

export default TodosPage;
