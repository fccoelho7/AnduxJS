import React, { Component } from "react";
import { Table, Button } from "antd";

class View extends Component {
  render() {
    const { todos, create } = this.props;

    const columns = [
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
        key: "done"
      }
    ];

    return (
      <div>
        <h2>Home</h2>
        <Button
          type="primary"
          className="create-todo"
          onClick={() => {
            const id = Math.floor(Math.random() * 101);
            create({ id, title: `Item ${id}`, done: false });
          }}
        >
          Add Todo
        </Button>
        <Table dataSource={todos} columns={columns} />
      </div>
    );
  }
}

export default View;
