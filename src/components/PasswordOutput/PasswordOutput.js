import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Input, Space } from "antd";

import { CONSTANTS } from "../../utils/constants";
import { passwordFormActions } from "../../store/password-form-slice";

import "./PasswordOutput.css";

const PasswordOutput = () => {
  const isModalOpen = useSelector(
    (state) => state.passwordForm.isOutputModalVisible
  );
  const generatedPassword = useSelector(
    (state) => state.passwordForm.generatedPassword
  );
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(passwordFormActions.closeOutputModal());
    dispatch(passwordFormActions.updateGeneratedPassword(""));
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
        <Input value={generatedPassword} />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </Modal>
  );
};

export default PasswordOutput;
