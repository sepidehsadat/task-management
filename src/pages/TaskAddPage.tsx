import React, { useState } from 'react';
import { TaskRow } from "../rows/TaskRow";
import { Form, Input, Button, Select, Checkbox } from 'antd';
const { Option } = Select;

export default function TaskAddPage()
{
	const [task, setTask] = useState<TaskRow | null>(null);

	const addTask = (values: TaskRow) =>
	{
		setTask(values);
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
			<Form onFinish={addTask}>
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
			</Form>
		</div>
	)
}
