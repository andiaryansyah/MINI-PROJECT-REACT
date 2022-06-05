import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "../../assets/styles/index.scss";
import Homepage1 from "../../assets/img/men2.jpg";
import Homepage2 from "../../assets/img/Fashion4.jpg";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import SplitPane from "react-split-pane";
import nextPage from "../../assets/img/body1.jpg";
import nextPage1 from "../../assets/img/body2.jpg";
import nextPage2 from "../../assets/img/body3.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Homepage1}
              style={{ height: "600px" }}
              alt="First slide"
            />
            <Carousel.Caption className="mb-5">
              <h1 className="caption1">Meet our new limited collection.</h1>
              <p className="caption2">AVAILABLE NOW</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={Homepage2}
              style={{ height: "600px" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Minimal Mens Style</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {Search()}
      <div className="mt-5 overflow-auto">
        <Image src={nextPage1} width={1262} height={380}></Image>
      </div>
      <div style={{ marginTop: "70px" }}>
        <SplitPane
          split="vertical"
          minSize={650}
          style={{ paddingBottom: "680px" }}
        >
          <div>
            <p
              style={{
                marginLeft: "150px",
                fontSize: "70px",
                color: "#b95c45",
                lineHeight: "60px",
                fontFamily: "sans-serif",
              }}
            >
              Slow fashion made in small batches.
            </p>
            <img
              className="mt-5"
              src={nextPage}
              width={300}
              height={480}
              alt=""
              style={{ marginLeft: "260px" }}
            />
          </div>
          <div>
            <img src={nextPage2} width={380} height={280} alt="" />
            <p style={{ marginTop: "75px", marginRight: "280px" }}>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
            <p className="mt-2" style={{ marginRight: "280px" }}>
              Don’t worry about sounding professional. Sound like you. There are
              over 1.5 billion websites out there, but your story is what’s
              going to separate this one from the rest. If you read the words
              back and don’t hear your own voice in your head, that’s a good
              sign you still have more work to do.
            </p>
          </div>
        </SplitPane>
      </div>
      <div style={{ marginTop: "800px" }}>
        {Footer()}
      </div>
    </div>
  );
};

export default Home;
