import React from "react";
import { Modal, Button } from "antd";

const FormModal = ({ title, visible, handleOk, handleCancel, children }) => (
  <Modal
    visible={visible}
    title={title}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button key="submit" type="primary" onClick={handleOk}>
        Submit
      </Button>
    ]}
  >
    {children}
  </Modal>
);

export default FormModal;
