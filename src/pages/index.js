import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Learning React</h1>
    <p>Creating my wedding website by learning to design and code React apps</p>
    <p>Lets go build something great. Just dont do it half way.</p>
    <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
