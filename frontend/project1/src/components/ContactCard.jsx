import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclosure from "../hooks/useDisclosure";
import ContactPut from "./ContactPut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      console.log("deleted");
      toast.success("contact Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-between rounded-md p-2"
      >
        <div className="flex items-center gap-1">
          <HiOutlineDocumentSearch className="text-3xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-2xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer"
          />
        </div>
      </div>

      <ContactPut
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
