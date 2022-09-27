import { TextField } from "@mui/material";
import { useState } from "react";

export default function ImageUrl() {
  const [imgUrl, setImgUrl] = useState(
    "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII"
  );

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e) => {
    let file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setImgUrl(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        id="asd"
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
      />

      {/* <img src={`data:image/png;base64,${imgUrl}`} /> */}
      <img style={{ maxWidth: 400, maxHeight: 400 }} src={imgUrl} />
      <TextField
        id="outlined-multiline-static"
        label="Base64"
        multiline
        rows={4}
        value={imgUrl}
      />
    </div>
  );
}
