import { X } from "lucide-react";
import { useModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const { content, closeModal } = useModalContext();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50">
      <div className="w-2xl bg-white rounded-lg p-6 gap-3">
        <div className="flex justify-end">
          <X className="hover:cursor-pointer" onClick={closeModal} />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
