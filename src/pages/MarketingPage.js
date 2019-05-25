import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBCol, MDBRow, MDBIcon, MDBJumbotron, MDBBtn, MDBContainer, MDBCardTitle, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText, MDBCard, MDBCardGroup, MDBCollapse } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MDBEdgeHeader style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }} />
        <MDBFreeBird>
        <MDBCard>
            <MDBCardBody>
                <h1 className="h1-responsive mb-2">Digital Marketing</h1>
                <hr></hr>
              <MDBCardText>
              <div class="row">
            <div class="col-lg-5 col-sm-12">
                <h5>Search Engine Optimization (SEO)</h5>
                <p>Increase the amount of organic traffic to your web property.</p> 
                <p>What will benefit?</p>
                <ul>
                    <li>Websites</li>
                    <li>Blogs</li>
                    <li>Landing pages</li>
                    <li>Keyword analysis</li>
                </ul>
                </div>
                <div class="col-lg-5 col-sm-12">
                <h5>Content Marketing</h5>
                <p>Use content assets to create brand awareness, lead generation, traffic growth, and increase customers. Understanding web friendly content and keywords.</p>

                <h5>Social Media Marketing</h5>
                <p>Use social media platforms tp promote company brand awareness. Determine best platform to drive traffic.</p> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5 col-sm-12">
                    <h5>Digital Ads</h5>
                    <p>Create campaigns to increase traffic to web properties. Pay-per-click (PPC) ads can help increase awareness and research habits of specific users.</p>
                    <p>Some platforms include:</p>
                    <ul>
                        <li>Google Adwords</li>
                        <li>Facebook</li> 
                        <li>Instagram</li> 
                        <li>linkedin</li>
                    </ul> 
                </div>
                <div class="col-lg-5 col-sm-12">
                        <h5>Marketing Automation</h5>
                        <ul>
                            <li>Email</li>
                            <li>Scheduled social media posts</li>
                            <li>Contact list management</li> 
                            <li>Campaign tracking</li>
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
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
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
