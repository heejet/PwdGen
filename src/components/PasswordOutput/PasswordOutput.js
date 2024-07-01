import { useState } from "react";
import { Modal, Button, Input, Space } from "antd";

import "./PasswordOutput.css";
import { CONSTANTS } from "../../utils/constants";

const PasswordOutput = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
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
