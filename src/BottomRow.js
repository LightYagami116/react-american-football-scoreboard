import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(0);
  const [ballOn, setBall] = useState(0);
  const [toGo, setToGo] = useState(0);
  const [down, setDown] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className='customButton' onClick={() => setDown(down + 1)}>Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button className='customButton' onClick={() => setToGo(toGo + 1)}>To Go</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button className='customButton' onClick={() => setBall(ballOn + 1)}>Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className='customButton' onClick={() => setQuarter(quarter + 1)}>Change Quarter</button>
      </div>{/*end of quarter*/}
    </div>
  );
};

export default BottomRow;
