import React from 'react';
import Image from 'gatsby-image';
import styles from '../css/postcard.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const PostCard = ({
  excerpt,
  frontmatter: { title, slug, date, author, image }
}) => {
  const img = image.childImageSharp.fluid;
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img}></Image>
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{excerpt}</p>
          <AniLink fade to={slug} className={styles.link}>
            read more
          </AniLink>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
