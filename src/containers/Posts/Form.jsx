import React from "react";
import { Form, Input, Switch } from "antd";

const ModalForm = ({ form, fields }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <Form.Item label="Title">
        {getFieldDecorator("title", {
          initialValue: fields.title,
          rules: [
            { required: true, message: "Please input the title of the post!" }
          ]
        })(<Input placeholder="Describe the task's description.." />)}
      </Form.Item>
      <Form.Item label="Done?">
        {getFieldDecorator("done", {
          initialValue: fields.done,
          valuePropName: "checked"
        })(<Switch />)}
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
