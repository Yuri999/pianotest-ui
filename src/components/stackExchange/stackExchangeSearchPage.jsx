import React, { Component } from "react";
import stackExchangeService from "./stackExchangeService";
import SearchString from "./searchString";
import SearchResults from "./searchResults";
import "./stackExchangeSearchPage.css";

class StackExchangeSearchPage extends Component {
  state = {
    searchString: "",
    items: [],
    page: 1,
    pageSize: 15,
    total: 0
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.pageSize !== prevState.pageSize
    ) {
      await this.handleSearch();
    }
  }

  handleSearch = async () => {
    const result = await stackExchangeService.search(
      this.state.searchString,
      this.state.page,
      this.state.pageSize
    );
    this.setState({ items: result.items, total: result.total });
  };

  handlePageChange = page => {
    this.setState({ page });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="pt-5">StackExchange Search</h2>
        <div className="row">
          <div className="col-5">
            <SearchString
              value={this.state.searchString}
              onChange={e => {
                this.setState({ searchString: e.target.value });
              }}
              onSubmit={this.handleSearch}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchResults
              items={this.state.items}
              total={this.state.total}
              page={this.state.page}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StackExchangeSearchPage;
