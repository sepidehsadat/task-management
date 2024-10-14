import React, { useState ,useMemo } from 'react'
import { Table, Tag, Select } from 'antd';
import { TaskRow } from '../rows/TaskRow';

const { Option } = Select;

export default function TaskListPage()
{
	const [tasks, setTasks] = useState<TaskRow[]>([
		{ title: 'test1', description: 'test1', priority: "Low", isCompleted: true },
		{ title: 'test2', description: 'test2', priority: "Low", isCompleted: false },
	]);

	const [filterStatus, setFilterStatus] = useState<'all' | 'completed'>('all');

	const handleStatusFilterChange = (value: 'all' | 'completed') =>
	{
		setFilterStatus(value);
	};

	const filteredStatusTasks = useMemo(() =>
	{
		if (filterStatus === 'all') return tasks;
		return tasks.filter(task => task.isCompleted === true);
	}, [tasks, filterStatus]);


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
		<>
			<Select defaultValue="all" style={{ width: 200, marginBottom: 20 }} onChange={handleStatusFilterChange}>
				<Option value="all">All</Option>
				<Option value="completed">Show Completed Tasks</Option>
			</Select>
			<Select defaultValue="all" style={{ width: 200, marginBottom: 20 }} onChange={()=>{}}>
				<Option value="all">All Priorities</Option>
				<Option value="Low">Low Priority</Option>
				<Option value="Medium">Medium Priority</Option>
				<Option value="High">High Priority</Option>
			</Select>
			<Table columns={columns} dataSource={filteredStatusTasks}  />
		</>
	)
}
