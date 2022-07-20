import { Button, Input, Modal } from "components";
import { useMetricContext } from "context";
import { isNil } from "lodash";
import "pages/mainPage/components/metricsTable/components/updateMetricModal/updateMetricModal.scss";
import { ChangeEventHandler, useEffect, useState } from "react";
import useMetricsUpdate from "repository/useMetricsUpdate";

type EventChange = ChangeEventHandler<HTMLInputElement>;

type UpdateMetricModalProps = {
  isActive: boolean;
  onClose: () => void;
};

const UpdateMetricModal: React.FC<UpdateMetricModalProps> = ({
  isActive,
  onClose,
}) => {
  const { selectedMetric } = useMetricContext();
  const { updateMetric } = useMetricsUpdate();
  const [value, setValue] = useState(selectedMetric?.value);

  useEffect(() => {
    setValue(selectedMetric?.value);
  }, [selectedMetric?.value]);

  if (isNil(selectedMetric)) return <></>;

  const handleOnChange: EventChange = (e) => setValue(Number(e.target.value));
  const handleUpdate = () => {
    if (isNil(value)) return;
    updateMetric({ ...selectedMetric, value });
    onClose();
  };

  return (
    <Modal isActive={isActive} onClose={onClose}>
      <>
        <div className="metric_modal-title">Metric - Update</div>
        <div className="metric_modal-content">
          <div className="metric_modal-content-details">
            <p>
              <span>{"Label"}</span>
              {selectedMetric.label}
            </p>
            <span>{"Description"}</span>
            {selectedMetric.description}
          </div>
          <div className="metric_modal-content-value">
            <span>Value: </span>
            <Input
              small
              type="number"
              value={value ?? "-"}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="metric_modal-footer">
          <Button onClick={handleUpdate}>{"Confirm"}</Button>
          <Button inverted onClick={onClose}>
            {"Cancel"}
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default UpdateMetricModal;
