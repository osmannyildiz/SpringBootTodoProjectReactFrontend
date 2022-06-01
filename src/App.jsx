import "./App.css";
import MainLayout from "./layouts/MainLayout";
import TodosPage from "./pages/TodosPage";

function App() {
	return (
		<MainLayout>
			{/* TODO Add routing */}
			<TodosPage />
		</MainLayout>
	);
}

export default App;
