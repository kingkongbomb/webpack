import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap";
export default () => {
  const [url, setUrl] = useState(
    ""
  );
  const [reqData, setReqData] = useState({ key: "", value: "" });
  const [resData, setResData] = useState("");
  const [loading, setLoading] = useState(false);

/*   useEffect(() => {
    console.log(reqData);
  }, [reqData]); */

  function post() {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({[reqData.key]:reqData.value}),
    })
      .then((res) => res.json())
      .then((result) => {
        setResData(result);
        setLoading(false);
      })
      .catch((err) => {
        setResData(err.toString());
        setLoading(false);
      });
  }

  return (
    <Container>
      <InputGroup className="mb-3" style={{ marginTop: "50px" }}>
        <FormControl
          placeholder="Endpoint API"
          value={url}
          onChange={(x) => setUrl(x.target.value)}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={post}>
            Post!
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Key"
          value={reqData.key}
          onChange={(newVal) =>
            setReqData((data) => {
              let newData = { ...data };
              newData.key = newVal.target.value;
              return newData;
            })
          }
        />
        <FormControl
          placeholder="Value"
          value={reqData.value}
          onChange={(newVal) => {
            setReqData((data) => {
              let newData = { ...data };
              newData.value = newVal.target.value;
              return newData;
            });
          }}
        />
      </InputGroup>

      <div>
        {loading ? (
          <Spinner animation="border" variant="primary" size="lg">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div>{resData}</div>
        )}
      </div>
    </Container>
  );
};
