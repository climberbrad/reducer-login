import React, {useState} from 'react';
import './App.css';
import {login} from "./Utils";

export const buttonCss = 'bg-sky-700 w-full py-1 border border-gray-100 rounded text-white hover:opacity-75 hover:bg-gray-400 hover:text-black font-semibold'

const cloudSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
    </svg>

)

function App() {

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>()

  const handleSubmit = async () => {
    try {
      await login(userName, password );
      setLoggedIn(true);
      setError(undefined);
    } catch (error) {
      setLoggedIn(false);
      setError('Invalid username or password. Please try again.');
      setUserName('');
      setPassword('');
    }
  }

  const handleLogout = () => {
      setLoggedIn(false);
      setUserName('');
      setPassword('');
  }


  const loggedInPage = (
      <div>
          <div className='font-semibold mt-32 text-5xl'><span className='text-blue-400 font-normal'>{userName}</span> is logged in!</div>
          <div className='flex items-center justify-center mt-8'>
              <span className='w-24'>
            <button onClick={handleLogout} className={buttonCss}>Log out</button>
              </span>
          </div>
      </div>
  )

  const loginForm = (
      (
          <div className="container mx-auto bg-blue-300 rounded-xl shadow border pt-8 w-1/4">
            <div className='flex justify-center'>
              <span className='mt-0.5'>{cloudSVG}</span>
              <span className="text-xl text-gray-700 font-bold mb-4 pl-2">
            Reducer Login!
          </span>
            </div>
            <div className='p-2 mx-16 my-8'>
              <div className='flex justify-between'>
                <p className="text-gray-500 text-lg pr-2 text-lg font-semibold">user name</p>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type={"text"} autoFocus className='w-36 rounded h-6 mt-1 focus:outline-none' />
              </div>
              <div className='flex justify-between'>
                <p className="text-gray-500 text-lg pr-2 text-lg font-semibold">password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} className='w-36 rounded h-6 mt-1 focus:outline-none' />
              </div>
              <div className='flex justify-end mt-8'>
                <button onClick={handleSubmit} className={buttonCss}>Login</button>
              </div>
            </div>
          </div>
      )
  )


  return (
      <div className="App mt-10">
        {error && (<div className="container mx-auto bg-red-300 text-semibold rounded-xl shadow border py-4 mb-2 w-1/4">{error}</div>)}
        {loggedIn ?  loggedInPage: loginForm}
      </div>
  );
}

export default App;
