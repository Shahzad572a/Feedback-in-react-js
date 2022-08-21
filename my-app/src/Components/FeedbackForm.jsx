import React,{useState,useEffect,useContext} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'



function FeedbackForm() {
const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)



const [text,setText] = useState('')
const [rating,setRating] = useState(10)
const [btnDisabled,setBtnDisabled] = useState(true)
const [message,setMessage] = useState('')


useEffect(()=>{
  if (feedbackEdit.edit===true){
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }
},[feedbackEdit])

    
const handleTextChange = (e) => {
      if(text===''){
        setBtnDisabled(true)
        setMessage(null)
      } else if (text !=='' && text.trim().length <=10){
        setMessage('Text must be ten characters')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }
     setText(e.target.value);
      
    }
  
    
     const submitHanler= (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit===true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback);
      }
      
      setText('')
    }
     }
    

  return (
    <Card>
    <form onSubmit={submitHanler}>
      <h2>How would your rate your service with us ?</h2>
      <RatingSelect select={(rating) => setRating(rating)}/>
      <div className='input-group'>
        <input 
        onChange={handleTextChange} 
        type="text"  
        placeholder='Write a review' 
        value={text}/>
        <Button type="submit" disabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </form>
  </Card>
  )
}

export default FeedbackForm