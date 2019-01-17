---
to: src/view/pages/<%= Name %>/Form.jsx
---
import React from "react";
import { Form, Input } from "antd";

// You can look for more field types, here: https://ant.design/components/form

const ModalForm = ({ form, fields }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <% fields.forEach(function(field) { %>
      <Form.Item label="<%= field %>">
        {getFieldDecorator("<%= field %>", {
          initialValue: fields.<%= field %>,
          rules: [{ required: true }]
        })(<Input placeholder="Type the <%= field %> value.." />)}
      </Form.Item>
      <% }); %>
    </Form>
  );
};

export default ModalForm;
