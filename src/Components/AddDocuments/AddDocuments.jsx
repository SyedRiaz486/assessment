import React from "react";
import classes from "./AddDocuments.module.css";
import { Col, Container, Row } from "react-bootstrap";
import upload from "../../assets/Images/uploadCloud.svg";
import Button from "../Button/Button";
import arrow from "../../assets/Images/Arrow_Right.svg";
import UpBtn from "../../assets/Images/UploadBtn.svg";
import avatar from "../../assets/Images/AvatarCircle.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loader from "../Loader/Loader";

const AddDocuments = () => {
  const [data, setData] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  const [firstUpload, setFirstUpload] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFormData = async () => {
    try {
      const response = await axios.get(
        "https://assessment-1e4d0-default-rtdb.firebaseio.com/userData.json"
      );
      const fetchedData = response.data;
      if (fetchedData) {
        const formDataArray = Object.keys(fetchedData).map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
        setData(formDataArray);
      }
    } catch (error) {
      alert(error, "Error Occured");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFirstUpload(file);
    }
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstUpload === "" && message === "" && subject === "") {
      return;
    }

    setLoading(true);

    try {
      let url_1 = "";
      let file_name = "";

      if (firstUpload) {
        const image1Ref = ref(storage, `docs/${firstUpload.name}`);
        await uploadBytes(image1Ref, firstUpload);
        url_1 = await getDownloadURL(image1Ref);
        file_name = await firstUpload.name;
      }

      const formData = {
        docType: file_name,
        subject,
        message,
      };

      axios
        .post(
          "https://assessment-1e4d0-default-rtdb.firebaseio.com/userData.json",
          formData
        )
        .then((response) => {
          clearFileInput();
          setFirstUpload(null);
          setSubject("");
          setMessage("");

          fetchFormData();
        });
    } catch (error) {
      alert(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  // For drag and drop start

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) {
      setFirstUpload(file);
    }
  };

  // For drag and drop end

  return (
    <Container fluid>
      <Row>
        <Col xs={9} className={classes.main_col_1}>
          <form onSubmit={handleSubmit}>
            <Container fluid className={classes.container}>
              <div className={classes.btn_container}>
                <Button type="button">
                  Free Trail <img src={arrow} alt="" />
                </Button>
                <Button type="button">Free Sign-Up</Button>
              </div>
              <div className={classes.add_doc}>
                <h1 className={classes.h1_style}>Add Documents</h1>

                <div
                  className={classes.box}
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <img src={upload} alt="" />
                  <p className={classes.para_1}>
                    Add documents using drag and drop or the button below
                  </p>
                  <p className={classes.para_2}>
                    {firstUpload && firstUpload.name}
                  </p>
                  <Button
                    className={classes.up_btn}
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <img src={UpBtn} alt="" />
                    Upload My Documents
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

              <div className={classes.field}>
                <h1 className={classes.h1_style}>Any Queries</h1>
                <label htmlFor="subject">Email Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Complete with IamSinger"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label className="pt-4" htmlFor="message">
                  Email Message
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Enter Message"
                />
                <Button className={classes.sub_btn} type="submit">
                  Submit
                </Button>
              </div>
            </Container>
          </form>
        </Col>
        <Col xs={3} style={{ paddingRight: 0 }}>
          <div className={classes.side_bar}>
            <h1>Recent Files</h1>
            {data &&
              data.map((data, index) => (
                <div key={index} className={classes.inner_box}>
                  <p>{data.subject}</p>
                  <div className={classes.details}>
                    <img src={avatar} alt="" />
                    <div className={classes.inner_details}>
                      <p>{data.docType}</p>
                      <div className={classes.inner_details_location}>
                        {/* <img src={location} alt="" /> */}
                        <p>{data.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddDocuments;
