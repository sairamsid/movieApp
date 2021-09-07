import {GrGoogle} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillYoutube} from 'react-icons/ai'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="homepage-movies-container">
    <div className="home-top-container">
      <Header />
      <div>
        <h1 className="film-name">Super Man</h1>
        <p className="description">
          Superman is a fictional superhero who first appeared in American comic
          books published by DC Comics.
        </p>
        <button className="button" type="button">
          Play
        </button>
      </div>
      <div className="bottom">
        <p className="p">a</p>
      </div>
    </div>
    <div>
      <h1 className="trending">Trending Now</h1>
      <div className="trend-movies">
        <h1>trend-movies</h1>
      </div>
      <h1 className="Top-Rated">Top Rated</h1>
      <div className="top-movies">
        <h1>Top movies</h1>
      </div>
      <h1 className="Originals">Originals</h1>
    </div>
    <div className="original-movies">
      <h1>original-movies</h1>
    </div>
    <div className="icon-container">
      <GrGoogle className="icons" />
      <FaTwitter className="icons" />
      <FiInstagram className="icons" />
      <AiFillYoutube className="icons" />
    </div>
    <div className="Contact-Us">
      <h1>Contact Us</h1>
    </div>
  </div>
)
export default Home
