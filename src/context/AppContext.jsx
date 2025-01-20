import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

export const AppContext = createContext()

const AppContextProvider = (props) => {

const currencySymbol = `₹`
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://book-my-tutor-back-end.vercel.app'

const [teachers, setTeachers] =useState([])
const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
const [userData,setUserData] = useState(false)
  

  const getTeachersData = async () => {

    try {

      const {data} = await axios.get(backendUrl + '/api/teacher/list')
      if (data?.success) {
        setTeachers(data.teachers)
      } else {
        toast.error(data?.message || "Failed to fetch teachers.")
      }
    } catch (error) {
        console.error("Error fetching teachers data:", error)
        toast.error(error.message)
        }
  }

  const loadUserProfileData = async () => {

    try {
      
      const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
      if (data?.success) {
        setUserData(data.userData)
      } else {
        toast.error(data?.message || "Failed to load user profile.")
      }

    } catch (error) {
      console.error("Error loading user profile data:", error)
      toast.error(error.message)
    }
  }

  const value = {
    teachers,getTeachersData,
    currencySymbol,
    token,setToken,
    backendUrl,
    userData,setUserData,
    loadUserProfileData
  }

  useEffect(()=>{
    getTeachersData()
  },[])

  useEffect(()=>{
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }

    // return () => {
    //   setToken(null)
    // }

  },[token])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider