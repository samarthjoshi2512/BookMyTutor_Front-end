import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ReleatedTeachers = ({ subject, teacId }) => {
  const { teachers } = useContext(AppContext);
  const navigate = useNavigate();
  const [relTeac, setRelTeac] = useState([]);

  useEffect(() => {
    if (teachers.length > 0 && subject) {
      const teacherData = teachers.filter(
        (teac) => teac.subject === subject && teac._id !== teacId
      );
      setRelTeac(teacherData);
    }
  }, [teachers, subject, teacId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Teachers</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply Browse through our extensive list of trusted teachers.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relTeac.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/schedule/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50" src={item.image} alt={item.name} />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  item.available ? "text-green-500" : "text-gray-500"
                } `}
              >
                <p
                  className={`w-2 h-2 ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }  rounded-full`}
                ></p>
                <p></p> {item.available ? "Available" : "Not Available"}
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm ">{item.subject}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/teachers");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default ReleatedTeachers;
