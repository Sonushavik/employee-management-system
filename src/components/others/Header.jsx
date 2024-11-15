import React, { useState , useEffect} from 'react'
import { setLocalStorage } from '../utils/LocalStorage';
const Header = (props) => {

  const [username, setUsername] = useState(' ')

  // useEffect(() => {
  //   if (!data) {
  //     setUsername('Admin');
  //   } else {
  //     setUsername(data.firstName || 'Admin'); // Fallback to 'Admin' if firstName is undefined
  //   }
  // }, [data]);


  const logOutUser =  () => {
    localStorage.setItem('loggedInUser', " ")
    props.changeUser(" ")
    // window.location.reload()
  }
  // console.log(data);
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-semibold'>Hello <br/><span className='text-3xl font-semibold' >{username}🙏</span>  </h1>
      <button onClick={logOutUser} className='bg-red-600 rounded-md px-3 py-2 font-medium'>Log Out</button>
    </div>
    
  )
}

export default Header
