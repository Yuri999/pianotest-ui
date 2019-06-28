import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchString extends Component {
  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit();
          }}
        >
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                id="searchString"
                name="searchString"
                value={this.props.value}
                onChange={this.props.onChange}
                className="form-control"
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="btn btn-primary display-inline"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

SearchString.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchString;
