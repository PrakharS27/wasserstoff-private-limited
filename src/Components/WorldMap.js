import React from "react"
import { Annotation ,ComposableMap, Geographies, Geography,Marker ,ZoomableGroup } from "react-simple-maps"
import {geoWinkel3} from "d3-geo-projection";
import { useState } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function WorldMap() {

    const width = 900;
const height = 450;
const projection = geoWinkel3()
  .translate([width / 2, height / 2])
  .scale(140)

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }
  return (
    <div className="container-fluid">
        <ComposableMap width={width} height={height} projection={projection}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
      <Geographies geography={geoUrl} className="colorworld">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="cyan" stroke="white"/>
          ))
        }
    </Geographies>
 
      
      <Marker coordinates={[-103, 25]} fill="#777">
        <text textAnchor="middle" fill="blue">
          Mexico
        </text>
      </Marker>
      <Marker coordinates={[31.131302, 29.97648]} fill="#800000">
      <text textAnchor="middle" fill="blue">
          Giza
        </text>
      </Marker>
      <Marker coordinates={[-87.6501, 41.85]} fill="#800000">
      <text textAnchor="middle" fill="blue">
      
          Chicago
        </text>
      </Marker>
      <Marker coordinates={[90.407608, 23.811056]} fill="#800000">
      <text textAnchor="middle" fill="blue">
          Berlin
        </text>
      </Marker>
      <Marker coordinates={[121.46917, 31.224361]} fill="#800000">
      <text textAnchor="middle" fill="blue">
          Shanghai
        </text>
      </Marker>
      <Marker coordinates={[142.702789, -20.917574]} fill="#800000">
      <text textAnchor="middle" fill="blue">
          Queensland
        </text>
      </Marker>

      </ZoomableGroup>
    </ComposableMap>
    </div>
)
}