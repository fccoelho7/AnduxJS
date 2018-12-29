import React, { Component } from "react";
import { Button } from "antd";
import List from "./components/List";
import Edit from "./components/Edit";
import Create from "./components/Create";

class View extends Component {
  state = {
    formData: null,
    editing: null,
    showModal: false
  };

  openModal = (type = "create", index = null) => {
    this.setState({
      formData: this.props.todos[index],
      editing: index,
      showModal: type
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, formData: null, editing: null });
  };

  closeModalAndSave = () => {
    const { create, update } = this.props;
    const { editing, formData } = this.state;

    if (editing != null) {
      update(editing, formData);
    } else {
      create(formData);
    }

    this.closeModal();
  };

  editFormData = formData => this.setState({ formData });

  render() {
    const { todos, remove } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <Button
          type="primary"
          className="create-todo"
          onClick={() => this.openModal()}
        >
          Add Todo
        </Button>
        <List
          data={todos}
          remove={remove}
          openModal={this.openModal}
          customColumns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id"
            },
            {
              title: "Title",
              dataIndex: "title",
              key: "title"
            },
            {
              title: "Done",
              dataIndex: "done",
              key: "done",
              render: (text, record) => record.done.toString()
            }
          ]}
        />
        <Edit
          formData={this.state.formData}
          editFormData={this.editFormData}
          showModal={this.state.showModal === "edit"}
          closeModal={this.closeModal}
          closeModalAndSave={this.closeModalAndSave}
        />
        <Create
          formData={this.state.formData}
          editFormData={this.editFormData}
          showModal={this.state.showModal === "create"}
          closeModal={this.closeModal}
          closeModalAndSave={this.closeModalAndSave}
        />
      </div>
    );
  }
}

export default View;
