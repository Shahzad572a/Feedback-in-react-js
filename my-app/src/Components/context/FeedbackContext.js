// import {v4 as uuidv4} from 'uuid'
import  {createContext,useState,useEffect} from 'react'

const FeedbackContext =createContext()

export const FeedbackProvider =({children}) => {
  const [isLoading ,setisloading] = useState(true)
    const [feedback, setFeedback] =useState([])

    // ([
    //     {
    //       id: 1,
    //       text:'This is the Feedback item 1',
    //       rating:1
    //     },
    //     {
    //         id: 3,
    //         text:'This is the Feedback item 2',
    //         rating:2
    //       },
    //       {
    //         id: 2,
    //         text:'This is the Feedback item 3',
    //         rating:3
    //       }
    // ])

  
   const [feedbackEdit,setFeedbackEdit] =useState({
      item: {},
      edit: false
    })

    useEffect(() => {
      fetchFeedback(); 
     },[])

  //  fetch feedback 
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setisloading(false)
  }


     // Add feedback
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id= uuidv4()
    //      setFeedback([newFeedback,...feedback])
    //     } 
  

     //  Remove feedback  
    //  const deleteFeedback = (id) => {
    //   if(window.confirm('Are you sure you want to delete it.')){
    //    const data = feedback.filter((item) => item.id !==id)

    //     setFeedback(data)

    //   }

    // update item feedback 
    // const updateFeedback = (id, updItem) => {
    //   setFeedback(
        // feedback.map((item) => (item.id===id ? {...item, ...updItem} : item))
      // )

    // This code we add and submit the data to the json server 
     const addFeedback = async (newFeedback) => {
      const response = await fetch('/feedback',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(newFeedback),
    })
    const data = await response.json()
       setFeedback([ data,...feedback])
      } 

      // This code we delete the data from the json server
       const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete it.')){
          await fetch(`/feedback/${id}`,{
            method:'DELETE'})
         const data = feedback.filter((item) => item.id !==id)

          setFeedback(data)

        }
      }
      // This code we update the data in the json server
      const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`,{
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(updItem),
        })
        const data = await response.json()
      setFeedback(
        feedback.map((item) => (item.id===id ? {...item, ...data} : item))
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
)}
export default FeedbackContext;