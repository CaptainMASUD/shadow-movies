import React from "react";

const generateYears = () => {
  const years = [];
  for (let year = 1960; year <= 2024; year++) {
    years.push(year);
  }
  return years;
};

const RequestCard = () => {
  return (
    <div className="card custom-card-bg custom-card-width " style={{marginBottom:"80px"}}> {/* Apply custom classes */}
      <div className="card-body">
        <h2 className="card-title">Request for your favourite watch</h2>
        <p className="card-text">Fill up the required form to get your movies, TV series, anime and others in the shadow movies.</p>
        <div className="row">
          <div className="col-md-6">
            <h2>Request Form</h2>
            <div className="rinput">
              <div className="rin2">
                <label className="inlav" htmlFor="inputField">Enter your title:</label>
                <input type="text" className="form-control" id="inputField" name="name" placeholder="Title here" />
                {/* selecting type */}
                <div className="rin3">
                  <label className="selection" htmlFor="comboInput">
                    Select Type:
                  </label>
                  <select className="form-control movie" id="comboInput" name="comboInput">
                    <option value="Movie">Movie</option>
                    <option value="Tv-series">Tv-series</option>
                    <option value="Anime">Anime</option>
                    <option value="Cartoon">Cartoon</option>
                  </select>

                  <label className="year" htmlFor="comboInput2">
                    Year:
                  </label>
                  <select className="form-control" id="comboInput2" name="comboInput2">
                    {/* Generating options for years */}
                    {generateYears().map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="combox">
                <label className="txtar" htmlFor="textInput">
                  Enter your text:
                </label>
                <br />
                <textarea
                  className="form-control"
                  id="textInput"
                  placeholder="Enter your text here"
                  rows="6"
                ></textarea>
              </div>
              <button className="btn btn-primary mt-3" id="rbtn">Send Request</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hr"></div>
            <div className="hr2">
              <h5>Steps:</h5>
              <ul>
                <li>First write the name of your watch. If movie then write the name in the title field: <span>'Avatar'</span>.</li>
                <li>Select your type from the selection box.</li>
                <li>Select the Year of your watch.</li>
                <li>If you have more details or any kind of suggestion then write it down in the comment box.</li>
                <li>Then click on the Send Request button to submit your request.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
