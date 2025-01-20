import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import ReleatedTeachers from "../components/ReleatedTeachers";
import { toast } from "react-toastify";
import axios from "axios";

const Schedule = () => {
  const { teacId } = useParams();
  const { teachers, currencySymbol, backendUrl, token, getTeachersData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const navigate = useNavigate();

  const [teacInfo, setTeacInfo] = useState(null);
  const [teacSlots, setTeacSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchTeacInfo = () => {
    const teacInfo = teachers.find((teac) => teac._id === teacId);
    setTeacInfo(teacInfo);
  };

  const getAvailableSlots = () => {
    setTeacSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 60 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = `${day}_${month}_${year}`;
        const slotTime = formattedTime;

        const isSlotAvailable = !(teacInfo.slots_booked[slotDate] && teacInfo.slots_booked[slotDate].includes(slotTime));
        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }

      if (timeSlots.length > 0) {
        setTeacSlots((prev) => [...prev, timeSlots]);
      }
    }
  };

  const bookSchedule = async () => {
    if (!token) {
      toast.warn('Login to book schedule');
      return navigate('/login');
    }

    try {
      const date = teacSlots[slotIndex][0].datetime;

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = `${day}_${month}_${year}`;

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-schedule`,
        { teacId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getTeachersData();
        navigate('/my-schedules');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchTeacInfo();
  }, [teachers, teacId]);

  useEffect(() => {
    if (teacInfo) getAvailableSlots();
  }, [teacInfo]);

  return (
    teacInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={teacInfo.image} alt="" />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {teacInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {teacInfo.degree} - {teacInfo.subject}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{teacInfo.experience}</button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 ">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{teacInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4 ">
              Session fee: <span className="text-gray-600">{currencySymbol}{teacInfo.fees}</span>
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Session Slots</p>
          <div className="flex gap-6 items-center w-full overflow-x-scroll mt-6">
            {teacSlots.length > 0 && teacSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-7 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-x-gray-200'}`}
                key={index}
              >
                <p className="text-xs">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p className="text-sm">{item[0] && months[item[0].datetime.getMonth()]}</p>
                <p className="text-center">{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {teacSlots.length > 0 && teacSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
                key={index}
              >
                {item.time}
              </p>
            ))}
          </div>
          <button onClick={bookSchedule} className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book a Schedule
          </button>
        </div>

        <ReleatedTeachers teacId={teacId} subject={teacInfo.subject} />
      </div>
    )
  );
};

export default Schedule;
