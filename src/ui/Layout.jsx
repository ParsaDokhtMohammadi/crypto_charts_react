import styles from './Layout.module.css'
const Layout = ({children}) => {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <a href="">PDM</a>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>developed by <a href="https://github.com/ParsaDokhtMohammadi">parsa</a> with love</p>    
        </footer> 
    </>
  )
}

export default Layout
