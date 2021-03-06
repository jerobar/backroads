import React from 'react'
import { Link } from 'gatsby'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import styles from '../css/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map((item, index) => (
        <Link key={index} to={item.path}>{item.text}</Link>
      ))}
    </div>
    <div className={styles.icons}>
      {socialIcons.map((item, index) => (
        <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
          {item.icon}
        </a>
      ))}
    </div>
    <div className={styles.copyright}>
      Copyright &copy; Backroads Travel Company {new Date().getFullYear()} | All rights reserved
    </div>
  </footer>
)

export default Footer
