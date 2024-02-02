import React, { useEffect, useState } from "react";
import { HashRouter, Link, NavLink, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/navigation.css";
import Dropdown from "react-bootstrap/Dropdown";
import Scroll from "react-scroll";
import logo from "../assets/images/KDPIT_OFF_LOGO.webp";
const ScrollLink = Scroll.ScrollLink;

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <div className="bg-white">
        <header
          className="container"
          style={{
            shadow: "none",
          }}
        >
          <nav className="nav">
            <div className="logo">
              <Link to="./home" className="charusat-main">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "12rem",
                  }}
                />
              </Link>
            </div>
            <div className="nav-links">
              <ul className={`links `}>
                <li
                  className={`link green-text`}
                  // onMouseOver={() => {
                  //   document.getElementById("Academics").style.display = "grid";
                  //   setActiveLink("Academics");
                  // }}
                  // onMouseOut={() => {
                  //   document.getElementById("Academics").style.display = "none";
                  // }}
                >
                  <Link
                    to="files\EVEN-SEM_BTech_IT_Booklet_2023-24.pdf"
                    target="_blank"
                    className={`${
                      activeLink === "Academics" ? "green-text" : "green"
                    }`}
                  >
                    ACADEMICS
                  </Link>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Admission").style.display = "grid";
                    setActiveLink("Admission");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Admission").style.display = "none";
                  }}
                >
                  <Link
                    to=""
                    className={`${
                      activeLink === "Admission" ? "green-text" : "green"
                    }`}
                  >
                    STUDENT CORNER
                  </Link>
                </li>

                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Research").style.display = "grid";
                    setActiveLink("Research");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Research").style.display = "none";
                  }}
                >
                  <Link
                    id="Research-link"
                    to=""
                    className={`${
                      activeLink === "Research" ? "green-text" : "green"
                    }`}
                  >
                    STUDENT ANNOUNCEMENT
                  </Link>
                </li>

                <li
                  className="link"
                 
                 
                >
                  <Link
                    id="KnowCHARUSAT-link"
                    to="https://admission.charusat.ac.in/"
                    className={`${
                      activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                    }`}
                  >
                    ADMISSION
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* <div
            className="menu-4"
            id="Academics"
            onMouseOver={() => {
              document.getElementById("Academics").style.display = "grid";
              setActiveLink("Academics");
            }}
            onMouseOut={() => {
              document.getElementById("Academics").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Course Module</h5>
                <div className="menu-items">
                  <h6>Semester 2</h6>
                  <Link
                   to="forms/Course Module/Sem-2/IT143 FUNDAMENTALS OF COMPUTER PROGRAMMING.html"
                    target="_blank"
                    className="menu-link"
                  >
                    IT143 FUNDAMENTALS OF COMPUTER PROGRAMMING
                  </Link>
                  <Link
                    to="forms/Course Module/Sem-2/CE144 OBJECT ORIENTED PROGRAMMING WITH C++.html"
                    target="_blank"
                    className="menu-link"
                  >
                    CE144 OBJECT ORIENTED PROGRAMMING WITH C++
                  </Link>
                </div>
                <div className="menu-items">
                  <h6>Semester 4</h6>

                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT254 COMPUTER ARCHITECTURE & MICROPROCESSOR INTERFACING
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT256 DATA STRUCTURES AND ALGORITHMS
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT2S7 DATABASE MANAGEMENT SYSTEM
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT255 Web Technologies
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="menu-items mt-5">
                <h6>Semester 6</h6>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT348 CRYPTOGRAPHY & NETWORK SECURITY
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT354 MACHINE LEARNING
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT355 SOFTWARE ENGINEERING
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT380 CYBER SECURITY
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT379 COMPUTER VISION
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT349 WIRELESS COMMUNICATION & MOBILE COMPUTING.html
                </Link>
              </div>
            </div>
            <Link
              to="http://172.16.11.116/LocalGuru/"
              target="_blank"
              className="menu-link"
            >
              <h5 className="menu-head">Syllabus</h5>
            </Link>
          </div> */}

          <div
            className="menu"
            id="Admission"
            onMouseOver={() => {
              document.getElementById("Admission").style.display = "grid";
              setActiveLink("Admission");
            }}
            onMouseOut={() => {
              document.getElementById("Admission").style.display = "none";
              setActiveLink("");
            }}
          >
           <div className="menu-div">
              {/* <Link to=""><h5 className="/research">Research Labs</h5></Link> */}
             <Link to="files\ODD-SEM-BTech-Academic-Calendar-2023-24-(June - Nov).pdf"> <h5 className="menu-head">Academic Calendar</h5></Link>
              <Link to="https://charusat.edu.in:912/eGovernance/"><h5 className="menu-head">E-Covernance</h5></Link>
              <Link to="https://charusat.edu.in:912/UniExamResult/"><h5 className="menu-head">Exam Result</h5></Link>
            </div>
          </div>
          <div
          // className="menu"
          // id="IQAC"
          // onMouseOver={() => {
          //   document.getElementById("IQAC").style.display = "grid";
          // }}
          // onMouseOut={() => {
          //   document.getElementById("IQAC").style.display = "none";
          // }}
          >
            {/* <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Academic Calendars</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    2021-22
                  </Link>
                  <Link to="" className="menu-link">
                    2020-21
                  </Link>
                  <Link to="" className="menu-link">
                    2019-20
                  </Link>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Academic & Administrative Audit</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    AAA Process
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link to="" className="menu-link">
                  17th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  16th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  15th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  14th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  13th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  12th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  11th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  10th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  9th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  8th IQAC Meeting Minutes
                </Link>
              </div>
            </div>

            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Accreditation & Ranking</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Best Practices</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Institutional Distinctiveness</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Feedback on Curriculum</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Student Satisfaction Survey</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    SSS Poster
                  </Link>
                  <Link to="" className="menu-link">
                    SSS Analysis
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div
            className="menu"
            id="CampusLife"
            onMouseOver={() => {
              document.getElementById("CampusLife").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("CampusLife").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">Activity & Events</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Student Activities & Events
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Student Clubs
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Boy's Hostel
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Staff Quarters
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Food / Canteen
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Transportation
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Recreation
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Helpline Contacts
                </Link>
              </div>
            </div>
          </div> */}

          <div
            className="menu11"
            id="Research"
            onMouseOver={() => {
              document.getElementById("Research").style.display = "grid";
              setActiveLink("Research");
            }}
            onMouseOut={() => {
              document.getElementById("Research").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">unit Test Time-table</h5>
            </div>
            
            
          </div>
            
          <nav className="mobile-nav"></nav>
        </header>

        {/* <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand to="#home">
              <Link to="./" class="charusat">
                CHARUSAT
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="#home">Home</Nav.Link>
                <Nav.Link to="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand to="#home">
              <Link to="./" className="charusat">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "15rem",
                  }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Dropdown.Item to="https://iqac.charusat.ac.in/0">Acedamics</Dropdown.Item>
                {/*  */}
                <NavDropdown title="Student Corner" id="basic-nav-dropdown">
                 
                    
                    
                      <Dropdown.Item to="https://admission2023.charusat.ac.in/">
                        Academic calender
                      </Dropdown.Item>
                      <Dropdown.Item>
                        E-Governance
                      </Dropdown.Item>
                      <Dropdown.Item to="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view">
                       Exam Results
                      </Dropdown.Item>
                    
                 
                </NavDropdown>
                <NavDropdown title="Student Announcement" id="basic-nav-dropdown">
                      <Dropdown.Item to="https://admission2023.charusat.ac.in/">
                       Unit-Test Time Table
                      </Dropdown.Item>
                </NavDropdown>
                <Dropdown.Item to="https://iqac.charusat.ac.in/0">Admission</Dropdown.Item>

                {/*  */}
                {/* <NavDropdown title="Campus Life" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Activity & Events
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        NCC@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        NSS@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Sports & Gym
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Student Activities & Events
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Student Clubs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Residences & Amenities
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        Girl's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Boy's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Staff Quarters
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">Food</Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Transportation
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Recreation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Student Helpline
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        Helpline Contacts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown> */}
                {/*  */}
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
