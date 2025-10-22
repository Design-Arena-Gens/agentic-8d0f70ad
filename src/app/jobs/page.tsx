import JobCard from '@/components/JobCard';
import { Job } from '@/types';

const jobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Full-time',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Full-time',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Full-time',
  },
];

export default function Jobs() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Jobs</h1>
      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
