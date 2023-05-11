import React, { useState, } from 'react'
import { useAppDispatch } from '../store';
import { addUser, selectUsers } from '../redux/formSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



 interface ILoginData {
  firstName: string,
  lastName: string,
  status: string,
  id:number
};



export default function Login() {

  const users = useSelector(selectUsers);
const navigate = useNavigate()
  const [loginData, setLoginData] = useState<ILoginData>({
    firstName: '',
    lastName: '',
    status:'',
    id:0
  });
  const dispatch = useAppDispatch();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value,id} = event.target;
    setLoginData({ ...loginData, [name]: value });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  
   dispatch(addUser({
    id:users.length + 1,
     firstName:loginData.firstName,
     lastName:loginData.lastName,
     status:loginData.status,
  }))
  if(loginData.firstName , loginData.lastName ,loginData.status === ''){
    alert('filed the fields')
  } else {
 setLoginData({firstName:'',lastName:'',status:'',id:0});
    navigate('/')
  }
    console.log(loginData.firstName, loginData.lastName,loginData.status);
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       

        <div className='flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Create Contact</h2>
                <div className='flex flex-row text-gray-400 py-2'>
                    <label className='m-3'>Username :</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    name='firstName'
                    onChange={handleChange} value={loginData.firstName}
                    />
                </div>
                <div className='flex flex-row text-gray-400 py-2'>
                    <label className='m-3'>LastNamae :</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                    name='lastName'
                    value={loginData.lastName} onChange={handleChange} />
                </div>
               
                <div className='flex flex-row text-gray-400 py-2'>
                    <label className='m-6'>Status :</label>
                    <div>

                   
                    <div className='flex flex-row m-3 '>
                      <input type="radio" 
                       checked={loginData.status === 'active'} 
                       onChange={handleChange}
                      value="active" className='mr-3' name="status" /> Active
                    </div>
                    <div className='flex flex-row m-3 '>
                      <input type="radio"
                      checked={loginData.status === 'Inactive'} 
                      onChange={handleChange}
                      value="Inactive" className='mr-3' name="status" /> Inactive
                    </div>      
                    </div>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Save Contact</button>
                
            </form>
        </div>
    </div>
  )
}