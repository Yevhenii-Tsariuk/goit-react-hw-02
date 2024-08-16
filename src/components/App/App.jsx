import css from "./App.module.css";

import Description from "../Desription/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App(){
 
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = feedback.good + feedback.bad > 0 
  ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100)
  : 0;

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };
  
  return(
    <div className={css.container}>
   <Description /> 

   <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} resetFeedback={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}/>
 
   {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  )
}