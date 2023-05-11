import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../layout-01/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main style={{
         textAlign:'center'
        }}>
            <div style={{
              textAlign: 'justify',
              maxWidth: 800,
              margin: '0 auto',
              boxShadow: '17px -19px 42px -11px rgba(0,0,0,0.1)',
              padding: 20
            }}>

            <p>
                Our mission is to share the gospel of Jesus Christ with the world through biblical teaching and music. 
            </p>  
            
            <p>
                At our core, we are passionate about creating music that is rooted in Jesus Chist and biblical teachings. Our desire is to craft songs that are not only musically excellent, but also speak thruth and give people hope.
            </p>
            <p>
                We strive to communicate the truth of God's Word in a way that is both accessible and inspiring, and we seek to encourage believers and non-believers to pursue a relationship with God.
            </p>
            
            </div>
               
                <p>
            <span style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            display: 'block',
            }}>Timothy 4:7-8 
            <span style={{
                fontSize: '1rem',
                paddingLeft: 20
            }}>
                 King James Version    
            </span> </span>
            </p>
            <div style={{
                textAlign: 'center'
            }}>
                <p  style={{
                  textAlign: 'justify',
                  width: '80%',
                  margin: '0 auto'
                }}>
            I have fought a good fight, I have finished my course, I have kept the faith:
            Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.
            </p>
            <footer>
              <a href="mailto:contact@ryministries.org" style={{
                color: '#a5d7e0',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>
                contact@ryministries.org
              </a>
        </footer>  
            </div>
        </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>R&G Ministries</title>
