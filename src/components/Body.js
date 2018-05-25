
import { Icon, Layout, Menu, Row } from 'antd';
import React, { Component } from 'react';

const { Header, Sider, Content } = Layout;

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <div>
          <Row>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>Institutes</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>Loan Schemes</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>Scholarship Schemes</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header >
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
                        }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
          </Row>
        </div>
    );
  }
}

