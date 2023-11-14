const About = () => {
  return (
    <div>
      <div
        className="col-lg-8 mx-auto p-4 py-md-5"
        style={{ marginTop: "5rem" }}
      >
        <main>
          <h1 style={{ textAlign: "center" }}>About Us</h1>
          <p>
            Craftooo has been helping small businesses to grow perfectly. We
            have our search engine to optimize everything accordingly and market
            in a way to drive new clients to our website.We are not working on a
            specific niche but our team is experienced in building a custom
            website also. <br />
            <br />
            Our team is well-trained and professional at providing you with the
            best digital marketing services. Here, we combine all the creative
            ideas to form an engaging relationship between you and your clients.
            To avail of our services, you can simply request a free
            consultation. So, call us now!.
          </p>
          <br />
          <br />
          <div className="row">
            <div
              className="col-md-6 text-center mb30 wow zoomIn"
              data-wow-duration="1s"
              data-wow-delay=".6s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.6s",
                animationName: "zoomIn",
              }}
            >
              <img
                src="https://socialb.digital/web/assets/images/home-about-us.png"
                alt=""
                style={{ width: "100%", height: "450px" }}
              />
            </div>
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>
                We passionately believe in innovation concerning different
                creative ideas and intelligence. For small businesses we want
                ourselves to be always available with one click. We know filling
                the world with the light and warmth of knowledge is not that
                easy but creating several opportunities by keeping digital
                marketing in mind is something we want to thrive on.
              </p>
              <h2>Our Mission</h2>
              <p>
                Craftooo is a perfect place to help new startups learn, grow,
                and become recognized brands through our research analysis and
                style guides. We have helped hundreds of businesses to get
                triple their website visits into leads. By providing you with
                our brand strategies, we will change the way you look at
                marketing and advertising.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
