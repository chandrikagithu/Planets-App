// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planet-container">
      <h1 className="title">PLANETS</h1>
      <div className="display-slider" data-testid="planets">
        <Slider {...settings} className="slider">
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
