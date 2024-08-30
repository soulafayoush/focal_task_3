const Slide = ({ img, text }) => {
    return (
      <div className="slide">
        <img src={img} alt="Slide" />
        <div className="text-container">
          <div className="header-box"> 
            <h4> Toronto, <span>Canada</span></h4>
          </div>
          <h2>{text}</h2>
        </div>
      </div>
    );
  };
  
  export default Slide;
  