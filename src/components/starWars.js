import React, { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, } from "recharts";
import "../styles/starWars.css";

export default function () {
  const [rawSpeciesData, setRawSpeciesData] = useState([]);
  const [species, setSpecies] = useState([]);
  const [peopleData, setPeopleData] = useState({});
  const [graphData, setGraphData] = useState({});
  const [showGraph, setShowGraph] = useState(false);
  const [selectLoaded, setSelectLoaded] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/species")
      .then((res) => res.json())
      .then((result) => {
        //Save Species Data into rawSpeciesData
        setRawSpeciesData(...rawSpeciesData, result.results);

        //Get all Species names, for the dropdown menu
        let newSpecies = [];
        result.results.forEach((x) => {
          newSpecies.push({ name: x.name, people: [] });
        });
        setSpecies([...species, ...newSpecies]);

        //Turn off loader
        setSelectLoaded(true);

        //Fetch the PEOPLE data for the first element in the array
        Promise.all(result.results[0].people.map((x) => fetch(x)))
          .then((res) => Promise.all(res.map((res) => res.json())))
          .then((pData) => {
            console.log(pData);
            //Save peopleData to state
            setPeopleData({ ...peopleData, [result.results[0].name]: pData });
            //Set graph data
            setGraphData({
              name: pData.map((x) => {
                return {
                  ...x,
                  height: parseInt(x.height),
                  mass: parseInt(x.mass),
                };
              }),
            });
            //Show Graph
            setShowGraph(true);
          });
      });
  }, []);

  const toggleSpecies = (speciesName) => {
    //Check for cached data
    if (peopleData[speciesName]) {
      //Render Data in graph
      setGraphData({
        name: peopleData[speciesName].map((x) => {
          return { ...x, height: parseInt(x.height), mass: parseInt(x.mass) };
        }),
      });
    }
    //No data cached, fetch it
    else {
      //Hide Graph
      setShowGraph(false);
      for (let i = 0; i < rawSpeciesData.length; i++) {
        //Find which element speciesName is in
        if (rawSpeciesData[i].name == speciesName) {
          //Fetch data from "people"
          Promise.all(rawSpeciesData[i].people.map((x) => fetch(x)))
            .then((res) => Promise.all(res.map((res) => res.json())))
            .then((pData) => {
              //Save peopleData to state
              setPeopleData({ ...peopleData, [rawSpeciesData[i].name]: pData });

              //Render Data in graph
              setGraphData({
                name: pData.map((x) => {
                  return {
                    ...x,
                    height: parseInt(x.height),
                    mass: parseInt(x.mass),
                  };
                }),
              });

              //Show Graph
              setShowGraph(true);
            });
          //Exit the for loop
          return;
        }
      }
    }
  };

  return (
    <><h1 className='title'>Star Wars Universe</h1>
      <div className="container">
      
        <div className="top-bar">
          <h4>
            <span>Pick a species </span>
            {!selectLoaded ? (
              <div className="small-loader"></div>
            ) : (
              <select onChange={(x) => toggleSpecies(x.target.value)}>
                {species.map((species, index) => (
                  <option key={index} value={species.name}>
                    {species.name}
                  </option>
                ))}
              </select>
            )}
          </h4>
        </div>
        {showGraph ? (
          <ResponsiveContainer width="100%" aspect={3}>
            <ScatterChart>
              <Scatter data={graphData.name} fill="var(--theme)" size="2px" />
              <XAxis dataKey="height" unit="cm" label={{ value: "Height", position: "insideBottomRight" }} type="number" domain={[0, 300]} height={50} />
              <YAxis dataKey="mass" unit="kg" label={{ value: "Mass", angle: -90, position: "insideLeft" }} type="number" domain={[0, 140]} width={70} />
              <Tooltip content={({ payload, label, active }) => { if (active) { return ( <> <div style={{ border: "1px solid black", padding: "20px", background: "black", color:'yellow'}} > <h2 style={{ textDecoration: "underline" }} >{`${payload[0].payload.name}`}</h2> <h3>{`${payload[0].payload.gender}`}</h3> </div> </> ); } return null; }} />
              <CartesianGrid strokeDasharray="5 5" />
            </ScatterChart>
          </ResponsiveContainer>
        ) : (
          <div className="big-loader"></div>
        )}
      </div>
    </>
  );
}
