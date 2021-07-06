import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../components/common/Posts';
import { PostsContext } from '../store/store';


const Post = () => {
    const { postId } = useParams();
    const [state, dispatch] = useContext(PostsContext);
    const [post, setPost] = useState();

    useEffect(() => {


        state?.posts.map(post => {
            if (post.id === Number(postId)) {
                setPost(post)
            }
        });
    }, [state?.posts, postId]);

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch({ type: 'LOADING', payload: true });
                let comments = await fetch('https://jsonplaceholder.typicode.com/comments');
                comments = await comments.json();
                const postComments = comments.filter((comment) => comment.postId === Number(postId))
                dispatch({ type: 'GET_COMMENTS', payload: postComments });
                dispatch({ type: 'LOADING', payload: false })
            } catch (error) {
                dispatch({ type: 'ERRORS', payload: error });
                dispatch({ type: 'LOADING', payload: false });
            }
        };
        getData();
    }, [dispatch, postId]);

    const { comments } = state;
    return (
        <>
            <Posts
                title={post?.title}
                body={post?.body}
                author={post?.author?.name}
                authorId={post?.author?.id}
                width
                cardBg='white lighten-5'
                txtColor='purple-text'
                buttonLabel='Go to Home'
                link='/'
                isCommentBox
                comments={comments}
            />
        </>
    )
}

export default Post;