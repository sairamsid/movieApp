import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="left-container">
      <div className="heading-container">
        <div className="home-heading">
          <h className="m">M</h>
        </div>
        <div className="login-heading">
          <h className="O">O</h>
        </div>
        <div className="login-heading">
          <h className="V">V</h>
        </div>
        <div className="login-heading">
          <h className="I">I</h>
        </div>
        <div className="login-heading">
          <h className="E">E</h>
        </div>
        <div className="login-heading">
          <h className="S">S</h>
        </div>
      </div>
      <div className="Home">
        <h1>Home</h1>
      </div>
      <div className="Popular">
        <h1>Popular</h1>
      </div>
    </div>
    <div className="right-container">
      <AiOutlineSearch className="icon" />
      <div className="profile-container">
        <img
          className="hair"
          alt="hair"
          src="https://res.cloudinary.com/dayrcnlzh/image/upload/v1630912617/Avatar_hog564.jpg"
        />
      </div>
    </div>
  </nav>
)
export default Header
