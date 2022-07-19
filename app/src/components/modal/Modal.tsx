import "components/modal/modal.scss";

type ModalProps = {
  isActive: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const Modal: React.FC<ModalProps> = ({ isActive, children, onClose }) => {
  return isActive ? (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
