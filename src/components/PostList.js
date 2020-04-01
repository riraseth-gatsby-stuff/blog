import React from 'react';
import PostCard from './PostCard';
import styles from '../css/postlist.module.css';

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>john doe</h1>
      <h4>gatsby blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} {...node}></PostCard>;
        })}
      </div>
    </section>
  );
};

export default PostList;
