import {v4 as uuidv4} from 'uuid'
import  {createContext,useState} from 'react'

const FeedbackContext =createContext()

export const FeedbackProvider =({children}) => {
    const [feedback, setFeedback] =useState
    ([
        {
          id: 1,
          text:'This is the Feedback item 1',
          rating:1
        },
        {
            id: 3,
            text:'This is the Feedback item 2',
            rating:2
          },
          {
            id: 2,
            text:'This is the Feedback item 3',
            rating:3
          }
    ])
 
    const [feedbackEdit,setFeedbackEdit] =useState({
      item: {},
      edit: false
    })

     // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
         setFeedback([newFeedback,...feedback])
        } 

     //  Remove feedback  
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete it.')){
         setFeedback(feedback.filter((item) => item.id !==id))
        }
      }
     // update item feedback 
      const updateFeedback = (id, updItem) => {
      setFeedback(
        feedback.map((item) => (item.id===id ? {...item, ...updItem} : item))
      )
      }
      // set the item feedback
      const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit :true
      })
      }
    return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
)}
export default FeedbackContext;