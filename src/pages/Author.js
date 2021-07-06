import React, { useState, useContext, useEffect } from 'react';
import Posts from '../components/common/Posts';
import { PostsContext } from '../store/store';
import { useLocation } from 'react-router-dom'


const Author = () => {
    const { state: { authorId }, pathname } = useLocation();
    const [state, dispatch] = useContext(PostsContext);
    const [author, setAuthor] = useState();
    useEffect(() => {
        state?.posts?.map(post => {
            if (post.author.id === Number(authorId)) {
                setAuthor(post.author)
            }
        })
    }, [state?.posts, authorId]);

    useEffect(() => {
        // dispatch({ type: 'VISIBLE_SEARCH', payload: true })
        return () => {
            // dispatch({ type: 'VISIBLE_SEARCH', payload: false })
        }
    }, [dispatch, pathname]);

    return (
        <>
            <Posts
                isAuthor
                title={author?.name}
                fullName={author?.name}
                name={author?.username}
                email={author?.email}
                website={author?.website}
                companyName={author?.company?.name}
                width
                cardBg='black lighten-5'
                txtColor='purple-text'
                buttonLabel='Go to Home'
                link='/'
            />
        </>
    )
}

export default Author;