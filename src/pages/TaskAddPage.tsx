import React, { useContext } from 'react';
import { TaskRow } from "../rows/TaskRow";
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { TaskContext } from '../TaskContext';
import { v4 as uuidv4 } from 'uuid'; 
import { Link } from 'react-router-dom';
import { TMRoutes } from '../TMRoutes';
const { Option } = Select;

export default function TaskAddPage()
{
	const { addTask } = useContext(TaskContext)!;

	const addTaskHandler = (values: TaskRow) =>
	{
		const { key, ...restValues } = values; 
		const newTask: TaskRow = {
			key: uuidv4(), 
			...restValues,
		};
		addTask(newTask);
		alert(`
            Task Title: ${values.title}
            Task Description: ${values.description || 'No description'}
            Task Priority: ${values.priority}
            Task Completed: ${values.isCompleted ? 'Yes' : 'No'}
        `);
	};

	return (
		<div className='container'>
			<h3 className='mb-3'>Add Task</h3>
			<Form onFinish={addTaskHandler}>
				<Form.Item name="title" rules={[{ required: true, message: 'Please input the title' }]}>
					<Input placeholder="Title" />
				</Form.Item>
				<Form.Item name="description">
					<Input placeholder="Description" />
				</Form.Item>
				<Form.Item name="priority" rules={[{ required: true, message: 'Please select priority!' }]}>
					<Select placeholder="Select priority">
						<Option value="Low">Low</Option>
						<Option value="Medium">Medium</Option>
						<Option value="High">High</Option>
					</Select>
				</Form.Item>
				<Form.Item name="isCompleted" valuePropName="checked">
					<Checkbox>Task Completed</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">Add Task</Button>
				</Form.Item>
				<Link to={TMRoutes.TaskList}>
					<Button type="primary" size="large" style={{ width: '100%' }}>
						View Tast List Page
					</Button>
				</Link>
			</Form>
		</div>
	);
}
