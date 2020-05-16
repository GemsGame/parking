import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => () => {
    setIsOpen(true);
    console.log(isOpen);
  };
  const close = () => () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  };
};


export default useModal;