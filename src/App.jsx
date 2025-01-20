import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Teachers from './pages/Teachers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MySchedules from './pages/MySchedules'
import Schedule from './pages/Schedule'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeedBack from './pages/FeedBack'
import Syllabus from './pages/Syllabus'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/teachers' element={<Teachers/>} />
        <Route path='/teachers/:subject' element={<Teachers/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-schedules' element={<MySchedules/>}/>
        <Route path='/schedule/:teacId' element={<Schedule/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
