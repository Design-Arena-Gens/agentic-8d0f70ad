import { Applicant } from '@/types';

const applicants: Applicant[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    resume: '/path/to/resume.pdf',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    resume: '/path/to/resume.pdf',
  },
];

export default function Applicants({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Applicants for Software Engineer</h1>
      <div className="mt-8">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Resume</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td className="p-4 border-b">{applicant.name}</td>
                <td className="p-4 border-b">{applicant.email}</td>
                <td className="p-4 border-b">
                  <a href={applicant.resume} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    View Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
