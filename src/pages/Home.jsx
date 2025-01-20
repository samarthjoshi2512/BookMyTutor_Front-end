import Banner from "../components/Banner"
import Header from "../components/Header"
import SubjectsMenu from "../components/SubjectsMenu"
import TopTeachers from "../components/TopTeachers"


const Home = () => {
  return (
    <div>
      <Header/>
      <SubjectsMenu/>
      <TopTeachers/>
      <Banner />
    </div>
  )
}

export default Home
