import './contactus.css'

const ContactUs = () => {
  return (
    <div className="bg-contact">
      <h1 className="contact-head"> Contact Us</h1>
      <div className="contact-logo">
        <div>
          <div className="contact-container">
            <p className="text"> +918169961396</p>
          </div>
          <div>
            <p className="text">patcoproductions@gmail.com</p>
          </div>
          <div>
            <p className="text">
              66, Harminder Singh Road, Aram Nagar Part-1, Versova,
              Mumbai-400061
            </p>
          </div>
        </div>
        <div className="logo-container">
          <img
            className="con-logo"
            src="https://www.patcoproductions.com/static/media/footer-logo.4705b30b399cf6b7bc7b.png"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
