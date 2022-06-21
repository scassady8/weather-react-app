import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row search-inputs">
          <div className="col-10">
            <input
              type="search"
              className="form-control float-end input-location"
              placeholder="Enter location"
            />
          </div>
          <div className="col-2">
            <input
              type="button"
              className="btn form-control float-end shadow-sm current-location-btn"
              value="Current location"
            />
          </div>
          <div className="col-12">
            <span className="float-end">
              <a className="celsius-scale active">°C</a>|
              <a className="farenheit-scale">°F</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
