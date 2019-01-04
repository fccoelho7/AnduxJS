import React from "react";
import { Table, Button, Divider, Popconfirm } from "antd";
import FormModal from "./FormModal";

class List extends React.PureComponent {
  static ACTIONS = {
    EDITING: "creating",
    CREATING: "editing"
  };

  state = {
    currentAction: null,
    formData: null
  };

  openModal = (type, index) => {
    this.setState({
      currentAction: type,
      formData: (this.props.data && this.props.data[index]) || null
    });
  };

  closeModal = () => {
    this.setState({ currentAction: null, formData: null });
  };

  closeModalAndSave = () => {
    const { handleEdit, handleCreate } = this.props;
    const { currentAction, formData } = this.state;

    if (currentAction === List.ACTIONS.EDITING) {
      handleEdit(formData);
    } else {
      handleCreate(formData);
    }

    this.closeModal();
  };

  editFormData = formData => this.setState({ formData });

  getColumns = () => {
    const { customColumns, handleRemove } = this.props;

    return [
      ...customColumns,
      {
        title: "Action",
        key: "action",
        render: (text, record, index) => (
          <span key={record.id}>
            <Button
              size="small"
              onClick={() => this.openModal(List.ACTIONS.EDITING, index)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => handleRemove(record.id)}
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

  render() {
    const { formData } = this.state;
    const { data, Form } = this.props;

    return (
      <React.Fragment>
        <Button
          type="primary"
          className="create-todo"
          onClick={() => this.openModal(List.ACTIONS.CREATING)}
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
          visible={this.state.currentAction === List.ACTIONS.CREATING}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
        >
          <Form data={formData} handleOnChange={this.editFormData} />
        </FormModal>
        <FormModal
          title="Edit"
          visible={this.state.currentAction === List.ACTIONS.EDITING}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
        >
          <Form data={formData} handleOnChange={this.editFormData} />
        </FormModal>
      </React.Fragment>
    );
  }
}

export default List;
