import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound-page container'>
      <h1>The Page Not Found</h1>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default NotFound
