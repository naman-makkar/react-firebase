import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

import Navbar from './components/navbar'
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';

function App() {
  const [count, setCount] = useState(0)

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactsList = contactSnapshot.docs.map(doc =>({
          id : doc.id,
          ...doc.data()
        }));
        setContacts(contactsList);
      } 
      catch (error) {
        console.log(error)
      }
    };
    getContacts();

  }, [])
  

  return (
    <div className='mx-auto max-w-[360px] px-4'>
      <Navbar></Navbar>

      <div className='flex items-center gap-2'>
      <div className='relative flex items-center flex-grow'>
        <FiSearch className='text-white absolute text-3xl ml-1' />
        <input type='text' className='pl-10 h-10 flex-grow rounded-md bg-slate-400 border-white text-white'></input>

      </div>

      <AiFillPlusCircle className=' text-4xl cursor-pointer text-white' />
      </div>
    </div>
  )
}

export default App
