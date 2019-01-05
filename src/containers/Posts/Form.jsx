import React from "react";
import { Form, Input, Switch } from "antd";

const ModalForm = ({ data, form }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <Form.Item label="ID">
        {getFieldDecorator("id")(
          <Input placeholder="Describe the task's description.." />
        )}
      </Form.Item>
      <Form.Item label="Title">
        {getFieldDecorator("title", {
          rules: [
            { required: true, message: "Please input the title of the post!" }
          ]
        })(<Input placeholder="Describe the task's description.." />)}
      </Form.Item>
      <Form.Item label="Done?">
        {getFieldDecorator("done", {
          valuePropName: "checked"
        })(<Switch />)}
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
