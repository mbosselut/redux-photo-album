import request from 'superagent';

export const SET_ALBUMS = 'SET_ALBUMS';

export function setAlbums(albums) {
    return {
        type: SET_ALBUMS,
        payload: {
            albums
        }
    };
}

export function getAlbums() {
    return function(dispatch) {
        request
            .get('https://jsonplaceholder.typicode.com/albums')
            .end((error, response) => {
                if (!error && response) {
                    dispatch(setAlbums(response.body));
                }
            });
    };
}
