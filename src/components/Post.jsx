import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/113481957?v=4" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Priego</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de Setembro às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        </p>
        <p>
          expedita, numquam pariatur repellendus repellat ducimus eum a cumque
        </p>
        <p>
          <a href="#">facilis, earum esse</a> reprehenderit. Autem laboriosam
          veniam libero
        </p>
        <p>
          <a href="#">#aliquam</a> <a href="#">#repudiandae</a>{" "}
          <a href="#">#quod</a> <a href="#">#dolore</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <Comment />
      </form>
    </article>
  );
}
