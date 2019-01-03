import React, { Component } from "react";
import { actions } from "./posts";
import Listable from "../../components/Listable";
import ModalForm from "./Form";

class View extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetch());
  }

  render() {
    const { posts, dispatch } = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <Listable
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
              render: (text, record) => record.done && record.done.toString()
            }
          ]}
          data={posts}
          Form={ModalForm}
          handleCreate={data => dispatch(actions.create(data))}
          handleEdit={data => dispatch(actions.update(data))}
          handleRemove={id => dispatch(actions.remove(id))}
        />
      </div>
    );
  }
}

export default View;
