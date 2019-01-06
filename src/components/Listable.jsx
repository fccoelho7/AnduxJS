import React, { PureComponent } from "react";
import { Table, Button, Divider, Popconfirm, message } from "antd";
import ModalForm from "./ModalForm";

class Listable extends PureComponent {
  static ACTIONS = {
    CREATING: "creating",
    EDITING: "editing"
  };

  state = {
    currentAction: null,
    formFields: {}
  };

  openModal = (type, index) => {
    const { data } = this.props;

    this.setState({
      currentAction: type,
      formFields: index != null ? data[index] : {}
    });
  };

  closeModal = () => {
    this.setState({ currentAction: null, formFields: {} });
  };

  closeModalAndSave = formData => {
    const { currentAction, formFields } = this.state;

    if (currentAction === Listable.ACTIONS.EDITING) {
      this.onEdit({ id: formFields.id, ...formData });
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

  getModalTitle = () => {
    const { CREATING } = Listable.ACTIONS;
    const { currentAction } = this.state;

    return currentAction === CREATING ? "Create" : "Edit";
  };

  render() {
    const { currentAction, formFields } = this.state;
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
        <ModalForm
          title={this.getModalTitle()}
          visible={!!currentAction}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
        >
          <Form fields={formFields} />
        </ModalForm>
      </React.Fragment>
    );
  }
}

export default Listable;
