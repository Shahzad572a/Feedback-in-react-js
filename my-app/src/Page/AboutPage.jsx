import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'
// import Post from '../Components/Post'
function AboutPage() {
  return (
    <Card>
    <div className='about'>
      <h1>About This Page</h1>
      <p>This is the react page to leave feedback!</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
    </Card>
  )
}

export default AboutPage