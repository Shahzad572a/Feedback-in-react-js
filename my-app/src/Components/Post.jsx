// NestedRoutes 
import React from 'react'
import{Routes,Route} from 'react-router-dom'
function Post() {
  return (
    <div>
      <Routes>
        <Route path='show' element={<h1>Hello</h1>}/>
      </Routes>
    </div>
  )
}

export default Post

















// import React from 'react'
// import{Navigate , useNavigate} from 'react-router-dom'
// function Post() {
//      const stats =200
    
//      const navig =useNavigate()
//       const click = () => {
//         console.log('Hello');
//         navig('/about')
//       }
//       if (stats===404) {
//         return <Navigate to='notfound'/>
//       }
//   return (
//     <div>
//        <h1>post</h1>
//        <button onClick={click}>click</button>
//     </div>
//   )
// }

// export default Post












// import React from 'react'
// import{useParams} from 'react-router-dom'
// function Post() {
//     const pram =useParams()
//   return (
//     <div>
//        <h1>ID: {pram.id}</h1>
//        <h1>Name: {pram.name}</h1>
//     </div>
//   )
// }

// export default Post
