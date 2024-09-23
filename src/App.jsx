import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita, numquam pariatur repellendus repellat ducimus eum a cumque facilis, earum esse reprehenderit. Autem laboriosam veniam libero aliquam repudiandae quod dolore?"
          />
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita, numquam pariatur repellendus repellat ducimus eum a cumque facilis, earum esse reprehenderit. Autem laboriosam veniam libero aliquam repudiandae quod dolore?"
          />
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita, numquam pariatur repellendus repellat ducimus eum a cumque facilis, earum esse reprehenderit. Autem laboriosam veniam libero aliquam repudiandae quod dolore?"
          />
        </main>
      </div>
    </>
  );
}

export default App;
