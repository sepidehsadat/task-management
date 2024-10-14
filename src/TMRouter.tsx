import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TMRoutes } from './TMRoutes';
import TaskListPage from './pages/TaskListPage';
import TaskAddPage from './pages/TaskAddPage';
import { TaskProvider } from './TaskContext';

export default function TMRouter()
{
	return (
		<TaskProvider>
			<Router>
				<Routes>
					<Route path={TMRoutes.TaskList} element={<TaskListPage />} />
					<Route path={TMRoutes.TaskAdd} element={<TaskAddPage />} />
				</Routes>
			</Router>
		</TaskProvider>
	)
}
