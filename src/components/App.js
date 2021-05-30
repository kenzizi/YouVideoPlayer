import React from "react";
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import youtube from "../apis/youtube";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onFormSubmit("Visit Tunisia");
  }
  onFormSubmit = async (SearchTerm) => {
    const results = await youtube.get("/search/", {
      params: {
        q: SearchTerm,
      },
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
