import { Link } from "react-router-dom";
import GoogleMap from "./googlemap";

const title = "Contact";
//const desc =  "Eduaid theme numb  er one world class university in the world There are student are studing always in this university for all time.";
// const courseTitle = "Courses";
const quickTitle = "Quick Links";
const googleMapTitle = "Map";
// const tweetTitle = "Recent Tweets";
const year = new Date().getFullYear();

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Smt. Kundanben Dinsha Patel Department of Information Technology Charotar University of Science and Technology,CHARUSAT Campus, Changa Taluka: Petlad, Dist: Anand Gujarat (India) 388 421",
  },
  {
    iconName: "icofont-phone",
    text: "+91 2697 265011/12",
  },
  {
    iconName: "icofont-envelope",
    text: "info@charusat.ac.in",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "",
    className: "instagram",
  },
  // {
  //     iconName: 'icofont-pinterest',
  //     siteLink: '#',
  //     className: 'pinterest',
  // },
];

// const courseList = [
//   {
//     text: "All Courses",
//     link: "#",
//   },
//   {
//     text: "Forms and Admision materials",
//     link: "#",
//   },
//   {
//     text: "Professional Courses",
//     link: "#",
//   },
//   {
//     text: "Course Outline",
//     link: "#",
//   },
//   {
//     text: "Policy",
//     link: "#",
//   },
//   {
//     text: "FAQs",
//     link: "#",
//   },
//   {
//     text: "Online Course",
//     link: "#",
//   },
// ];
const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
  },
  {
    text: "Pay Fees",
    link: "https://charusat.edu.in:912/FeesPaymentApp/",
  },
  {
    text: "Admissions",
    link: "https://charusat.ac.in/admission/",
  },
  {
    text: "Downloads",
    link: "https://charusat.ac.in/Downloads/",
  },
];

const footerbottomList = [
  {
    text: "Last Updated:",
    link: "#",
  },
];

const FooterThree = () => {
  return (
    <>
      <div className="news-footer-wrap grdnt-bg-custom">
        {/* <div className="fs-shape">
          <img
            src="assets/images/shape-img/03.png"
            alt="fst"
            className="fst-1"
          />
          <img
            src="assets/images/shape-img/04.png"
            alt="fst"
            className="fst-2"
          />
        </div> */}

        <footer className="style-2 mt-5">
          <div className="footer-top  padding-tb ">
            <div className="container">
              <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="footer-item our-address w-75">
                    <div className="footer-inner">
                    
                      <div className="footer-content">
                      <div className="title footer-title">
                          <h4 style={{ color: "#fff" }}>{title}</h4>
                        </div>
                        <div className="content">
                          {/* <p>{desc}</p> */}
                          <ul className="lab-ul office-address ">
                            {addressList.map((val, i) => (
                              <li key={i} style={{ color: "#fff" }}>
                                <i
                                  className={val.iconName}
                                  style={{ color: "#fff" }}
                                ></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                          <ul className="lab-ul social-icons">
                            {socialList.map((val, i) => (
                              <li key={i}>
                                <a
                                  href={val.siteLink}
                                  className={val.className}
                                >
                                  <i className={val.iconName}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{quickTitle}</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            {quickList.map((val, i) => (
                              <li key={i}>
                                <a href={val.link} style={{ color: "#fff" }}>
                                  {val.text}
                                </a>
                              </li>
                            ))}
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item twitter-post">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{googleMapTitle}</h4>
                        </div>
                        <div
                          className="content"
                          style={{ width: "80px !important;" }}
                        >
                          {/* <ul className="lab-ul"> */}
                          <GoogleMap />
                          <br />
                          <br />
                          {/* </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="section-wrapper">
                <p>
                  &copy; {year} <Link to="/">K D P I T</Link>{" "}
                </p>
                {/* <div className="footer-bottom-list">
                  {footerbottomList.map((val, i) => (
                    <a href={val.link} key={i} target="_blank" rel="noreferrer">
                      {val.text}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;
