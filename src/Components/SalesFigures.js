import React from 'react'
import { BarChart,Bar } from 'recharts'
const SalesFigures = () => {
  // Bar charts shows the sales figer data 
    const data = [{value: 15 },{value: 17 },{value: 19 },{value: 11 },{value: 15 },{value: 12 },{value: 27 },{value: 14 },{value: 11 },{value: 15 },{value: 12 },{value: 27 },{value: 14 },{value: 11 },{value: 15 }, {value: 12 },{value: 27 },{value: 14 }];
  return (
    <div className="barchart">
    {/* title of Bar chart  */}
      <div className="sales-figer">
        <h3 style={{ color: "#383874", fontWeight: "600" }}>
          <span style={{fontSize:"14px"}}>Sales Figures</span> <br /> <span>$10,549</span>
        </h3>
      </div>
      {/* Bar chart or Graph  */}
      <div className="graph" style={{ display: "flex" }}>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={191} height={41} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default SalesFigures
