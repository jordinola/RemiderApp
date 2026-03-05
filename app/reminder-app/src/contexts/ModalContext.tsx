import { createContext, useContext, useState } from "react";

const ModalContext = createContext<{
  title?: string | null;
  isOpen: boolean;
  openModal: (
    content: React.ReactNode,
    title?: string,
    onSave?: () => void,
  ) => void;
  closeModal: () => void;
  onSave?: (() => void) | null;
  content: React.ReactNode;
}>({
  title: undefined,
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  onSave: () => {},
  content: null,
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [onSave, setOnSave] = useState<(() => void) | null>(null);

  const openModal = (
    content: React.ReactNode,
    title?: string | null,
    onSave?: (() => void) | null,
  ) => {
    setContent(content);
    setTitle(title ?? null);
    setOnSave(onSave ? () => onSave : null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle(null);
    setContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        title,
        isOpen,
        openModal,
        closeModal,
        onSave,
        content,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext);
