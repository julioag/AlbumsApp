import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "react-bootstrap";

const AlbumCard = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.item.coverArt} alt="Album Cover" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.artist}</p>
      </div>
      <div className="card-footer">
        <AlbumInfo
          album={props.item}
          updateFavoriteSongs={props.updateFavoriteSongs}
          removeFavoriteSong={props.removeFavoriteSong}
        />
      </div>
    </div>
  );
};

class AlbumInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const songs = this.props.album.songs.map((song, index) => {
      return (
        <li key={`song${index}`}>
          {song.title} - {parseInt(song.durationMilliseconds) / 1000} seconds
          <Button onClick={() => this.props.updateFavoriteSongs(song)}>
            Favorito
          </Button>
          <Button onClick={() => this.props.removeFavoriteSong(song)}>
            Quitar Favorito
          </Button>
        </li>
      );
    });
    return (
      <div>
        <Button onClick={this.toggleModal}>More info</Button>
        <Modal show={this.state.show}>
          <ModalHeader> Album Songs</ModalHeader>
          <ModalBody>
            <h5>{this.props.album.title}</h5>
            <p>{this.props.album.artist}</p>
            <p>{this.props.album.year}</p>
            <ul>{songs}</ul>
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={this.toggleModal}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AlbumCard;
