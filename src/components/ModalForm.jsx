import React, { PureComponent } from "react";
import { Modal, Form, Button } from "antd";

class FormModal extends PureComponent {
  handleOnSubmit = () => {
    const { handleOk, form } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();

      if (handleOk) {
        handleOk(values);
      }
    });
  };

  render() {
    const { title, visible, handleCancel, form, children } = this.props;

    return (
      <Modal
        visible={visible}
        title={title}
        onOk={this.handleOnSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOnSubmit}>
            Submit
          </Button>
        ]}
      >
        {React.cloneElement(children, { form })}
      </Modal>
    );
  }
}

export default Form.create()(FormModal);
