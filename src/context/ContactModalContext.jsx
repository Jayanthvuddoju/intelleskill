import React, { createContext, useContext, useState } from 'react';

const ContactModalContext = createContext();

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

export const ContactModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Get Started');

  const openModal = (title) => {
    if (typeof title === 'string') {
      setModalTitle(title);
    } else {
      setModalTitle('Get Started');
    }
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <ContactModalContext.Provider value={{ isModalOpen, modalTitle, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};
