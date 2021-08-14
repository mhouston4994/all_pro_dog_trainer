import PropTypes from "prop-types"

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      &copy; Developed By{" "}
      <a href="https://www.pardition.com">Matthew Houston</a>. Built with:{" "}
      <a href="https://github.com/zeit/next.js">Next.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
