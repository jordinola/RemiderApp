import { X } from "lucide-react";
import { useModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const { title, content, closeModal } = useModalContext();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50">
      <div className="w-2xs bg-white rounded-lg p-6 gap-3">
        <div
          className={`flex ${title ? "justify-between" : "justify-end"} pb-3`}
        >
          <h2 className="text-lg">{title}</h2>
          <X
            className="hover:cursor-pointer text-red-600"
            onClick={closeModal}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
