import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="bg-con">
    <Header />
    <div className="notfound-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notFound-img"
      />
      <h1 className="not-found-head">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
