
export interface TaskRow
{
	key: string;
	title: string;
	description: string;
	priority: 'Low' | 'Medium' | 'High';
	isCompleted: boolean;
}