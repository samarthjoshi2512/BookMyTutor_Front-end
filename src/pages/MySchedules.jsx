import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

const MySchedules = () => {

  const {backendUrl, token, getTeachersData } = useContext(AppContext);

  const [schedules, setSchedules] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const navigate = useNavigate()

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]

  }

  const getUserSchedules = async () => {

    try {
      
      const {data} = await axios.get(backendUrl+'/api/user/schedules', {headers:{token}})

      if (data.success) {
        setSchedules(data.schedules.reverse())
        console.log(data.schedules);
        
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelSchedule = async (scheduleId) => {

    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/cancel-schedule', {scheduleId}, {headers:{token}})

      if (data.success) {
        toast.success(data.message)
        getUserSchedules()
        getTeachersData()
      } else{
        toast.error(data.message)
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  const initPay = (order) => {

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: 'Schedule Payment',
    description: "Schedule Payment",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (response) => {
      console.log(response);
      
      try {
        
        const {data} = await axios.post(backendUrl + '/api/user/verify-razorpay', response, {headers:{token}})
        if (data.success) {
          getUserSchedules()
          navigate('/my-schedules')
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }

    }
  }
    
  const rzp = new window.Razorpay(options)
  rzp.open()
  }

  const scheduleRazorpay = async (scheduleId) => {

    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay', {scheduleId}, {headers:{token}})

      if (data.success) {
        initPay(data.order)
        
      }

    } catch (error) {
      
    }

  }

  useEffect(()=>{
    if (token) {
      getUserSchedules()
    }
  },[token])

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Schedules</p>
      <div>
        {schedules.map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.teacData.image} alt="" />
            </div>
            <div className="flex-1 tetx-sm tetx-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.teacData.name}</p>
              <p>{item.teacData.subject}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.teacData.address.line1}</p>
              <p className="text-xs">{item.teacData.address.line2}</p>
              <p className="text-sm mt-1">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span> {slotDateFormat(item.slotDate)}| {item.slotTime}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end">
              {!item.cancelled && item.payment && !item.isCompleted &&  <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50">Paid</button>}
              {!item.cancelled && !item.payment && !item.isCompleted &&  <button onClick={()=>scheduleRazorpay(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>}
              {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelSchedule(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 ">Cancel Schedule</button>}
              {item.cancelled && !item.isCompleted && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">Schedule Cancelled</button>}
              {item.isCompleted && <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySchedules;
