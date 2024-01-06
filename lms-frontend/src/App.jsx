import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import HomeLayout from './Layout/Homelayout'
import Aboutus from './Pages/Aboutus'
import Notfound from './Pages/Notfound'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import CourseList from './Pages/course/Getallcourse'

function App() {
  // Routes Are container or Tree Which Provides the Branch Route to visit the other path. 
 return (
  <>
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/' element={<HomeLayout />}> </Route>
    <Route path='/about' element={<Aboutus />}></Route> 
    <Route path='/courses' element={<CourseList />} /> 
    <Route path='/signup' element={<Signup />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='*' element={<Notfound />}></Route> 
  </Routes>
  </>
 )
}

export default App
