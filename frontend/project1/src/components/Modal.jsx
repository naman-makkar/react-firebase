import React from 'react'
import {createPortal} from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <div>
      {isOpen && (
        <>
          <div className='bg-white w-[80%] max-w-lg z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg rounded-lg'>
            <div className='flex justify-end'>
              <AiOutlineClose onClick={onClose} className='text-2xl cursor-pointer' />
            </div>
            {children}
          </div>
          <div onClick={onClose} 
          className='fixed top-0 left-0 z-40 h-screen w-screen backdrop-blur' />
        </>
      )}
    </div>
  , document.getElementById("modal-root"))
}

export default Modal
