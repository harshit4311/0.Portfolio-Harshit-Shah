export default function About() {
    return (
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Harshit
          <span className="text-primary"> Shah</span>
          </h1>
          <div className="subheading mb-5">Software Developer</div>
          <p className="lead mb-5">
            Java | Spring Boot | Machine Learning | Data Science 
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/harshit-shah16"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="social-icon" href="https://github.com/harshit4311">
              <i className="fab fa-github" />
            </a>
            {/* <a className="social-icon" href="https://twitter.com/harshit4311">
              <i className="fab fa-twitter" />
            </a> */}
            {/* <a
              className="social-icon"
              href=""
            >
              <i className="fab fa-youtube" />
            </a> */}
            <a className="social-icon" href="https://leetcode.com/u/redmastic/">
              <i className="fab fa-medium" />
            </a>
          </div>
        </div>
      </section>
    );
  }