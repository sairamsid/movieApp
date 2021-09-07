import './index.css'
import Header from '../Header'

const HomeMovies = () => (
  <div className="homepage-movies-container">
    <div className="top-Container">
      <Header />
      <h1 className="film-name">Avengers</h1>
      <div className="certificate">
        <p>2h 42m</p>
        <p>UA</p>
        <p>2007</p>
      </div>
      <p className="description">
        Earth s mightiest heroes must come together and learn to fight as a team
        if they are going to stop the mischievous Loki and his alien army from
        enslaving humanity.
      </p>
      <button className="button" type="button">
        Play
      </button>
    </div>
    <div className="movies-genere">
      <div>
        <h1 className="head">Genere</h1>
        <p>
          Action <br />
          super hero <br />
          fantasy <br />
          adventure
        </p>
      </div>
      <div>
        <h1 className="head">Audio Available</h1>
        <p>
          Telugu <br />
          English <br />
          Hindi
        </p>
      </div>
      <div>
        <div>
          <h1 className="head">Rating Count</h1>
          <p>60,020</p>
        </div>
        <div>
          <h1 className="head">Rating Average</h1>
          <p>4.8 </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="head">Budget</h1>
          <p>60,020 Cores </p>
        </div>
        <div>
          <h1 className="head">Release Date</h1>
          <p>27th April 2012</p>
        </div>
      </div>
    </div>
    <div>
      <h1 className="head">More like this</h1>
    </div>
  </div>
)

export default HomeMovies
