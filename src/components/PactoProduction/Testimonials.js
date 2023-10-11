import './testimonials.css'

const Testimonials = () => {
  return (
    <div className="bg-testimonial">
      <div className="card">
        <img
          src="https://www.patcoproductions.com/static/media/Outdoors-man-portrait_(cropped).adbfb49b65d384b6d1c0.jpg"
          className="image"
        />
        <p>
          Video lectures form the crux of IIDE's student & corporate training
          curriculums. So creating content matching global education standards
          is paramount. TRC promptly adapted to brand guidelines & delivered
          quality animation that brought our expert's explanation to life.
        </p>
        <h3>Bhumit Kumar</h3>
        <p>Co-Founder & Guitarist, Last Minute Band</p>
      </div>
      <div>
        <h1 className="testi-head">Testimonials</h1>
        <p className="testi-text">what they say about our passion?</p>
      </div>
    </div>
  )
}

export default Testimonials
