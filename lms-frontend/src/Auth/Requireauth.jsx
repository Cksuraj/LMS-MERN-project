
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';


function Requireauth({allowed}) {
   
    const {isLoggedIn, Role} = useSelector((state)=> state.auth);


    return isLoggedIn && allowed.find((myrole)=> myrole == Role)?(
        <Outlet/>
    ) : isLoggedIn ? (<Navigate to='/denied' />) :(<Navigate to='login'/>)
}

export default Requireauth