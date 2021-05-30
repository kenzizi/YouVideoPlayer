import React from "react";

class SearchBar extends React.Component {
  state = {
    SearchTerm: "",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    //make sure we call
    // call back from parent form
    this.props.onFormSubmit(this.state.SearchTerm);
  };
  onSearch = (event) => {
    this.setState({
      SearchTerm: event.target.value,
    });
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.SearchTerm}
                onChange={this.onSearch}
              />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
