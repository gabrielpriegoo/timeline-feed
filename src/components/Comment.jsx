import { useState } from "react";
import styles from "./Comment.module.css";
import React from "react";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  //   const [likeCount, setLikeCount] = useState(0);

  //   function handleDeleteComment() {e
  //     onDeleteComment(content);
  //   }

  //   function handleLikeComment() {
  //     setLikeCount((state) => {
  //       return state + 1;
  //     });
  //   }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/diego3g.png"
        alt="Imagem"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita
            fuga dolores itaque iure voluptatibus voluptates magnam, sunt fugit
            dolore doloremque accusantium laborum autem dicta quae neque
            eligendi aperiam adipisci.
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>0</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
