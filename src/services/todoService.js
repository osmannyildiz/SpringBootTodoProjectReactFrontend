class TodoService {
	static todos = [
		{
			id: 1,
			brief: "Todo One",
			description:
				"This is todo one. Cupcake ipsum dolor sit amet danish chocolate cake fruitcake dessert. Gummies oat cake caramels cookie jelly beans bear claw biscuit fruitcake sweet roll. Carrot cake jelly beans jujubes carrot cake bear claw bonbon apple pie candy sweet.",
			createdAt: "2022-05-28",
			updatedAt: "2022-06-01",
		},
		{
			id: 2,
			brief: "Todo Two",
			description:
				"This is todo two. Bonbon lollipop ice cream ice cream jelly beans soufflé. Bear claw jelly beans cheesecake apple pie cake. Cheesecake dragée jujubes muffin pudding.",
			createdAt: "2022-05-31",
			updatedAt: "2022-06-01",
		},
		{
			id: 3,
			brief: "Todo Three",
			description:
				"This is todo three. Ice cream chocolate cake gummies carrot cake sweet jelly. Bear claw jelly beans pudding cupcake sweet donut dragée. Pie dragée candy biscuit tiramisu.",
			createdAt: "2022-06-03",
			updatedAt: "2022-06-03",
		},
	];

	static async getAll() {
		return { ok: true, data: this.todos };
	}
}

export default TodoService;
