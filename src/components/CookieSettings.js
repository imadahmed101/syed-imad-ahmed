import React, { useContext } from 'react'
import { Context } from '../App'

const CookieSettings = () => {

  const [cookieSettings, setCookieSettings] = useContext(Context)

  const allowCookies = () => {
    localStorage.setItem('cookieSettings', 'allow')
    setCookieSettings(localStorage.getItem('cookieSettings'))
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieSettings', 'reject')
    setCookieSettings(localStorage.getItem('cookieSettings'))
  }

  return (
    <div className='bg-gray-700 rounded-md m-2 text-white max-w-[300px] py-8 px-8 sticky bottom-2'>
      <h3 className='text-lg mb-2'>Cookie Settings</h3>
      <p className='text-sm mb-2'>This website uses cookies and data to analyze and optimize this website. Please choose your option if you want to allow all or to reject all.</p>
      <div className='flex flex-row justify-evenly pt-2'>
        <button className='flex-1 p-2 bg-[#084cab] rounded-md' onClick={() => allowCookies()}>Allow All</button>
        <button className='flex-1 p-2' onClick={() => rejectCookies()}>Reject All</button>
      </div>
    </div>
  )
}

export default CookieSettings