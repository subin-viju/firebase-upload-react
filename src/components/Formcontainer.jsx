import { useRef, useState } from "react";
import uploadToFirebase from "../helpers/Firebaseupload";

function Formcontainer() {
  const fileRef = useRef();
  const [url, setUrl] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const folderName = "documents";
    const file = fileRef.current.files[0];
    const url = await uploadToFirebase(file, folderName);
    setUrl(url);
  }
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Add File</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" ref={fileRef} />
          <button>Submit</button>
        </form>
      </div>
      {url && (
        <div style={{width:'150px'}}>
          <img src={url} alt="altImg" />
        </div>
      )}
    </div>
  );
}

export default Formcontainer;
