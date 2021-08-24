import PropTypes from "prop-types"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter"
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram"
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub"
import { faEnvelope } from "@fortawesome/fontawesome-free-regular"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import emailjs from "emailjs-com"

class Main extends React.Component {
  render() {
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

      emailjs
        .sendForm(
          "service_12cwtrb",
          "template_enofnjp",
          e.target,
          "user_BcK0kuSzOSqXbDIpRRJls"
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
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
            I am Kaleb Tirrell, the owner of All Pro Dog Training, a private dog
            training company. I have been training dogs for over 15 years in the
            Denver metro area. I have always had a soft corner for pets and had
            been training dogs since I was 15. My interest in pets grew over
            time, and I specialized in dogs' in-home training after high school.
          </p>
          <p>
            I love animals and offer a wide range of pet training services. I am
            an expert and can handle all breeds and sizes. I live with the dog
            for a month and then leave the trained pet back with the owner. Or I
            go to the owner's home once a week and do the training. I help
            discourage bad habits and positively increase obedience training.
          </p>
          <p>
            I received the dog training expertise from the Dave Coop Canine
            College, focusing on pet training as per the client’s need. I
            suggest beginning the journey of your puppy training from the age of
            8-12 weeks. I offer standard dog obedience classes or customize
            programs fitting your need. My goal is to get your dog to listen to
            you off the leash and positively encourage good behavior.
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
          <span className="image main">
            <img src="/static/images/gvgg.jpg" alt="" />
          </span>
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
            amet.
          </p>
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
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
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
