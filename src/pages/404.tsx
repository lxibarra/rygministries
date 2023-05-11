import { css } from "@emotion/css"
import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <div style={{
        textAlign: 'center'
      }}>
      <img src="https://res.cloudinary.com/www-codervelop-com/image/upload/c_scale,w_300/v1683840290/icon_zbhgmy.png" alt="logo"/>
        <br />
        <Link style={{
           color: '#a5d7e0',
           fontWeight: 'bold',
           textDecoration: 'none',
           fontSize: '3em'
        }} to="/">Lost?</Link>.
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
