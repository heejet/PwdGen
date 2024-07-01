import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Input, Space } from "antd";

import { CONSTANTS } from "../../utils/constants";
import { passwordFormActions } from "../../store/password-form-slice";

import "./PasswordOutput.css";

const PasswordOutput = () => {
  const isModalOpen = useSelector((state) => state.passwordForm.isOutputModalVisible);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(passwordFormActions.closeOutputModal());
  };

  return (
    <Modal
      title="Generated Password"
      open={isModalOpen}
      centered={true}
      onCancel={handleCancel}
      footer={[]}
    >
      <Space.Compact
        style={{
          width: "100%",
        }}
      >
        <Input value="Combine input and button" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </Modal>
  );
};

export default PasswordOutput;
