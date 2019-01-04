import React, { Component } from "react";
import Listable from "../../components/Listable";
import ModalForm from "./Form";

class View extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { posts, create, update, remove } = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <Listable
          customColumns={[
            {
              title: "Title",
              dataIndex: "title",
              key: "title"
            }
          ]}
          data={posts}
          Form={ModalForm}
          handleCreate={data => create(data)}
          handleEdit={data => update(data)}
          handleRemove={id => remove(id)}
        />
      </div>
    );
  }
}

export default View;
