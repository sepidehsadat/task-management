
export interface TaskRow
{
	title: string;
	description: string;
	priority: 'Low' | 'Medium' | 'High';
	isCompleted: boolean;
}