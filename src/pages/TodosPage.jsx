import React from "react";
import TodoQuickAddForm from "../components/form/TodoQuickAddForm";
import TodoList from "../components/TodoList";

function TodosPage() {
	return (
		<React.Fragment>
			<TodoQuickAddForm />
			<TodoList />
		</React.Fragment>
	);
}

export default TodosPage;
