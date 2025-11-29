import axios from 'axios';
import { fetchJobs } from '../api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchJobs', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and adapts jobs successfully', async () => {
        const mockPosts = [
            { id: 1, title: 'Post 1', body: 'Body 1' },
            { id: 2, title: 'Post 2', body: 'Body 2' },
        ];
        mockedAxios.get.mockResolvedValue({ data: mockPosts });

        const jobs = await fetchJobs();

        expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
        expect(jobs).toHaveLength(2);
        expect(jobs[0]).toEqual({
            id: 1,
            title: 'Post 1',
            company: 'Company 1',
            location: 'New York',
            category: 'Tech',
            experience: 'Entry',
            description: 'Body 1',
        });
    });

    it('returns mock data on API failure', async () => {
        mockedAxios.get.mockRejectedValue(new Error('API Error'));

        const jobs = await fetchJobs();

        expect(jobs).toHaveLength(2);
        expect(jobs[0].title).toBe('Software Engineer');
        expect(jobs[1].title).toBe('Data Analyst');
    });
});