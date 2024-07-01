import { Button, Checkbox, Form, Input, InputNumber } from "antd";

import "./PasswordForm.css";
import { CONSTANTS } from "../../utils/constants";

const passwordFormatOptions = [
  {
    label: "Add Special Character",
    value: CONSTANTS.PASSWORD_FORMATS.ADD_SPECIAL_CHARACTER,
  },
  { label: "Add Numbers", value: CONSTANTS.PASSWORD_FORMATS.ADD_NUMBERS },
];


/** Initial form values. */
const initialPasswordFormatValues = [
  CONSTANTS.PASSWORD_FORMATS.ADD_SPECIAL_CHARACTER,
  CONSTANTS.PASSWORD_FORMATS.ADD_NUMBERS,
];

const initialIterationValue = 1

/** Form handlers. */
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const PasswordForm = () => {
  return (
    <Form
      name="basic"
      initialValues={{
        passwordFormat: initialPasswordFormatValues,
        iteration: initialIterationValue
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="iteration"
        label="Iteration"
        rules={[
          {
            required: true,
            type: "number",
            min: 1,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="passwordFormat">
        <Checkbox.Group options={passwordFormatOptions} onChange={onChange} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Generate Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordForm;
