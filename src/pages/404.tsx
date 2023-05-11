import { css } from "@emotion/css"
import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className={css`
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `}>
      <div className={css`
        text-align: center;
      `}>
      <img src="https://res.cloudinary.com/www-codervelop-com/image/upload/c_scale,w_300/v1683840290/icon_zbhgmy.png" alt="logo"/>
        <br />
        <Link className={css`
           color: #a5d7e0;
           font-weight: bold;
           text-decoration: none;
           font-size: 3em;
        `} to="/">Lost?</Link>.
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
