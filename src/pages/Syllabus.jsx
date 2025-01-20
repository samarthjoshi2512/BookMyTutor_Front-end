import { Link} from 'react-router-dom';

const Syllabus = () => {

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100">
      <table className="max-w-md min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden text-center bg-white">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="border border-gray-300 p-4 text-center">Class</th>
            <th className="border border-gray-300 p-4 text-center">CBSE</th>
          </tr>
        </thead>
        <tbody>
          <tr key={0} className="hover:bg-gray-100 transition duration-200">
            <td className="border border-gray-300 p-4 text-center font-semibold">Class 1 to 8</td>
            <td className="border border-gray-300 p-4 text-center">
              <div className="space-y-1 text-left">
                <Link to="https://ncert.nic.in/pdf/syllabus/Preliams.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline flex justify-center">
                  Link
                </Link>
              </div>
            </td>
          </tr>
          <tr key={1} className="hover:bg-gray-100 transition duration-200">
            <td className="border border-gray-300 p-4 text-center font-semibold">Class 9 and 10</td>
            <td className="border border-gray-300 p-4 text-center">
              <div className="space-y-1 text-left">
                <Link to="https://ncert.nic.in/pdf/syllabus/Preliams2.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline flex justify-center">Link</Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Syllabus








