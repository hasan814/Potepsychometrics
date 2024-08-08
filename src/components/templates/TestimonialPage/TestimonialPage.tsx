import Slider from "@/modules/SlickSlider/SlickSlider";

import "./TestimonialPage.css";

const TestimonialPage = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonials</span>
            <span className="des">
              Read what our users have to say about their experience with
              Potepsychometrics.
            </span>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
