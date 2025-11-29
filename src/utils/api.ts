import axios from 'axios';
import { Job } from '../types/job';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchJobs = async (): Promise<Job[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        const posts = response.data;

        // Adapt posts to Job structure
        return posts.map((post: any, index: number) => ({
            id: post.id,
            title: post.title,
            company: `Company ${post.id}`,
            location: ['New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'][index % 5],
            category: ['Tech', 'Finance', 'Healthcare', 'Education', 'Marketing'][index % 5],
            experience: ['Entry', 'Mid', 'Senior', 'Lead', 'Executive'][index % 5],
            description: post.body,
        }));
    } catch (error) {
        console.error('Failed to fetch jobs from API, using mock data:', error);
        // Fallback to mock data
        return [
            {
                id: 1,
                title: 'Software Engineer',
                company: 'Tech Corp',
                location: 'New York',
                category: 'Tech',
                experience: 'Mid',
                description: 'Develop and maintain software applications.',
            },
            {
                id: 2,
                title: 'Data Analyst',
                company: 'Data Inc',
                location: 'San Francisco',
                category: 'Finance',
                experience: 'Entry',
                description: 'Analyze data to provide insights.',
            },
        ];
    }
};