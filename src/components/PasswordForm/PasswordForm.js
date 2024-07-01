import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";

import { CONSTANTS } from "../../utils/constants";
import { passwordFormActions } from "../../store/password-form-slice";

import "./PasswordForm.css";

const passwordFormatOptions = [
  {
    label: "Add Special Character",
    value: CONSTANTS.PASSWORD_FORM.PASSWORD_FORMATS.ADD_SPECIAL_CHARACTER,
  },
  {
    label: "Add Numbers",
    value: CONSTANTS.PASSWORD_FORM.PASSWORD_FORMATS.ADD_NUMBERS,
  },
];

/** Initial form values. */
const initialPasswordFormatValues = [
  CONSTANTS.PASSWORD_FORM.PASSWORD_FORMATS.ADD_SPECIAL_CHARACTER,
  CONSTANTS.PASSWORD_FORM.PASSWORD_FORMATS.ADD_NUMBERS,
];

const initialIterationValue =
  CONSTANTS.PASSWORD_FORM.INITIAL_VALUES.INITIAL_ITERATION_VALUE;

const PasswordForm = () => {
  const dispatch = useDispatch();

  /** Form handlers. */
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(passwordFormActions.openOutputModal());
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        passwordFormat: initialPasswordFormatValues,
        iteration: initialIterationValue,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Domain Name"
        name="domainName"
        rules={[
          {
            required: true,
            message: "Please input the domain name!",
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
