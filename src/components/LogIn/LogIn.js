import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./logIn.scss";
import { mainLogo, undpLogo } from "../../utils";
import Layout from "../../Layout";

function LogIn() {
  const [required, setRequired] = useState(true);

  const navigate = useNavigate();
  const navigateHome = () => {
    if (required === true) {
      navigate("/home");
    } else {
      console.log("Enter remaining fields");
    }
  };
  const onFinish = (values) => {
    console.log("Values:", values);
  };

  return (
    <Layout>
      <div className="login-container">
        <div className="header">
          <img alt="EHS Logo" src={mainLogo} className="logo" />
          <img alt="EHS Logo" src={undpLogo} className="logo" />
        </div>
        <div className="form-container">
          <Form className="login-form" onFinish={onFinish}>
            <Typography.Title>
              {" "}
              Welcome to Egypt Horizon Scanner
            </Typography.Title>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                // className="login-form-button"
                onClick={navigateHome}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default LogIn;
