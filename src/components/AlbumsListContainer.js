import React from 'react';
import AlbumsList from './AlbumsList';
import { connect } from 'react-redux';
// import { addAlbum } from '../actions/addAlbums';
import { setAlbums, getAlbums } from '../actions/albums';
import request from 'superagent';

const sleep = time =>
    new Promise(resolve => {
        setTimeout(() => resolve(`I waited for ${time} ms`), time);
    });

class AlbumsListContainer extends React.Component {
    state = {};

    componentDidMount() {
        this.props.getAlbums();

        // request
        //     .get('https://jsonplaceholder.typicode.com/albums')
        //     .end((error, response) => {
        //         if (!error && response) {
        //             this.props.setAlbums(response.body);
        //         } else {
        //             console.log(
        //                 'There was an error fetching from GitHub',
        //                 error
        //             );
        //         }
    }

    // fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(res => res.json())
    //     .then(data => this.setState({ albums: data }));
    // sleep(2000).then(message =>
    //     this.props.setAlbums([
    //         {
    //             id: 1,
    //             title: message
    //         },
    //         {
    //             id: 2,
    //             title: 'This is the second album'
    //         },
    //         {
    //             id: 3,
    //             title: 'The last album'
    //         }
    //     ])
    // );

    render() {
        if (!this.props.albums) {
            return <p>Loading...</p>;
        } else {
            return <AlbumsList albums={this.props.albums} />;
        }
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    };
};

export default connect(
    mapStateToProps,
    { setAlbums, getAlbums }
)(AlbumsListContainer);
