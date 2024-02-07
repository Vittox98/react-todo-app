export type Todo = {
	label: string;
	isCompleted: boolean;
};

export type RawTodo = {
	id: string;
} & Todo;
