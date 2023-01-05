import "./PlayList.css";
import React from "react";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  handleClick() {
    this.props.onSave();
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        ></TrackList>
        <button className="Playlist-save" onClick={this.handleClick}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default PlayList;
