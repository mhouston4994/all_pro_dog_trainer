import PropTypes from "prop-types"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faGem from "@fortawesome/fontawesome-free-regular/faGem"
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw"

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faPaw} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>All Pro Dog Trainer</h1>
        <p>
          Training for your beloved pet. We off high quality behavioral and
          obedience coaching for dogs
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro")
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("work")
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("about")
            }}
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact")
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
