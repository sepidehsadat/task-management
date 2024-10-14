import React from 'react'
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

export default function TaskAddPage()
{
	return (
		<div className='container'>
			<h3 className='mb-3'>Add Task</h3>
			<Form>
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
				<Form.Item>
					<Button type="primary" htmlType="submit">Add Task</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
