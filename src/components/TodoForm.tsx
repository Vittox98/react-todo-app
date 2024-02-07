import { FormEvent, useState } from 'react';
import { Todo } from '../utils/customTypes';

type TodoFormProps = {
	addTodo: (todo: Todo) => void;
	filterTodos: (filterValue: string) => void;
};

type FormDataProps = {
	label: string;
};

export function TodoForm({ addTodo, filterTodos }: TodoFormProps) {
	const [formData, setFormData] = useState<FormDataProps>({
		label: '',
	});

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		addTodo({
			label: formData.label,
			isCompleted: false,
		});
		setFormData({
			label: '',
		});
	}

	function handleInputChange(e: FormEvent<HTMLInputElement>) {
		setFormData({
			label: e.currentTarget.value,
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='todo'
				id='todo'
				onChange={handleInputChange}
				value={formData.label}
				className='block w-full mb-4 text-2xl p-2 text-slate-50 bg-transparent border-b-2 focus:outline-none'
				placeholder='Insert a todo'
			/>
			<div className='flex gap-2'>
				<button
					type='submit'
					className='block w-full text-2xl text-slate-50 p-4 rounded-md hover:bg-slate-800 transition-all hover:transition-all'>
					Add todo
				</button>
				<select
					name='filter'
					id='filter'
					className='block w-full text-2xl text-center text-slate-50 bg-transparent p-4 rounded-md hover:bg-slate-800 transition-all hover:transition-all *:bg-slate-950'
					onChange={(e: FormEvent<HTMLSelectElement>) =>
						filterTodos(e.currentTarget.value)
					}>
					<option value='' selected>
						All
					</option>
					<option value='1'>Completed</option>
					<option value='0'>Not completed</option>
				</select>
			</div>
		</form>
	);
}
