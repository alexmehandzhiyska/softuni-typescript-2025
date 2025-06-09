import './style.css';
import { Router } from './utils/router';
import { createPostView } from './views/createPostView';
import { postsTemplate } from './views/postsView';
import { usersTemplate } from './views/usersView';

const router = new Router({
    '/posts': postsTemplate,
    '/posts/create': createPostView,
    '/users': usersTemplate
});

function setupLinks() {
    const postsLinkEl = document.getElementById('posts-link');
    const usersLinkEl = document.getElementById('users-link');
    const createPostLinkEl = document.getElementById('create-post-link');

    if (postsLinkEl) {
        postsLinkEl.addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/posts');
        });
    }

    if (createPostLinkEl) {
        createPostLinkEl.addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/posts/create');
        })
    }

    if (usersLinkEl) {
        usersLinkEl.addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/users');
        });
    }
}

setupLinks();
