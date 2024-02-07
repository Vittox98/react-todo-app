import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Todo, RawTodo } from './utils/customTypes';

export default function App() {
	const [todos, setTodos] = useLocalStorage<RawTodo[]>('TODOS', []);
	const [filteredTodos, setFilteredTodos] = useState<RawTodo[]>(todos);

	useEffect(() => {
		setFilteredTodos(todos);
	}, [todos]);

	function addTodo(todo: Todo) {
		if (todo.label === '') return;
		setTodos(prevTodos => {
			return [...prevTodos, { ...todo, id: uuidV4() }];
		});
	}

	function toggleTodo(id: string) {
		setTodos(prevTodos => {
			return prevTodos.map(prevTodo => {
				if (prevTodo.id === id)
					return { ...prevTodo, isCompleted: !prevTodo.isCompleted };
				return { ...prevTodo };
			});
		});
	}

	function deleteTodo(id: string) {
		setTodos(prevTodos => {
			return prevTodos.filter(prevTodo => prevTodo.id !== id);
		});
	}

	function filterTodos(filterValue: string) {
		switch (filterValue) {
			case '1':
				setFilteredTodos(todos.filter(todo => todo.isCompleted === true));
				break;
			case '0':
				setFilteredTodos(todos.filter(todo => todo.isCompleted === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}

	return (
		<div className='max-w-[90%] md:max-w-lg mx-auto my-8'>
			<h1 className='text-4xl mb-4 text-slate-50'>Todos</h1>
			<TodoForm addTodo={addTodo} filterTodos={filterTodos} />
			<TodoList
				todos={filteredTodos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
}
