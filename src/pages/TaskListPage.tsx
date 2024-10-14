import React, { useState } from 'react'
import { Table, Tag } from 'antd';
import { TaskRow } from '../rows/TaskRow';

export default function TaskListPage()
{
	const [tasks, setTasks] = useState<TaskRow[]>([
		{ title: 'test1', description: 'test1', priority: "Low", isCompleted: true },
		{ title: 'test2', description: 'test2', priority: "Low", isCompleted: false },
	]);
	const columns = [
		{ title: 'Title', dataIndex: 'title', key: 'title' },
		{ title: 'Description', dataIndex: 'description', key: 'description' },
		{ title: 'Priority', dataIndex: 'priority', key: 'priority' },
		{
			title: 'Status',
			dataIndex: 'isCompleted',
			key: 'isCompleted',
			render: (isCompleted: boolean) => (
				<Tag color={isCompleted ? 'green' : 'red'}>
					{isCompleted ? 'Completed' : 'Incomplete'}
				</Tag>
			),
		},
	];
	return (
		<Table columns={columns} dataSource={tasks} />
	)
}
