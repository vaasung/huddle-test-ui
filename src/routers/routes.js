import { Redirect } from 'react-router-dom';
import Author from '../pages/Author';
import Home from '../pages/Home';
import Post from '../pages/SinglePost';

const routes = [
    {
        path: '/',
        component: Home,
        states: { title: 'Home' } // Make this as dynamic in later
    },
    {
        path: '/post/:postId',
        component: Post,
        exact: true
    },
    {
        path: '/author',
        component: Author,
        exact: true
    },
    {
        path: '**',
        component: <h1>Not Found</h1>
        // component: () => <NotFound />
    },
    { // Not working need to check this later
        path: '*',
        component: () => {
            return (
                window.location.reload() &&
                <Redirect to='/' />
            )
        },
        exact: true
    },
];

export default routes;
