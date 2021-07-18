import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllStates, setDist, setState } from "../../actions";
import "./style.css";

function Search() {
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedDist, setSelectedDist] = useState("Select District");
  const [showStates, setShowStates] = useState(false);
  const [showDist, setShowDist] = useState(false);

  useEffect(() => {
    async function get() {
      await dispatch(getAllStates());
    }
    get();
  }, []);

  useEffect(() => {}, [selectedState]);

  useEffect(() => {}, [selectedDist]);

  const dispatch = useDispatch();
  const states = useSelector((state) => state.states.states);
  const handleStateDropdownClick = () => {
    if (showDist) setShowDist(false);
    if (showStates) setShowStates(false);
    else setShowStates(true);
  };

  const handleDistDropdownClick = () => {
    if (showStates) setShowStates(false);
    if (selectedState !== "Select State") {
      if (showDist) setShowDist(false);
      else setShowDist(true);
    }
  };

  let myStates = [];
  let myDistricts = [];

  const displayStatesDropdown = () => {
    for (let state of states) {
      myStates.push(
        <>
          <li
            className="state-name"
            key={state._id}
            onClick={() => {
              if (showStates) setShowStates(false);
              setSelectedState(state.state);
              dispatch(setState(state.state));
            }}
          >
            {state.state}
          </li>
        </>
      );
    }
    return myStates;
  };

  const displayDistDropdown = (stateName) => {
    const data = states.filter((state) => state.state === stateName)[0]
      .districts;
    for (let dist of data) {
      myDistricts.push(
        <>
          <li
            className="state-name"
            key={dist}
            onClick={() => {
              if (showDist) setShowDist(false);
              setSelectedDist(dist);
              dispatch(setDist(dist));
            }}
          >
            {dist}
          </li>
        </>
      );
    }
    return myDistricts;
  };

  return (
    <>
      <Container className="search-container">
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <div className="select" onClick={() => handleStateDropdownClick()}>
              {selectedState}
              <i className="fas fa-caret-down"></i>
            </div>
            {showStates ? (
              <div className="state-names">
                <ul>{displayStatesDropdown()}</ul>
              </div>
            ) : null}
          </Col>
          <Col md={3}>
            <div className="select" onClick={() => handleDistDropdownClick()}>
              <i className="fas fa-caret-down"></i>
              {selectedDist}
            </div>
            {showDist ? (
              <div className="state-names">
                <ul>{displayDistDropdown(selectedState)}</ul>
              </div>
            ) : null}
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Search;
