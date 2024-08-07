import { Header } from "./components/Headers"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Daniel Carneiro"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Post
            author="Daniel Carneiro"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </main>
      </div>
    </>
  )
}

export default App
