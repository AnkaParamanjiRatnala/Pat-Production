import './header.css'

const Header = () => {
  return (
    <>
      <nav className="bg-header">
        <div>
          <img
            src="https://www.patcoproductions.com/static/media/main-logo.4a0c6870c1196606138f.png"
            className="logo"
          />
        </div>
        <div>
          <ul className="list-items">
            <li> Home </li>
            <li> About </li>
            <li> Process</li>
            <li> Testimonials</li>
            <li> Contact Us</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
