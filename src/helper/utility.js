import { Linking } from 'react-native';

export function openURL(url){
    return ( Linking.canOpenURL(url)
    .then((supported) => {
    if (!supported) {
        console.log("Can't handle url: " + url);
    } else {
        return Linking.openURL(url);
    }
    })
    .catch((err) => console.error('An error occurred', err)));
}

export function parseDomainFromUrl(url){
    let regEx = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img
    return url.match(regEx);
}

export function trimWordsFromUrl(url){
    url = url + "";
    url = url.replace("http://", "");
    url = url.replace("https://", "");
    url = url.replace("www.", "");
    return capitalizeFirstLetterInWord(url);
}

export function capitalizeFirstLetterInWord(s){
    return s[0].toUpperCase() + s.slice(1);
}

export function cleanUrl(url){
    url = capitalizeFirstLetterInWord(trimWordsFromUrl(parseDomainFromUrl(url)));
    return url;
}

export function cleanIngredientsList(text){
    text = capitalizeFirstLetterInWord(text);
    return text;
}

export function replaceLastWordOccurance(text, WordToReplace, ReplaceWithWord){
    let occuranceCount = findNumberOfOccurances(text, WordToReplace);

    if(occuranceCount === 1 && ReplaceWithWord === ', and') ReplaceWithWord = ' and';

    if (occuranceCount > 0){
        text = text + "";
        let lastIndex = text.lastIndexOf(WordToReplace);
        text = text.substring(0, lastIndex) + ReplaceWithWord + text.substr(lastIndex + 1);
    }

    return text;
}

export function findNumberOfOccurances(text, WordToReplace){
    return text.split(WordToReplace).length - 1;
}