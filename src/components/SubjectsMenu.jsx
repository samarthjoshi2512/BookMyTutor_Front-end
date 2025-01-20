import { Link } from 'react-router-dom'
import { subjectsData } from '../assets/assets'

const SubjectsMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="subject">
      <h1 className='text-3xl font-medium'>Find by Subjects</h1>
      <p className='sm:w-1/3 text-center text-sm'>Easily explore our comprehensive selection of reliable tutors, and book your session hassle-free.</p>
      {/* Main container for horizontal scrolling */}
      <div className='flex overflow-x-auto w-full sm:justify-center gap-4 pt-5 scrollbar-hide'>
        {subjectsData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/teachers/${item.subject}`}>
            <img  src={item.image} alt="" className="rounded-full w-24 h-24 object-cover mb-2" />
            <p className="mt-2 text-center">{item.subject}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SubjectsMenu
