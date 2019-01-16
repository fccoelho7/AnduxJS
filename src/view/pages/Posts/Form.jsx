import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const ModalForm = ({ form, fields }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <Form.Item label="Title">
        {getFieldDecorator('title', {
          initialValue: fields.title,
          rules: [
            { required: true, message: "Please input the post's title!" },
          ],
        })(<Input placeholder="Describe the task's description.." />)}
      </Form.Item>
      <Form.Item label="Content">
        {getFieldDecorator('content', {
          initialValue: fields.content,
          rules: [
            { required: true, message: "Please input the post's content!" },
          ],
        })(<TextArea placeholder="Describe the task's description.." />)}
      </Form.Item>
      <Form.Item label="Category">
        {getFieldDecorator('category', {
          initialValue: fields.category,
          rules: [
            { required: true, message: "Please input the post's category!" },
          ],
        })(
          <Select placeholder="Please select a country">
            <Option value="1">Category A</Option>
            <Option value="2">Category B</Option>
          </Select>
        )}
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
