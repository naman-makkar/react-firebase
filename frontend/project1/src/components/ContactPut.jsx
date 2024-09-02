import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPut = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const ContactRef = collection(db, "contacts");
      await addDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const ContactRef = doc(db, "contacts", id);
      await updateDoc(ContactRef, contact);
      onClose();
      toast.success("contact Updated successfully");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? { name: contact.name, email: contact.email }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            if (isUpdate) {
              updateContact(values, contact.id);
            } else {
              addContact(values);
            }
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 font-medium">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10 rounded-md" />
            </div>
            <div className="flex flex-col gap-1 font-medium">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="border h-10 rounded-md" />
            </div>
            <button className="bg-orange cursor-pointer px-3 py-1 border self-end rounded-md">
              {isUpdate ? "Update" : "add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default ContactPut;
