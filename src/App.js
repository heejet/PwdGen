import { Flex } from "antd";

import PasswordForm from "./components/PasswordForm/PasswordForm";

import "./App.css";

const App = () => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex className="App-FlexBoxStyle" justify="center" align="center">
        <PasswordForm />
      </Flex>
    </Flex>
  );
};

export default App;
