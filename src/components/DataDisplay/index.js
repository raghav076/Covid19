import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCases } from "../../actions/cases.action";
import DataCard from "../DataCard";
import "./style.css";

function DataDisplay() {
  const cityData = useSelector((state) => state.selectedData);
  const cases = useSelector((state) => state.cases);
  const [city, setCity] = useState("INDIA");
  useEffect(() => {
    cityData.dist
      ? setCity(cityData.dist)
      : cityData.state
      ? setCity(cityData.state)
      : setCity("INDIA");
  }, [cityData]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCases(cityData.state, cityData.dist));
  }, [cityData]);

  return (
    <>
      <Container className="data-container">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="selected-city">{city}</div>
          </Col>
          <Col md={4}></Col>
        </Row>
        <div className="last-updated">Last Updated: {cases.lastUpdated}</div>
        <Row className="data-row">
          {/* <Col md={2}></Col> */}
          <Col md={3}>
            <DataCard
              bgcolor="331427"
              color="#ae0c33"
              title="Confirmed"
              show="conf"
              value={cases.confirmed}
            />
          </Col>
          <Col md={3}>
            <DataCard
              bgcolor="132240"
              color="#0858b3"
              title="Active"
              show="hosp"
              value={cases.active}
            />
          </Col>
          <Col md={3}>
            <DataCard
              bgcolor="182829"
              color="#22743a"
              title="Recovered"
              show="heart"
              value={cases.recovered}
            />
          </Col>
          <Col md={3}>
            <DataCard
              bgcolor="1c1c2b"
              color="#6c757d"
              title="Deceased"
              show="dead"
              value={cases.deceased}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DataDisplay;
