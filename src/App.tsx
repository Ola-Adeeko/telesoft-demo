import "./App.css";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import { ReactComponent as MaskIcon } from "./assets/Mask group.svg";
import HelmesImage from "./assets/helmes.png";
import NewsCard from "./components/NewsCard/NewsCard";
import { newsData } from "./components/constants";

const App = () => {
  if (window.innerWidth >= 700) {
    window.addEventListener("scroll", function () {
      const scrollTop: number = window.scrollY;
      const videoBlock: HTMLElement | null =
        document.querySelector(".video_block");
      const heroContainer: HTMLElement | null =
        document.querySelector(".hero-container");

      if (videoBlock && heroContainer) {
        const heroContainerHeight: number = heroContainer.clientHeight;

        const scrollFraction: number = scrollTop / (heroContainerHeight * 0.1); // Adjust multiplier as needed

        heroContainer.style.transform = `translateY(-${scrollFraction * 150}%)`;
      }
    });
  }

  return (
    <div className="app">
      <NavBar />

      <div className="hero-container">
        <div className="hero_container_box">
          <div className="hero_content_box">
            <div className="hero_content">
              <div className="hero_content_text">
                We design & code <br className="hero_word_break" /> remarkable
                digital <br className="hero_word_break" /> products
              </div>
              <div className="hero_content_buttons">
                <Button type="black">Work with us</Button>
                <Button type="white">Join our team</Button>
              </div>
            </div>
          </div>
          <div className="hero_icon_box">
            <MaskIcon id="maskedIcon" className="hero_icon" />
          </div>
        </div>
      </div>

      <div className="video_block">
        <div className="video_container">
          <video
            src={require("./assets/main-video.mp4")}
            className="video_video"
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
      </div>
      <div className="block_spacer"></div>
      <div className="what_wedo">
        <div className="what_wedo_box">
          <div className="wedo_header">
            <h3 className="wedo_header_text">
              Work with TeleSoftas, one of EMEA’s top product engineering
              agencies
            </h3>
          </div>
          <div className="wedo_content">
            <p className="wedo_content_text">
              TeleSoftas has been successfully providing product engineering
              services for over 18 years. Our customers – product companies –
              are ranging from small start-ups to large enterprises, serving
              millions of users worldwide. Let’s see what we can do together.
            </p>
            <Button type="black">see what we do</Button>
          </div>
        </div>
      </div>
      <div className="helmes">
        <div className="helmes_box">
          <div className="helmes_image">
            <img src={HelmesImage} alt="hlmes" className="helmes_image_img" />
          </div>
          <div className="helmes_content">
            <h3 className="helmes_content_header">
              A united team in the Baltic helps realise the growth potential in
              the IT field.
            </h3>
            <p className="helmes_content_text">
              In September 2022, two tech leaders, the Lithuanian engineering
              and consultancy house, TeleSoftas, and the Estonian giant, Helmes,
              joined forces. This partnership strengthens their international
              positions by establishing a community of over 1,500 IT specialists
              and business professionals united by values of Trust, Mastery,
              Collaboration and Community.
            </p>
            <Button type="white">Read More</Button>
          </div>
        </div>
      </div>

      <div className="news">
        <div className="news_box">
          <h3 className="news_header">News</h3>

          <div className="news_container">
            {newsData.map((news, index) => (
              <NewsCard news={news} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="jobs">
        <div className="jobs_box">
          <div className="jobs_project">
            <span className="jobs_icon"></span>
            <div className="jobs_content">
              <p className="jobs_content_text">Have a project?</p>
              <h3 className="jobs_content_txt_bold">Let's talk</h3>
            </div>
          </div>
          <div className="jobs_line_breaks"></div>
          <div className="jobs_project">
            <span className="jobs_icon"></span>
            <div className="jobs_content">
              <p className="jobs_content_text">Want to join the team?</p>
              <h3 className="jobs_content_txt_bold">Open Positions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
