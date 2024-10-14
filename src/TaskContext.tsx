// TaskContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { TaskRow } from '../src/rows/TaskRow';

interface TaskContextType
{
	tasks: TaskRow[];
	addTask: (task: TaskRow) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) =>
{
	const [tasks, setTasks] = useState<TaskRow[]>([
		{
			key: "1",
			title: "header",
			description: "header",
			priority: 'High',
			isCompleted: true
		},
		{
			key: "2",
			title: "footer",
			description: "footer",
			priority: 'Low',
			isCompleted: false
		},
		{
			key: "3",
			title: "banner",
			description: "banner",
			priority: 'Medium',
			isCompleted: false
		}
	]);

	const addTask = (task: TaskRow) =>
	{
		const updatedTasks = [...tasks, task];
		setTasks(updatedTasks);
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask }}>
			{children}
		</TaskContext.Provider>
	);
};
