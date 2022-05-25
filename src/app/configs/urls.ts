import {environment} from '../../environments/environment';

const {baseURL} = environment;

const urls = {
    users: `${baseURL}/users`,
    posts: `${baseURL}/posts`,
    comments: `${baseURL}/comments`
};

export {
    urls
}
