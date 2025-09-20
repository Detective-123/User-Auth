import React from 'react'

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex bg-amber-200 border-b-blue-700 min-w-[400px] rounded-sm   flex-col p-3'>
        <h1 className='justify-center my-3 text-4xl font-bold text-blue-500 flex items-center' >Login</h1>
        <label htmlFor="input" className='font-bold mt-7 mx-2.5'>Username/Email</label>
        <input 
          type="text" 
          placeholder='username/email'
          className='p-2 mt-2 outline:none w-[350px] flex items-center justify-center ml-1'
        />
        <label htmlFor="input" className='font-bold mt-7 mx-2.5'>Password</label>
        <input 
          type="password" 
          placeholder='Password'
          className='p-2 mt-2 outline:none w-[350px] flex items-center justify-center ml-1'
        />

        <button className='bg-blue-500 hover:bg-blue-600 cursor-pointer mb-4 mt-10 p-2 rounded-sm '>Login</button>
      </div>
    </div>
  )
}

export default App