import { TodoItem } from './TodoItem';
import { RawTodo } from '../utils/customTypes';

type TodoListProps = {
	todos: RawTodo[];
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
};

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
	return (
		<div className='my-4 flex flex-col gap-2'>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
					{...todo}
				/>
			))}
		</div>
	);
}
