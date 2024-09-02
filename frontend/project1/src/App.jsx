import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

import Navbar from "./components/navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ContactCard } from "./components/ContactCard";
import Modal from "./components/Modal";
import ContactPut from "./components/ContactPut";
import useDisclosure from "./hooks/useDisclosure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactsList);
          return contactsList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[360px] px-4">
        <div>
          <Navbar />
          <div className="flex items-center gap-2">
            <div className="relative flex items-center flex-grow">
              <FiSearch className="text-white absolute text-3xl ml-1" />
              <input
                type="text"
                className="pl-10 h-10 flex-grow rounded-md bg-slate-400 border-white text-white"
              />
            </div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="text-4xl cursor-pointer text-white"
            />
          </div>
        </div>

        {/* contacts */}
        <div className="mt-4 gap-4 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <ContactPut onClose={onClose} isOpen={isOpen} />

      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
