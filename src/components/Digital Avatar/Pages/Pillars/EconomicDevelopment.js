import React, { useState, useEffect } from "react";
import DimensionsNavbar from "../../DimensionsNavbar";
import { economicDevelopment } from "../../../../assets/pillarsData";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Typography, Input, Select, Button, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { saveAs } from "file-saver";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const { Search } = Input;
const downloadFile = (data, filename) => {
  saveAs(data, filename);
};

function EconomicDevelopment() {
  const [economicDevelopmentIndicators, setEconomicDevelopmentIndicators] =
    useState([]);
  const [filteredIndicators, setFilteredIndicators] = useState([]);

  // For the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    //gets the indicators with every load
    // setJsonDimension(Dimensions.Dimensions);
    setEconomicDevelopmentIndicators(economicDevelopment);
    setFilteredIndicators(economicDevelopmentIndicators);

    // checking if it works from json file
  }, [economicDevelopmentIndicators]);

  // Filter with data type handler
  const handleChange = (value) => {
    setFilteredIndicators(economicDevelopmentIndicators);

    const filtered = economicDevelopmentIndicators.filter((indicator) =>
      indicator?.type.includes(value)
    );
    setFilteredIndicators(filtered);
    if (value === "Both" || value === "Select") {
      setFilteredIndicators(economicDevelopmentIndicators);
    }
    console.log(`selected ${value}`);
  };

  // Filtering search area handler
  const onSearch = (value, _e) => {
    //
    setFilteredIndicators(economicDevelopmentIndicators);

    const searched = economicDevelopmentIndicators.filter((indicator) =>
      indicator?.name.toLowerCase().includes(value)
    );
    setFilteredIndicators(searched);

    // console.log("WHAT !!", info?.source, value);
  };

  // Filtering using source button.
  const handleOnClickFilterSource = (source) => {
    console.log("Source, ", source);
    setFilteredIndicators(economicDevelopmentIndicators);
    const sourced = economicDevelopmentIndicators.filter((indicator) =>
      indicator?.source.includes(source)
    );
    setFilteredIndicators(sourced);

    if (source === "reset") {
      setFilteredIndicators(economicDevelopmentIndicators);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="dimensions-container">
          <DimensionsNavbar />
        </div>
        <div className="digital-avatar-def">
          <div className="sources-header">
            <span>Sources:</span>
            <div className="sources-container">
              {filteredIndicators.map((indicator) => {
                return (
                  <Button
                    className="btn"
                    onClick={() => handleOnClickFilterSource(indicator?.source)}
                  >
                    {indicator?.source}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="options-container">
            <p style={{ color: "#716C6C" }}>
              {" "}
              Our indicators are divided into Qualitative, Quantitative, or
              Both. You can filter them accordingly.
            </p>

            <Select
              onChange={handleChange}
              defaultValue="Select"
              // popupClassName="Filter By:"
              title="Filter By:"
              size="large"
              options={[
                {
                  value: "Select",
                  label: "Select",
                },
                {
                  value: "Qualitative",
                  label: "Qualitative",
                },
                {
                  value: "Quantitative",
                  label: "Quantitative",
                },
                {
                  value: "Both",
                  label: "Both",
                },
              ]}
            />
            <div className="search-bar">
              <Search
                placeholder="Search ..."
                size="large"
                onSearch={onSearch}
                enterButton
                allowClear
              />
            </div>
            <Button
              className="btn"
              style={{
                background: "#A2E2FD",
              }}
              onClick={() => handleOnClickFilterSource("reset")}
            >
              Reset
            </Button>
          </div>

          <div className="indicators-container scrollable-div">
            <Collapse
              bordered={true}
              size="large"
              expandIconPosition="start"
              style={{
                width: "100%",
              }}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              {filteredIndicators.map((indicator, index) => {
                return (
                  <CollapsePanel
                    style={{
                      // background:"#A2E2FD",
                      // contentBg: "#A2E2FD",
                      fontWeight: "bolder",
                      width: "100%",
                    }}
                    key={index}
                    header={indicator.name}
                  >
                    {indicator?.images.length ? (
                      <div className="indicators-container">
                        {indicator?.images.map((image, index) => {
                          return (
                            <div className="image-indicator">
                              <Zoom>
                                <img
                                  src={image}
                                  className="img"
                                  alt={indicator.name + " " + (index + 1)}
                                />
                              </Zoom>
                              <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                size="middle"
                                onClick={() =>
                                  downloadFile(image, indicator.name)
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="description-container">
                        <Typography.Text>
                          {indicator.description}. {"  "}
                          <Button type="dashed" onClick={showModal}>
                            Explore our dataset
                          </Button>
                        </Typography.Text>
                        <Modal
                          title={indicator.name}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          {indicator.links.map((link, i) => {
                            return (
                              <div style={{ display: "flex" }}>
                                <Typography.Link href={link} target="_blank">
                                  Source no. {i + 1}
                                </Typography.Link>
                              </div>
                            );
                          })}
                        </Modal>
                      </div>
                    )}
                  </CollapsePanel>
                );
              })}
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default EconomicDevelopment;
