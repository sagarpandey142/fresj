"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from "../SideBar/page"
import Navbar from '@/app/components/commonPage/Navbar'
import OverView from "../OverView/page"
import AppliedProject from "../AppliedProject/page"
import {  GetUserDetail } from '../../../../Services/operations/ProfileHandler'
import BookmarkProject from "../BookMarkProject/page"
import Setting from "../Settings/MainPage/Setting"

const Page = () => {
  const [clicktrack, setclicktrack] = useState(0);
  const [userData, setUserData] = useState();
  const [loading, setloading] = useState(false);

  const getUserDetails = async () => {
    try {
      setloading(true);
      const token = localStorage.getItem('token');
      if (token) {
       
        const userDetailResponse = await GetUserDetail(token);
        setUserData(userDetailResponse.data.response);
      }
      setloading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setloading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Navbar />
      {
        loading ? (
          <div className="flex justify-center items-center h-screen backdrop-blur-lg">
            <iframe src="https://lottie.host/embed/3854ae56-d940-4e39-b00a-90c6d18a90f2/j4pg2cwMEq.json" style={{ width: '300px', height: '300px' }}></iframe>
          </div>
        ) : (
          <div className='mt-2 border-t-[2px] border-slate-300 overflow-hidden'>
            <div className='w-8/12 mx-auto flex gap-2'>
            <div className='  '>
              <Sidebar clicktrack={clicktrack} setclicktrack={setclicktrack} />
            </div>
              <div className=''>
                {
                  clicktrack === 0 ? (
                    <OverView userData={userData} />
                  ) : clicktrack === 1 ? (
                    <AppliedProject userData={userData} />
                  ) : (
                    clicktrack==2 ? (
                      <BookmarkProject userData={userData} />
                    ) : (
                         <Setting userData={userData}/>
                    )
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Page;
