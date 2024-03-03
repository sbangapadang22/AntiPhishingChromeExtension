function Home() {
  return (
    <div className="d-flex flex-column align-items-center" style={{ paddingTop: "300px" }}>
      <div>
        <img 
          src="https://vehicle-images.dealerinspire.com/stock-images/chrome/20df30b06f277f655abbaef7d65257d5.png" 
          alt="Your Image"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className="d-flex justify-content-center" style={{ width: "100%" }}>
        <nav className="navbar">
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              style={{ width: "75vh" }}
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Home;
