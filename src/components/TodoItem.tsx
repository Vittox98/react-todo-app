import { RawTodo } from '../utils/customTypes';

type TodoItemProps = {
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
} & RawTodo;

export function TodoItem({
	label,
	isCompleted,
	id,
	toggleTodo,
	deleteTodo,
}: TodoItemProps) {
	return (
		<div className='bg-slate-900 p-4 rounded-lg flex items-center gap-4'>
			<p
				className={
					+isCompleted
						? 'text-slate-500 line-through text-2xl'
						: 'text-slate-50 text-2xl'
				}>
				{label}
			</p>
			<button
				className='ms-auto p-3 rounded-lg hover:bg-slate-800'
				onClick={() => toggleTodo(id)}>
				&#10004;
			</button>
			<button
				className='p-3 rounded-lg hover:bg-slate-800'
				onClick={() => deleteTodo(id)}>
				&#x274c;
			</button>
		</div>
	);
}
