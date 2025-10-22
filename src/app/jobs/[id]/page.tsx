import { Job } from '@/types';

const job: Job = {
  id: '1',
  title: 'Software Engineer',
  company: 'Google',
  location: 'Mountain View, CA',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquet. Sed vitae nisi eget nunc ultricies aliquet. Sed vitae nisi eget nunc ultricies aliquet. Sed vitae nisi eget nunc ultricies aliquet.',
  type: 'Full-time',
};

export default function JobDetails({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
      <p className="mt-2 text-xl text-gray-600">{job.company}</p>
      <p className="mt-2 text-lg text-gray-600">{job.location}</p>
      <div className="mt-4">
        <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
          {job.type}
        </span>
      </div>
      <p className="mt-6 text-gray-800">{job.description}</p>
      <div className="mt-8">
        <button className="px-6 py-3 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
}
