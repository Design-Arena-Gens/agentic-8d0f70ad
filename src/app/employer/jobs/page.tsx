import { Job } from '@/types';
import Link from 'next/link';

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
];

export default function PostedJobs() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Posted Jobs</h1>
        <Link href="/employer/post-job" className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Post a Job
        </Link>
      </div>
      <div className="mt-8">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Company</th>
              <th className="p-4 border-b">Location</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="p-4 border-b">{job.title}</td>
                <td className="p-4 border-b">{job.company}</td>
                <td className="p-4 border-b">{job.location}</td>
                <td className="p-4 border-b">
                  <Link href={`/employer/jobs/${job.id}/applicants`} className="text-blue-500 hover:underline">
                    View Applicants
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
