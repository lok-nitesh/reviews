import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onNext = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props

    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
  }

  onPrevious = () => {
    const {currentIndex} = this.state

    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]

    return (
      <div className="carousel-container">
        <h1 className="carousel-title">Reviews</h1>
        <div className="carousel-content">
          <button
            className="carousel-button"
            onClick={this.onPrevious}
            disabled={currentIndex === 0}
            data-testid="leftArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review">
            <img src={imgUrl} alt={username} className="review-img" />
            <h3 className="username">{username}</h3>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="carousel-button"
            onClick={this.onNext}
            disabled={currentIndex === reviewsList.length - 1}
            data-testid="rightArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
