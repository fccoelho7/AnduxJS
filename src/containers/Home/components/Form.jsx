import React from "react";
import { Form, Input, Switch } from "antd";

const ModalForm = ({ formData, editFormData }) => (
  <Form className="login-form">
    <Form.Item label="Title">
      <Input
        placeholder="Describe the task's description.."
        value={formData && formData.title}
        onChange={e => editFormData({ ...formData, title: e.target.value })}
      />
    </Form.Item>
    <Form.Item label="Done?">
      <Switch
        defaultChecked
        checked={formData && formData.done}
        onChange={done => editFormData({ ...formData, done })}
      />
    </Form.Item>
  </Form>
);

export default ModalForm;
