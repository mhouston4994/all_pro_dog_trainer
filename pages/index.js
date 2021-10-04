import Head from "next/head"
import stylesheet from "styles/main.scss"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import moment from "moment"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    if (this.state.articleTimeout != true) {
      return
    }
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      })
    }, 350)
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
          <Head>
            <title>All Pro Dog Trainer | Dog Training in Colorado</title>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="title" content="All Pro Dog Trainer" />
            <meta
              name="description"
              content="Denver, Colorado based Training for your beloved pet. We offer high quality behavioral and obedience coaching for dogs"
            />
            <meta
              name="keywords"
              content="Denver Colorado, Littleton, Aurora, Castle Rock, Highlands Ranch, Parker, Englewood, Centennial, Cherry hills Village, Greenwood Village Colorado. Dave Coop and The Canine College is your source for Dog Training, Dog Trainers, Dog Obedience, Dog Obedience Training, Dog Classes, Dog Training Classes and more. Our Colorado service area includes Denver CO, Littleton CO, Aurora CO, Castle Rock CO, Highlands Ranch CO, Parker CO, Englewood CO, Centennial CO,
              Dog training Colorado, 80016, Dog Training, Dog training Denver, Dog training Denver Colorado, Dog Training Classes, Canine College, Dave Coop, Denver, Colorado, In Home Dog Training Denver, Obedience Training, Protection Training, Puppy Training, Behavior Modification, Boarding and Training, Colorado dog training, Denver dog training, Centennial Colorado"
            />
            <meta name="robots" content="index, follow" />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta name="language" content="English" />
            <meta name="author" content="Kaleb Tirrell" />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div
            id="wrapper"
            onClick={(e) => {
              if (e.target.id == "wrapper") this.handleCloseArticle()
            }}
          >
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />

            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>

          <div id="bg" />
        </div>
      </div>
    )
  }
}

export default IndexPage
