import React from "react";
import { Table, Button, Divider, Popconfirm } from "antd";

const List = ({ data, customColumns, remove, openModal }) => {
  const columns = [
    ...customColumns,
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <span key={record.id}>
          <Button size="small" onClick={() => openModal("edit", index)}>
            Edit
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => remove(index)}
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

  return (
    <Table rowKey={record => record.id} dataSource={data} columns={columns} />
  );
};

export default List;
