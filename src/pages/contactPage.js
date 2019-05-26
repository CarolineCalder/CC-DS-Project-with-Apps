import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBCol, MDBRow, MDBIcon, MDBJumbotron, MDBBtn, MDBContainer, MDBCardTitle, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText, MDBCard, MDBCardGroup, MDBCollapse, MDBMask } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader color="light-indigo"/>
        <MDBContainer>
          </MDBContainer>
      <MDBFreeBird>
        <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">
                  Contact Me
                  <hr className="my-4" />
              </MDBCardTitle>
                <p>
                  <span className="blue-text my-4 font-weight-bold">Email:</span> contact@carolinecalder.com
              </p>
              <p>
              <span className="blue-text my-4 font-weight-bold">Phone:</span> 403.909.0020
              </p>
                <MDBCardText>
                 
              </MDBCardText>
                
                <div className="pt-2">
                  
                </div>
                
              </MDBCardBody>
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
              <MDBBtn color="primary" size="md" href="/services/web">
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
              <MDBBtn color="primary" size="md" href="/services/Design">
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
              <MDBBtn color="primary" size="md" href="/services/marketing">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </MDBFreeBird>
      </div>
    );
  }
}

export default HomePage;
