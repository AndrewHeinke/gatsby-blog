import React from 'react'
import Link from 'gatsby-link'


const Counter = () => (
  <div>
    <div>
      <h1>Counter</h1>
      <p>current count: 0</p>
      <button>plus</button>
      <button>minus</button>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Counter
