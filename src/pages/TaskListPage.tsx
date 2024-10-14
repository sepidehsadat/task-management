import React, { useState, useMemo, useContext } from 'react'
import { Table, Tag, Select, Input ,Button } from 'antd';
import { TaskRow } from '../rows/TaskRow';
import { TaskContext } from '../TaskContext';
import { Link } from 'react-router-dom';
import { TMRoutes } from '../TMRoutes';

const { Option } = Select;

export default function TaskListPage()
{
	const { tasks } = useContext(TaskContext)!;
	const [filterStatus, setFilterStatus] = useState<'all' | 'completed'>('all');
	const [filterPriority, setFilterPriority] = useState<'all' | 'Low' | 'Medium' | 'High'>('all');
	const [searchTitle, setSearchTitle] = useState('');

	const handleStatusFilterChange = (value: 'all' | 'completed') =>
	{
		setFilterStatus(value);
	};
	const handlePriorityFilterChange = (value: 'all' | 'Low' | 'Medium' | 'High') =>
	{
		setFilterPriority(value);
	};
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
	{
		setSearchTitle(e.target.value);
	};

	const filteredTasks = useMemo(() =>
	{
		let filtered = tasks;

		if (filterStatus === 'completed')
		{
			filtered = filtered.filter(task => task.isCompleted);
		}

		if (filterPriority !== 'all')
		{
			filtered = filtered.filter(task => task.priority === filterPriority);
		}

		if (searchTitle)
		{
			filtered = filtered.filter(task =>
				task.title.toLowerCase().includes(searchTitle.toLowerCase())
			);
		}

		return filtered;
	}, [tasks, filterStatus, filterPriority, searchTitle]);


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
				<Option value="all">All Status</Option>
				<Option value="completed">Show Completed Tasks</Option>
			</Select>
			<Select defaultValue="all" style={{ width: 200, marginBottom: 20 }} onChange={handlePriorityFilterChange}>
				<Option value="all">All Priorities</Option>
				<Option value="Low">Low Priority</Option>
				<Option value="Medium">Medium Priority</Option>
				<Option value="High">High Priority</Option>
			</Select>
			<Input
				placeholder="Search by title"
				value={searchTitle}
				onChange={handleSearchChange}
				style={{ width: 300, marginBottom: 20 }}
			/>
			<Link to={TMRoutes.TaskAdd}>
				<Button type="primary" size="large" style={{ width: '100%' }}>
					Add New Task
				</Button>
			</Link>
			<Table columns={columns} dataSource={filteredTasks} />
		</>
	)
}
