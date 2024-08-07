import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/engdanielcarneiro.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Daniel Carneiro</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href=''>jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat </a></p>
      </div>
    </article>
  )
}
