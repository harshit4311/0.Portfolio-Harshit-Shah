export default function Projects() {
    return (
      <div>
        <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
    <h2 className="mb-1">Projects</h2>
    <div className="d-flex row">
        <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "14rem" }}>
            <img className="card-img-top" src="https://www.geeksforgeeks.org/cat-dog-classification-using-convolutional-neural-network-in-python/" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Dog Breed Classifier</h5>
                <a href="https://github.com/harshit4311/FineGrained-ImageClassification" target="_blank" className="btn btn-primary">Github</a>
            </div>
        </div>
        <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "16rem" }}>
            <img className="card-img-top" src="https://www.geeksforgeeks.org/cat-dog-classification-using-convolutional-neural-network-in-python/" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Event Management System</h5>
                <a href="https://github.com/harshit4311/event-management-system" target="_blank" className="btn btn-primary">Github</a>
            </div>
        </div>
        <div className="card col-md-3 col-12 mx-2 mb-1" style={{ width: "14rem" }}>
            <img className="card-img-top" src="https://www.geeksforgeeks.org/cat-dog-classification-using-convolutional-neural-network-in-python/" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Price.Pal: Price Comparator</h5>
                <a href="https://github.com/harshit4311/PricePal-WebScraper" target="_blank" className="btn btn-primary">Github</a>
            </div>
        </div>
    </div>
</div>

        </section>
        {/* Interests*/}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Beyond software development, I lead an active lifestyle. I enjoy going to the gym regularly, engaging in various sports activities and experimenting with new recipes in the kitchen. Additionally, I find peace in leisurely walks, which I find instrumental in unwinding and rejuvenating.
            </p>
            <p className="mb-0">
            Alongside these pursuits, I actively engage in trading, staying informed about market trends and honing my investment strategies.
            Additionally, I enjoy reading books on various subjects, attending tech meetups to stay up-to-date with industry innovations, and volunteering my time for community initiatives aimed at fostering digital literacy.
            </p>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }