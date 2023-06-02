import {
    //Navbar,
    Container,
    Nav,
    //NavDropdown,
    Carousel,
    Row,
    Col,
    Card,
    Button,
    //Figure,
    // Pagination,
  } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import React, { useEffect } from 'react';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';
import { Link } from "react-router-dom";
  
  const firebaseConfig = {
    // Your Firebase config here
    apiKey: "AIzaSyBm6S_Mbqjhefzpu4g-O8N_X1yvld1f_oI",
  authDomain: "realtime1-299f1.firebaseapp.com",
  databaseURL: "https://realtime1-299f1-default-rtdb.firebaseio.com",
  projectId: "realtime1-299f1",
  storageBucket: "realtime1-299f1.appspot.com",
  messagingSenderId: "375706491870",
  appId: "1:375706491870:web:a25785c309e9e9ab1a1b4f"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  
  function First() {
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      const devicesRef = db.collection("devices");
  
      devicesRef.doc("device")
        .get()
        .then(function (doc) {
          if (doc.exists) {
            const data = doc.data();
            const new1 = data.new1;
            const new2 = data.new2;
            const new3 = data.new3;
  
            const availableSpan1 = document.getElementById("Available1");
            availableSpan1.textContent = new1;
            const availableSpan2 = document.getElementById("Available2");
            availableSpan2.textContent = new2;
            const availableSpan3 = document.getElementById("Available3");
            availableSpan3.textContent = new3;
          } else {
            console.log("Document not found!");
          }
        })
        .catch(function (error) {
          console.error("Error fetching document: ", error);
          alert("Error fetching document. Please connect with internet!");
        });
    }
    return (
      <>
        {/* <Header /> */}
        <main>
          <Container style={{ marginTop: `30px` }}>
            <Nav variant="pills" defaultActiveKey="/home" style={{ float: `right` }}>
              <Nav.Item>
                <Nav.Link href="/login" style={{backgroundColor:`blue`,color:`white`}}>Administrator Login</Nav.Link>
              </Nav.Item>
            </Nav>
            <Carousel style={{ height: '400px', width: '800px', margin: `auto`, marginBottom: `30px`, marginTop: `30px`,backgroundColor:`black` }}>
              <Carousel.Item interval={1000} >
                <img
                  className="d-block "
                  src="assets/workstation.jpg"
                  alt="First slide"
                  style={{ width: `300px`, height: `400px`, opacity: `50%`,margin:`auto` }}
                />
                <Carousel.Caption>
                  <h3>NVIDIA Workstation</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block "
                  src="assets/Jetson-Nano-DevKit.webp"
                  alt="Second slide"
                  style={{ width: `800px`, height: `400px`, opacity: `60%` }}
                />
                <Carousel.Caption>
                  <h3>NVIDIA Jetson NanoDevloper Kit</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="assets/maxresdefault.jpg"
                  alt="Third slide"
                  style={{ width: `800px`, height: `400px`, opacity: `60%` }}
                />
                <Carousel.Caption>
                  <h3>NVIDIA DGX Station A100</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
  
          <Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-around">
                  <Card style={{ width: "26rem" }}>
                    <Card.Img
                      variant="top"
                      src="assets/workstation.jpg"
                      style={{width:`300px`,height:`400px`,margin:`auto`}}
                    />
                    <Card.Body>
                      <Card.Title>NVIDIA Workstation</Card.Title>
                      <Card.Text>
                        <br></br>
                        <span style={{fontWeight:`bold`}}>Processor:</span>Intel Xeon 4210R, 2.4GHz<br></br>
                       <span style={{fontWeight:`bold`}}>Memory:</span>32GB<br></br>
                       <span style={{fontWeight:`bold`}}>GPU Features:</span>NVIDIA RTX A4000<br></br>
                       <span style={{fontWeight:`bold`}}>GPU Memory:</span>16GB GDDR6 with error-correction code (ECC)<br></br>
                       <span style={{fontWeight:`bold`}}>Display Ports:</span> 4x DisplayPort 1.4<br></br>
                       <span style={{fontWeight:`bold`}}>Max Power Consumption:</span> 140 W<br></br>
                       <span style={{fontWeight:`bold`}}>Graphics Bus:</span> PCI Express Gen 4 x 16<br></br>
                       <span style={{fontWeight:`bold`}}>Form Factor:</span> 4.4” (H) x 9.5” (L) Single Slot<br></br>
                       <span style={{fontWeight:`bold`}}>Thermal:</span>Active<br></br>
                       <span style={{fontWeight:`bold`}}>VR Ready:</span>Yes<br></br>
                        <br></br>
                        <br></br>
  
                        <span style={{ fontSize: `20px`, fontWeight: `bold` }}>Currently Available device:</span> <span style={{fontSize:`30px`,fontWeight:`bold`,color:`green`}} id="Available1"></span>
                      </Card.Text>
                     <Link to="/req1"><Button variant="primary">Send Request</Button></Link> 
                    </Card.Body>
                  </Card>
  
                  <Card style={{ width: "26rem" }}>
                    <Card.Img
                      variant="top"
                      src="assets/kit.jpg"
                    />
                    <Card.Body>
                      <Card.Title>NVIDIA Jetson NanoDevloper Kit</Card.Title>
                      <Card.Text>
                        <br></br>
                       <ul>
                        <li>5V 4A Adapter for Jetson Nano</li>
                        <li>San disk class 10 16GB Micro SD Card</li>
                        <li>Intel AC8265 Wifi and Bluetooth Module with Antenna</li>
                        <li>IMX219 – 77FoV Camera</li>
                        <li>HDMI Cable</li>
                        </ul> 
                        <br></br>
  
                        <span style={{ fontSize: `20px`, fontWeight: `bold` }}>Currently Available device:</span> <span style={{fontSize:`30px`,fontWeight:`bold`,color:`green`}} id="Available2"></span>
                      </Card.Text>
                      <Link to="/req2"><Button variant="primary">Send Request</Button></Link> 
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "26rem" }}>
                    <Card.Img
                      variant="top"
                      src="assets/dgx.jpg"
                      style={{height:`305px`}}
                    />
                    <Card.Body>
                      <Card.Title>NVIDIA DGX Station A100</Card.Title>
                      <Card.Text>
                      <br></br>
                        <span style={{fontWeight:`bold`}}>Processor:</span> Single AMD 7742, 64 cores, 2.25 GHz (base)–3.4 GHz (max
                        boost) <br></br>
                       <span style={{fontWeight:`bold`}}>System Memory:</span>  512 GB DDR4<br></br>
                       <span style={{fontWeight:`bold`}}>GPU:</span>  4x NVIDIA A100 40 GB GPUs (GPU Memory: 160 GB Total
                        System)<br></br>
                       <span style={{fontWeight:`bold`}}>Performance:</span>  2.5 peta FLOPS AI 5 peta OPS INT8<br></br>
                       <span style={{fontWeight:`bold`}}>Storage: OS:</span>  1x 1.92 TB NVME drive Internal storage: 7.68 TB U.2
                        NVME drive<br></br>
                       <span style={{fontWeight:`bold`}}>System Network:</span>  Dual-port 10Gbase-T Ethernet LAN Single-port 1Gbase-
                        T Ethernet BMC management port<br></br>
                       <span style={{fontWeight:`bold`}}>OS Support:</span>  Ubuntu Linux<br></br>
                       <span style={{fontWeight:`bold`}}>System Power Usage:</span>  1.5 kW at 100–120 Vac<br></br>
                       <span style={{fontWeight:`bold`}}>Display:</span>  4 GB GPU memory, 4x Mini DisplayPort<br></br>
                       <span style={{fontWeight:`bold`}}>Operating Temperature:</span>  5–35 ºC (41–95 ºF)<br></br>
                        <br></br>
                        <br></br>
  
                        <span style={{ fontSize: `20px`, fontWeight: `bold` }}>Currently Available device:</span><span style={{fontSize:`30px`,fontWeight:`bold`,color:`green`}} id="Available3"></span>
                      </Card.Text>
                      <Link to="/req3"><Button variant="primary" >Send Request</Button></Link> 
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
        
      </>
    );
  }
  
  export default First;
  