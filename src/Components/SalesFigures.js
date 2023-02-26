import React from 'react'
import { BarChart,Bar } from 'recharts'
const SalesFigures = () => {
  // bar charts shows the sales figer data 
    const data = [
      {value: 15 },
      {value: 17 },
      {value: 19 },
      {value: 11 },
      {value: 15 },
      {value: 12 },
      {value: 27 },
      {value: 14 },
      {value: 11 },
      {value: 15 },
      {value: 12 },
      {value: 27 },
      {value: 14 },
      {value: 11 },
      {value: 15 },
      {value: 12 },
      {value: 27 },
      {value: 14 },
    ];
  return (
    <div className="barchart">
    {/* title of bar chart  */}
      <div className="sales-figer">
        <h3 style={{ color: "#383874", fontWeight: "600" }}>
          <span style={{fontSize:"14px"}}>Sales Figer</span> <br /> <span>$10,430</span>
        </h3>
      </div>
      {/* bar chart or graph  */}
      <div className="graph" style={{ display: "flex" }}>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default SalesFigures
