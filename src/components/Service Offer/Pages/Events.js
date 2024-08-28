import React from "react";
import ServiceNavbar from "../ServiceNavbar";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function Events() {
  return (
    <div className="response-body-container">
      <div className="response-navbar-container">
        <ServiceNavbar />
      </div>
      <div className="digital-avatar-def goals-container">
        <Button icon={<PlusOutlined />}> Add Event </Button>
      </div>
    </div>
  );
}

export default Events;
