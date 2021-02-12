import React, {  useState } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../styles/weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [notFound, setFound] = useState(false);

  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [humid, setHumid] = useState("");
  const [results, setResults] = useState(false);

  //For testing only, simulates click on "Search button" on mount
  //useEffect(() => getWeather(), []);

  const getWeather = () => {
    //Start loader
    setLoading(true);
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=81c261eabe73da11a00f5c11b5ef6f65`);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=81c261eabe73da11a00f5c11b5ef6f65`
    )
      .then((val) => val.json())
      .then((result) => {
        //Error
        if (result.cod !== 200) {
          setMessage(result.message);
          //Toggle between Error msg and results
          setFound(true);
          setResults(false);
          //Stop loader
          setLoading(false);
        }
        //Fetch Success
        else {
          setHumid(result.main.humidity);
          setTemp(
            `${Math.round(result.main.temp_min - 273.15)}°C ~ ${Math.round(
              result.main.temp_max - 273.15
            )}°C`
          );

          let weatherClass = "others";
          if (result.weather[0].main.toLowerCase().includes("cloud")) {
            weatherClass = "cloud";
          } else if (result.weather[0].main.toLowerCase().includes("rain")) {
            weatherClass = "rain";
          } else if (result.weather[0].main.toLowerCase().includes("clear")) {
            weatherClass = "clear";
          }
          setWeather([
            result.weather[0].main,
            result.weather[0].description,
            weatherClass,
          ]);
          //Toggle between Error msg and results
          setResults(true);
          setFound(false);
          //Stop loader
          setLoading(false);
        }
      });
  };
  return (
    <Container>
      <h1 className="weather-title">Today's Weather</h1>
      {notFound && <Alert variant="danger">{message}</Alert>}
      <Row style={{marginBottom:'40px'}}>
        <Col xs={12} md={4}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>City:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? getWeather() : null)}
            />
          </InputGroup>
        </Col>
        <Col xs={12} md={4}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Country:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? getWeather() : null)}
            />
          </InputGroup>
        </Col>
        <Col xs={12} md={4}>
          {loading ? (
            <div className="weather-loader"></div>
          ) : (
            <Button onClick={getWeather}>Search</Button>
          )}
        </Col>
      </Row>
      <>
        {results && (
          <>
            <Row style={{marginBottom:'20px'}}>
              <Col xs="auto">
                <div className={weather[2]}></div>
              </Col>
              <Col>
                <h1>{weather[0]}</h1>
                <h2>{weather[1]}</h2>
              </Col>
            </Row>
            <div>Temperature: {temp}</div>
            <div>Humidity: {humid}%</div>
          </>
        )}
      </>
    </Container>
  );
}
