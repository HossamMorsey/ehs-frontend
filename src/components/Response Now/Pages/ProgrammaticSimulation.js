import React, { useState } from "react";
import ResponseNavbar from "../ResponseNavbar";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { firstOutput, secondOutput1, secondOutput2 } from "../../../utils";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function ProgrammaticSimulation() {
  const [firstOutputVisible, setFirstOutputVisible] = useState(false);
  // const [secondOutputVisible, setSecondOutputVisible] = useState(false);

  // const handleSubmitForm = () => {
  //   setFirstOutputVisible(true);
  // };
  return (
    <div className="response-body-container">
      <div className="dimensions-container">
        <ResponseNavbar />
      </div>
      <div className="content-section">
        {/* <span> 1. Input</span> */}
        {!firstOutputVisible && (
          <Form
            {...formItemLayout}
            // variant="filled"
            style={{
              width: "50%",
            }}
          >
            <Form.Item
              label="Theme"
              name="theme"
              rules={[
                {
                  required: true,
                  message: "Please select a theme!",
                },
              ]}
            >
              <Select
                placeholder="Theme"
                options={[
                  {
                    value: "Health",
                    label: "Health",
                  },
                  {
                    value: "Environment",
                    label: "Environment",
                  },
                  {
                    value: "Economy",
                    label: "Economy",
                  },
                  {
                    value: "Agriculture",
                    label: "Agriculture",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
                placeholder="Amount in USD or Euros"
              />
            </Form.Item>

            <Form.Item
              label="Timeline"
              name="timeline"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                placeholder="Duration in Months"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Location (County)"
              name="Location(County)"
              rules={[
                {
                  required: true,
                  message: "Please select Location (County)!",
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: "Cairo",
                    label: "Cairo",
                  },
                  {
                    value: "Giza",
                    label: "Giza",
                  },
                  {
                    value: "Alexandria",
                    label: "Alexandria",
                  },
                  {
                    value: "Asyut",
                    label: "Asyut",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Location (City)"
              name="Location(County)"
              rules={[
                {
                  required: true,
                  message: "Please select Location (City)!",
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: "Cairo",
                    label: "Maadi",
                  },
                  {
                    value: "Giza",
                    label: "Nasr City",
                  },
                  {
                    value: "Alexandria",
                    label: "Boulak",
                  },
                  {
                    value: "Asyut",
                    label: "Sheraton",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Location (Admin Unit)"
              name="Location(Admin Unit)"
              rules={[
                {
                  required: true,
                  message: "Please select Location (County)!",
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: "Cairo",
                    label: "Kesm Awal Maadi",
                  },
                  {
                    value: "Giza",
                    label: "Olympic City",
                  },
                  {
                    value: "Alexandria",
                    label: "Radar Street",
                  },
                  {
                    value: "Asyut",
                    label: "Hadayk Maadi",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Intervention Description:"
              name="TextArea"
              rules={[
                {
                  required: true,
                  message: "Please add your Intervention Description!",
                },
              ]}
            >
              <Input.TextArea placeholder="ChatGPT box, controlled by criteria set questions, limited to one paragraph)" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button
                type="primary"
                onClick={() => setFirstOutputVisible(true)}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
        {firstOutputVisible && (
          <div>
            <h4
              style={{ display: "table-cell", padding: "10px", margin: "10px" }}
            >
              OutPut:
            </h4>
            <img
              style={{ width: "90%" }}
              src={firstOutput}
              alt="First OutPut"
            />
            <h5
              style={{ display: "table-cell", padding: "10px", margin: "10px" }}
            >
              {" "}
              Curated Response Now
            </h5>
            <img
              style={{ width: "90%" }}
              src={secondOutput1}
              alt="First OutPut"
            />
            <h5
              style={{ display: "table-cell", padding: "10px", margin: "10px" }}
            >
              {" "}
              Curated Response Now
            </h5>

            <img
              style={{ width: "90%" }}
              src={secondOutput2}
              alt="First OutPut"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgrammaticSimulation;
