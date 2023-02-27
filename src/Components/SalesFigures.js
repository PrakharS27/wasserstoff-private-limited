import React from 'react'
import { BarChart,Bar } from 'recharts'
const SalesFigures = () => {
    const data = [{value: 15 },{value: 17 },{value: 19 },{value: 11 },{value: 15 },{value: 12 },{value: 27 },{value: 14 },{value: 11 },{value: 15 },{value: 12 },{value: 27 },{value: 14 },{value: 11 },{value: 15 }, {value: 12 },{value: 27 },{value: 14 }];
  return (
    <div className="barchart">
      <div className="sales-figuers">
        <h3 style={{ color: "#383874", fontWeight: "600" }}>
          <span style={{fontSize:"14px"}}>Sales Figures</span> <br /> <span>$10,549</span>
        </h3>
      </div>
      <div className="graph1" style={{ display: "flex" }}>
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
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default SalesFigures
