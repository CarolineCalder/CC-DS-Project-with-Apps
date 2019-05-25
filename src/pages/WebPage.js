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
                <h1 className="h1-responsive mb-2">Web Development</h1>
                <hr></hr>
              <MDBCardText>
                  <div class="row">
              <div class="col-lg-5 col-sm-12">
            <h5>Development options</h5>
              <ul>
                <li>CMS</li>
                <li>Open Source</li>
              </ul>

            <h5>SSL Certificates</h5>
            <p>Keep your website secure with the green lock. Especially important for ecommerce sites.</p>


            <h5>HTML Emails templates</h5>
            <p>Build custom brand aligned email templates for newsletters and promotions.</p>
            
            <h5>Hosting and Domain services</h5>
            <p>Secure domain and host website on shared or independent servers. Keep all services under one umbrella for consistency. </p>
            </div> 
            <div class="col-lg-5 col-sm-12">
            <h5>Event calendar integration</h5>
            <p>Put real time events into website to always keep users in the know. </p>

            <h5>Ecommerce</h5>
            <ul>
              <li>Shopify</li>
            </ul>

            <h5>Search</h5>
            <ul>
            <li>Google analytics integration</li> 
            <li>Google search console keywords</li>
            <li>Custom search options</li> 
          </ul>

            <h5>Page insights</h5>
            <p>Reduce bloat in website and create the fastest user experience possible to satisfy the user demand. </p>
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
