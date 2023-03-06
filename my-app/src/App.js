//  import {v4 as uuidv4} from 'uuid'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//  import React,{useState} from 'react'
 import FeedbackStats from './Components/FeedbackStats'
//  import FeedbackData from './Components/data/FeedbackData'
 import Header from './Components/Header'
 import FeedbackList from './Components/Feedbacklist'
 import FeedbackForm from './Components/FeedbackForm'
 import AboutPage from './Page/AboutPage'
 import AboutIconLink from './Components/AboutIconLink'
 import Post from './Components/Post'
 import { FeedbackProvider } from './Components/context/FeedbackContext'
 export default function App() {
 
  //  const [feedback, setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {
    // newFeedback.id= uuidv4()
    //  setFeedback([newFeedback,...feedback])
    // } 
     
  //  const deleteFeedback = (id) => {
  //    if(window.confirm('Are you sure you want to delete it.')){
  //     setFeedback(feedback.filter((item) => item.id !==id))
  //    }
  //  }
   
   return (
     <FeedbackProvider>
     <BrowserRouter>
     <Header/> 
     <div className='container'>
      <Routes>
      <Route 
      exact 
      path='/' 
      element={
      <>
      {/* <FeedbackForm handleAdd={addFeedback}/> */}
      {/* <FeedbackStats feedback={feedback}/> */}
      {/* <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> */}

      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList />
      </>
    }
    ></Route>
      
      <Route path='/about' element={<AboutPage/>}/>
      {/* <Route path='/post/:id/:name' element={<Post/>}/> */}
      <Route path='/post/*' element={<Post/>}/>
      </Routes>
      <AboutIconLink/>
    </div>
     </BrowserRouter>
     </FeedbackProvider>
   )
 }
 

 
 
 
