import { Modal } from "components";

type UpdateMetricModalProps = {
  isActive: boolean;
  onClose: () => void;
};

const UpdateMetricModal: React.FC<UpdateMetricModalProps> = ({
  isActive,
  onClose,
}) => {
  return (
    <Modal isActive={isActive} onClose={onClose}>
      <p>Some text in the Modal..</p>
    </Modal>
  );
};

export default UpdateMetricModal;
