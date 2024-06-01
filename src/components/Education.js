export default function Education() {
    return (
      <div>
        <section className="resume-section" id="education">
          <div className="resume-section-content">

            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">BITS Pilani</h3>
                <div className="subheading mb-3">Bachelor's Degree, Computer Science</div>
                {/* <div>
                  In Computer Science with One year Internship in Cloud Computing
                </div> */}
                <p>Grade: ~8.0/10.0 (until now)</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2023 - June 2026</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  Scaler School of Technology
                </h3>
                <div className="subheading mb-3">
                  Math + Computer Science
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2023 - June 2027</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }