import React, { Component } from "react";
import Home from "./containers/Home";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <div className="App">
        <Layout>
          <Header
            style={{
              display: "flex",
              position: "fixed",
              zIndex: 1,
              width: "100%"
            }}
          >
            <div className="logo">
              <img src={logo} alt="Logo" style={{ height: 36 }} />
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item key="1">App</Menu.Item>
              <Menu.Item key="2">Other link</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 100 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <Home />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
