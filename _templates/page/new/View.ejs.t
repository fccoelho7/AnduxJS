---
to: src/view/pages/<%= Name %>/View.jsx
---
import React, { Component } from "react";
import Layout from "../../layouts/default";
import Listable from "../../components/Listable";
import ModalForm from "./Form";

class View extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { <%= name %>, create, update, remove } = this.props;

    return (
      <Layout>
        <h2><%= Name %></h2>
        <Listable
          columns={[
          <% fields.forEach(function(field) { %>
            {
              title: '<%= Field %>',
              dataIndex: '<%= field %>',
              key: '<%= field %>'
            },
          <% }); %>
          ]}
          data={<%= name %>}
          Form={ModalForm}
          handleCreate={data => create(data)}
          handleEdit={data => update(data)}
          handleRemove={id => remove(id)}
        />
      </Layout>
    );
  }
}

export default View;
