import PropTypes from "prop-types"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter"
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram"
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub"
import { faEnvelope } from "@fortawesome/fontawesome-free-regular"
import { faPhone, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import emailjs from "emailjs-com"
import * as Scroll from "react-scroll"
import Swal from "sweetalert2"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

class Main extends React.Component {
  render() {
    const onCloseArticle = () => {
      this.props.onCloseArticle()
    }
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    function sendEmail(e) {
      e.preventDefault()
      onCloseArticle()
      emailjs
        .sendForm(
          "service_12cwtrb",
          "template_enofnjp",
          e.target,
          "user_BcK0kuSzOSqXbDIpRRJls"
        )
        .then(
          (result) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Message Sent!",
              showConfirmButton: false,
              timer: 1500,
              background: "rgba(27, 31, 34, 0.85)",
            })
          },
          (error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Message Failed To Send!",
              showConfirmButton: false,
              timer: 2500,
              background: "rgba(27, 31, 34, 0.85)",
            })
          }
        )
    }

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">The Dog Expert</h2>
          <span className="image main">
            <img src="/static/images/IMG_3068.jpg" alt="" />
          </span>
          <h2>All Pro Dog Training in Colorado</h2>
          <p>
            Training should be straight forward, successful and fun! Having
            started my career at age 16 while working at The American School of
            Dog Training, I knew this was my passion. Working with dogs filled
            my time after school, weekends and through the summer. At the age of
            18, I became the new owner of ASDT. A couple of years later, I was
            approached by the Owner of The Canine College and 4 years later we
            became business partners. The time of exponential learning
            solidified what I wanted to do for a permanent career. This year I
            have started APDT and am currently adding to my client base. I am
            looking forward to your call, helping you train your dog and
            teaching you to emulate good training principals for life-long
            success in the Dog/Master relationship. I charge a flat fee for as
            many lessons as it takes to get the dog formally obedience trained
            and work on any bad habits and behavioral issues that need to be
            addressed. Starting at any age, the average training time frame is
            about 10-12 weeks, but there is no set number as the goal is a
            well-trained companion. Once this is accomplished, I guarantee the
            training with support as long as you have your dog. Fees vary given
            travel distance.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none", minHeight: "80vh" }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src="/static/images/shepard1.jpg" alt="" />
          </span>
          <h4>
            We apply a no-nonsense philosophy to training dogs of all breeds and
            sizes. We do not believe in using any unnecessary force or harsh
            styles of dog training.
          </h4>
          <p>
            We offer one on one private in-home dog training lessons and classes
            as well as a variety of board and train services at our facility,
            certain class types will vary in pricing and payment structures. It
            is challenging enough to make time consuming classes at your local
            pet shop but there is a better, in fact a more convenient way that
            offers individualized and personalized experiences that will cater
            to you and your pets' specific needs.
          </p>{" "}
          <p>
            As long as it takes, no matter the hurtles, we will work to
            eliminate any bad habits or problematic behaviors you may be
            experiencing with your puppy or dog including house breaking,
            chewing, barking, jumping and digging. With our philosphy and
            understanding of the underlying causes of bad habits and problematic
            behaviors, we strive to employ corrective measures to modify,
            redirect or eliminate them. Some such behaviors are caused by lack
            of early puppy socialization, genetics and brain development. We can
            help, but we cannot turn back time. Yet!{" "}
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Reviews</h2>
          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth="easeInOutQuart"
            offset={-50}
            delay={50}
            duration={1700}
            onSetActive={this.handleSetActive}
          >
            <span className="image main" id="0">
              <img
                src="/static/images/gvgg.jpg"
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
          </Link>
          <h4>
            Monette Demuth of{" "}
            <a href="https://gvggs.com/" target="_blank">
              Geschenk Von Gott German Shepherds
            </a>
          </h4>
          <p>
            Given the unique and personal touch of{" "}
            <a href="https://gvggs.com/" target="_blank">
              GVGGS
            </a>
            , our program excels in educating our families in several key areas
            such as health/nutrition, correct socialization, temperament testing
            and essential family bonding/training. Years ago, when I was
            interviewing and seeking exceptional trainers in the Denver area for
            my clients, I met Kaleb. I became immediately aware that his
            knowledge was leagues above the sea of trendy and irrelevant popular
            training techniques. He demonstrated his in-depth knowledge of the
            physiology and mind/development of the dog, socialization key
            factors and overall Dog/Master bonding essentials in training. Over
            the years I have narrowed my recommendations to a small handful of
            trainers in the Denver Metro area, Kaleb being one of our favorites.
            I believe he has offered superlative services to over 100 of my
            clients without one single complaint, rather exuberant praise from
            all. Kaleb comes to speak as the training representation at our
            Puppy Orientation Classes (a six-hour course we require our clients
            to take prior to placement). We always have a high percentage of
            families choose to utilize Kaleb's expertise in training through ALL
            PRO. Kaleb is truly in a league of his own and we proudly give him a
            five-star rating in all areas of Canine training and interaction.
            Amen.
          </p>
          <hr></hr>
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth="easeInOutQuart"
            offset={-50}
            delay={50}
            duration={1700}
            onSetActive={this.handleSetActive}
          >
            <span className="image main" id="1">
              <img
                src="/static/images/review2.png"
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
          </Link>
          <h4>Mesha Settle</h4>
          <p>
            We couldn’t be happier with the training We received from Kaleb. My
            family and I are impressed by the training that made the dog we have
            today, my daughter at the age of 3 was able to give commands to our
            140lb Rottweiler. Amazing!
          </p>
          <hr></hr>
          <Link
            activeClass="active"
            to="0"
            spy={true}
            smooth="easeInOutQuart"
            offset={-50}
            delay={50}
            duration={1700}
            onSetActive={this.handleSetActive}
          >
            <span className="image main" id="2">
              <img
                src="/static/images/shepards1.jpg"
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
          </Link>
          <h4>Curtis and Patti</h4>
          <p>
            8 1/2 years ago Kaleb trained our German Shepherd pups brother and
            sister and they are fabulous. About two weeks ago we rescued a 3 1/2
            year old female German Shepherd and she has some serious issues
            she’s aggressive especially towards our female German Shepherd she
            doesn’t like bicycles she just hasn’t been properly socialized so we
            reached out to Kaleb for his guidance and assistance within the
            first 30 minutes I can see the transformation starting to take place
            although she will need a lot of work on my part but I’m very
            confident that she will be a productive part of the pack. Thank you
            for all your help Kaleb. Sincerely Curtis and Patti
          </p>
          <Link
            to="0"
            spy={true}
            smooth="easeInOutQuart"
            offset={-175}
            delay={50}
            duration={1700}
            onSetActive={this.handleSetActive}
            style={{ borderBottom: "none" }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "2rem", marginLeft: "50%" }}
              icon={faArrowCircleUp}
            />
          </Link>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" onSubmit={sendEmail} id="contact-us">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half first">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="tel:+13032639016">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
            <li>
              <a href="mailto:allprodogtraining@yahoo.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/allprodogtrainingcolorado">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/allprodogtrainingcolorado">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Main
