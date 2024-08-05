import styles from "./App.module.css"
import { Header } from "./components/Headers"
import { Sidebar } from "./components/Sidebar"
import "./global.css"
import { Post } from "./Post"

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
