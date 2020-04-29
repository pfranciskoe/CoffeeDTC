import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from './store/store';
import { fetchTasteProfile} from './util/taste_profile_api_util'
import { receiveTasteProfile, fetchTaste  } from './actions/taste_profile_actions'
import { RECEIVE_TASTE_PROFILE, RECEIVE_TASTE_ERRORS } from './actions/taste_profile_actions';
// REMOVE THESE
window.fetchTasteProfile = fetchTasteProfile;
window.receiveTasteProfile = receiveTasteProfile;
window.fetchTaste = fetchTaste;



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
    //REMOVE THESES!!!!!!!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});