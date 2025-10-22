import { Job } from '@/types';

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
      <p className="mt-2 text-gray-600">{job.company}</p>
      <p className="mt-2 text-gray-600">{job.location}</p>
      <p className="mt-4 text-gray-800">{job.description}</p>
      <div className="mt-4">
        <span className="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
          {job.type}
        </span>
      </div>
      <div className="mt-4">
        <a href={`/jobs/${job.id}`} className="font-medium text-blue-500 hover:underline">
          View Details
        </a>
      </div>
    </div>
  );
}
