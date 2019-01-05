import React from "react";
import { Table, Button, Divider, Popconfirm, message } from "antd";
import FormModal from "./FormModal";

class Listable extends React.PureComponent {
  static ACTIONS = {
    EDITING: "creating",
    CREATING: "editing"
  };

  state = {
    currentAction: null
  };

  openModal = (type, index) => {
    const { data } = this.props;
    const { form } = this.formRef.props;

    this.setState({ currentAction: type });

    form.setFieldsInitialValue(data[index]);
  };

  closeModal = () => {
    this.setState({ currentAction: null });
  };

  closeModalAndSave = formData => {
    const { currentAction } = this.state;

    if (currentAction === Listable.ACTIONS.EDITING) {
      this.onEdit(formData);
    } else {
      this.onCreate(formData);
    }

    this.closeModal();
  };

  onCreate = data => {
    const { handleCreate } = this.props;

    handleCreate(data);

    setTimeout(() => message.success("Post succesfull created!"), 300);
  };

  onEdit = data => {
    const { handleEdit } = this.props;

    handleEdit(data);

    setTimeout(() => message.success("Post succesfull edited!"), 300);
  };

  onRemove = id => {
    const { handleRemove } = this.props;

    handleRemove(id);

    message.success("Post succesfull deleted!");
  };

  getColumns = () => {
    const { columns } = this.props;

    return [
      ...columns,
      {
        title: "Action",
        key: "action",
        render: (text, record, index) => (
          <span key={record.id}>
            <Button
              size="small"
              onClick={() => this.openModal(Listable.ACTIONS.EDITING, index)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => this.onRemove(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger" size="small">
                Delete
              </Button>
            </Popconfirm>
          </span>
        )
      }
    ];
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { data, Form } = this.props;

    return (
      <React.Fragment>
        <Button
          type="primary"
          className="create-todo"
          onClick={() => this.openModal(Listable.ACTIONS.CREATING)}
        >
          Add Todo
        </Button>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={this.getColumns()}
        />
        <FormModal
          title="Create"
          visible={this.state.currentAction === Listable.ACTIONS.CREATING}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
        >
          <Form />
        </FormModal>
        <FormModal
          title="Edit"
          visible={this.state.currentAction === Listable.ACTIONS.EDITING}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
          wrappedComponentRef={this.saveFormRef}
        >
          <Form />
        </FormModal>
      </React.Fragment>
    );
  }
}

export default Listable;
