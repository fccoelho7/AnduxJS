import React, { Component } from "react";
import { Button } from "antd";
import List from "../../components/List";
import Edit from "./Edit";
import Create from "./Create";
import { actionCreators } from "./posts";

class View extends Component {
  state = {
    formData: null,
    editing: null,
    showModal: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.fetch());
  }

  openModal = (type = "create", index = null) => {
    this.setState({
      formData: this.props.posts[index],
      editing: index,
      showModal: type
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, formData: null, editing: null });
  };

  closeModalAndSave = () => {
    const { dispatch } = this.props;
    const { editing, formData } = this.state;

    if (editing != null) {
      dispatch(actionCreators.update(editing, formData));
    } else {
      dispatch(actionCreators.create(formData));
    }

    this.closeModal();
  };

  editFormData = formData => this.setState({ formData });

  render() {
    const { posts, dispatch } = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <Button
          type="primary"
          className="create-todo"
          onClick={() => this.openModal()}
        >
          Add Todo
        </Button>
        <List
          data={posts}
          remove={dispatch(actionCreators.remove)}
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
