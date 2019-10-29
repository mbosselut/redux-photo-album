import { ADD_ALBUM } from '../actions/addAlbums';
import { SET_ALBUMS } from '../actions/albums';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ALBUM:
            return [...state, { ...action.payload }];
        case SET_ALBUMS:
            return [...action.payload.albums];
        default:
            return state;
    }
};
