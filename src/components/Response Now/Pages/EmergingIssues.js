import React, { useEffect, useState } from "react";
import { issues } from "./../../../assets/pillarsData";
import { Button, Modal, Typography, Checkbox, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import ResponseNavbar from "../ResponseNavbar";

function EmergingIssues() {
  const [emergingIssues, setEmergingIssues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState([]);
  const [textField, setTextField] = useState("");

  const showModal = (issue) => {
    setIsModalOpen(true);
    setSelectedIssue(issue);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setTextField("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTextField("");
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeTextArea = (e) => {
    setTextField(e.target.value);
  };

  useEffect(() => {
    setEmergingIssues(issues);
  }, [emergingIssues]);

  return (
    <div className="response-body-container">
      <div className="response-navbar-container">
        <ResponseNavbar />
      </div>
      <div className="digital-avatar-def goals-container">
        <h2> Emerging Issues of the Month</h2>
        <div className="month-issues-container">
          <div>
            {emergingIssues.map((issue, index) => {
              return (
                <div className="issue-holder">
                  <span>
                    <strong> {issue.title}: </strong>
                  </span>
                  <span className="issue-bar">
                    {" "}
                    {issue.impact}{" "}
                    <Button
                      onClick={() => showModal(issue)}
                      icon={<InfoCircleOutlined />}
                      key={index}
                    />
                  </span>
                </div>
              );
            })}
            <Modal
              title={selectedIssue.title}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <Typography>
                  {" "}
                  <strong> Impact: </strong> {selectedIssue.impact}
                </Typography>
                <br />
                <Typography>
                  {" "}
                  <strong> Details:</strong> {selectedIssue.description}
                </Typography>
              </div>
              <br />
              <div className="modal-opp-container">
                <span>
                  {" "}
                  <strong>Is it ...</strong>
                </span>
                <Checkbox onChange={onChange}>
                  <>an Opportunity?</>{" "}
                </Checkbox>
                <span>
                  {" "}
                  <strong> OR </strong>
                </span>
                <Checkbox onChange={onChange}>
                  <> a Threat? </>
                </Checkbox>
              </div>
              <br />
              <Input.TextArea
                placeholder="Add More Details For Your Choice..."
                value={textField}
                onChange={onChangeTextArea}
              >
                Reasons:
              </Input.TextArea>
            </Modal>
          </div>
        </div>

        {/* Emerging Issues of the Region */}
        <h2>
          <strong> Emerging Issues of the Region</strong>{" "}
        </h2>
        <div className="month-issues-container">
          <div>
            {emergingIssues.map((issue, index) => {
              return (
                <div className="issue-holder">
                  <span>
                    <strong> {issue.title}: </strong>
                  </span>
                  <span className="issue-bar">
                    {" "}
                    {issue.impact}{" "}
                    <Button
                      onClick={() => showModal(issue)}
                      icon={<InfoCircleOutlined />}
                      key={index}
                    />
                  </span>
                </div>
              );
            })}
            <Modal
              title={selectedIssue.title}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <Typography>
                  {" "}
                  <strong> Impact: </strong> {selectedIssue.impact}
                </Typography>
                <br />
                <Typography>
                  {" "}
                  <strong> Details:</strong> {selectedIssue.description}
                </Typography>
              </div>
              <br />
              <div className="modal-opp-container">
                <span>
                  {" "}
                  <strong>Is it ...</strong>
                </span>
                <Checkbox onChange={onChange}>
                  <>an Opportunity?</>{" "}
                </Checkbox>
                <span>
                  {" "}
                  <strong> OR </strong>
                </span>
                <Checkbox onChange={onChange}>
                  <> a Threat? </>
                </Checkbox>
              </div>
              <br />
              <Input.TextArea
                placeholder="Add More Details For Your Choice..."
                value={textField}
                onChange={onChangeTextArea}
              >
                Reasons:
              </Input.TextArea>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergingIssues;
