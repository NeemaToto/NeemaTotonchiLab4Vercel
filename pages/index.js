import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Lab 4</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! My name is <a href="https://github.com/NeemaToto">Neema Totonchi!</a>
        </h1>

        <p className={styles.description}>
          What does{' '}
          <code className={styles.code}>C.R.U.D</code>
          stand for? {' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Create &rarr;</h2>
            <li> A file </li>
             <li> A folder </li>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Read &rarr;</h2>
            <li>A file</li>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Update &rarr;</h2>
            <li>A folder name</li>
            <li>A file name</li>
            <li>The file contents</li>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Delete &rarr;</h2>
            <li>The file</li>
            <li>The folder</li>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
