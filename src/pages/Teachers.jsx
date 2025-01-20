import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Teachers = () => {
  const { subject } = useParams();
  const [filterTeac, setFilterTeac] = useState([]);
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { teachers } = useContext(AppContext);

  const applyFilter = () => {
    if(subject) {
      setFilterTeac(teachers.filter(teac => teac.subject === subject))
    }else{
      setFilterTeac(teachers)
    }
  }

  useEffect(() => {
    applyFilter()
  },[teachers,subject])

  return (
    <div>
      <p className="text-gray-600">BookMyTutor allows you to browse tutors by their specific subject.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' :''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex' }`}>
          <p onClick={() => subject === 'Mathematics' ? navigate('/teachers') : navigate('/teachers/Mathematics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${subject === "Mathematics" ? "bg-indigo-100 text-black" : ""}`}>Mathematics</p>
          <p onClick={() => subject === 'Social Science' ? navigate('/teachers') : navigate('/teachers/Social Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${subject === "Social Science" ? "bg-indigo-100 text-black" : ""}`}>Social Science</p>
          <p onClick={() => subject === 'Science' ? navigate('/teachers') : navigate('/teachers/Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${subject === "Science" ? "bg-indigo-100 text-black" : ""}`}>Science</p>
          <p onClick={() => subject === 'Kannada' ? navigate('/teachers') : navigate('/teachers/Kannada')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${subject === "Kannada" ? "bg-indigo-100 text-black" : ""}`}>Kannada</p>
          <p onClick={() => subject === 'Hindi' ? navigate('/teachers') : navigate('/teachers/Hindi')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${subject === "Hindi" ? "bg-indigo-100 text-black" : ""}`}>Hindi</p>
          <p onClick={() => subject === 'English' ? navigate('/teachers') : navigate('/teachers/English')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${subject === "English" ? "bg-indigo-100 text-black" : ""}`}>English</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
         {
          filterTeac.map((item,index)=>(
            <div onClick={()=>navigate(`/schedule/${item._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
              <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500' } `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500' }  rounded-full`}></p>
                <p></p> {item.available ? 'Available' : 'Not Available'}
              </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm ">{item.subject}</p>
              </div>
            </div>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default Teachers;
