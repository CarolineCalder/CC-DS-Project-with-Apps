import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBCol, MDBRow, MDBIcon, MDBJumbotron, MDBBtn, MDBContainer, MDBCardTitle, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText, MDBCard, MDBCardGroup, MDBCollapse } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MDBEdgeHeader style={{ backgroundImage: `url(https://carolinecalder.com/img/web-code-bg.png)` }} />
        <MDBFreeBird>
        <MDBCard>
            <MDBCardBody>
                <h1 className="h1-responsive mb-2">Responsive Web Design</h1>
                <hr></hr>
              <MDBCardText>
              <div class="row">
          <div class="col-lg-5 col-sm-12">
            <p>Designing for multiple screed widths and devices to create a seamless user experience across the board. Ensure the most relevant information is accessible for every user regardless of medium used </p>

            <h5>User Experience</h5>
            <p>designing based on the type of user visiting the site. Asking the questing “What are the needs of our customer?” and incorporating that into the overall design. </p>
            </div>
            <div class="col-lg-5 col-sm-12">
            <h5>Testing</h5>
            <p>Testing is one of the most important steps in responsive design. Devices and browsers all behave differently, so all designs have to be tested in multiple areas.</p>
            <p>Testing examples:</p>
            <ul>
              <li>Multiple devices</li>
              <li>Browsers</li>
              <li>Operating systems</li>
            </ul>
          </div>
        </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </MDBFreeBird>
        <MDBContainer>
        <MDBCardGroup deck className="mt-3">
          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-web.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Web Development</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-design.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Responsive Design</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-marketing.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Digital Marketing</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
