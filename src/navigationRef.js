import {NavigationActions} from 'react-navigation';

let navigator;

// Clever function to get access to navigator

export const setNavigator = (nav) => {
    navigator = nav;
};

// Navigation function for every other file to use
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};