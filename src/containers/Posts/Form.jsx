import React from "react";
import { Form, Input, Switch } from "antd";

const ModalForm = ({ data, handleOnChange }) => (
  <Form className="login-form">
    <Form.Item label="Title">
      <Input
        placeholder="Describe the task's description.."
        value={data && data.title}
        onChange={e => handleOnChange({ ...data, title: e.target.value })}
      />
    </Form.Item>
    <Form.Item label="Done?">
      <Switch
        defaultChecked
        checked={data && data.done}
        onChange={done => handleOnChange({ ...data, done })}
      />
    </Form.Item>
  </Form>
);

export default ModalForm;
