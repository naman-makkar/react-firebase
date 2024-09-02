import React, { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    console.log("clicked");
  };

  return { isOpen, onOpen, onClose };
};

export default useDisclosure;
