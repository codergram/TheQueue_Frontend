import React, { useState, useEffect } from "react";

export default function Footer(props) {
  const covidDefault = {
    dailyInfected: 0,
    dailyRecovered: 0,
    intensive: 0,
    dailyDead: 0,
  };
  const { facade } = props;
  const [proxyData, setProxyData] = useState({...covidDefault});

  useEffect(() => {
    facade.getProxy((data) => {
      console.log(data);
      setProxyData({ ...data });
    });
  }, []);

  return (
    <div
      className="fixed-bottom"
      style={{ backgroundColor: "rgba(255,255,255, 0.9)" }}
    >
      <div className="container">
        <div className="row">
          {/* <div className="col-4 col-md-4 text-center"></div> */}
          <div className="col-12 col-md-12 text-center">
            <h6 style={{ fontSize: "80%" }}>Made with love by Codergram &#10084;</h6>
          </div>
          {/* <div className="col-4 col-md-4 text-center"></div> */}
        </div>

        {/* <br style={{lineHeight: "10%"}}/> */}

        {/* <div style={{ height: "3px" }}></div> */}

      </div>
    </div>
  );
}
