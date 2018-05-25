import { Button, Icon, Menu } from 'antd';
import React, { Component } from 'react';

const SubMenu = Menu;

export default class SideBar extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="light"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span > <Icon type="mail" /> <span > Navigation One </span></span >
              }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
    );
  }
}
