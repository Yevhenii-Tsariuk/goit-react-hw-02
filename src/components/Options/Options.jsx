import css from "./Options.module.css"


export default function Options({ setFeedback, totalFeedback }) {
     const updateFeedback = (feedbackType) => {
       setFeedback((prevFeedback) => ({
         ...prevFeedback,
         [feedbackType]: prevFeedback[feedbackType] + 1
       }));
     };
   
     return (
       <div className={css.sectionOptions}>
         <button onClick={() => updateFeedback('good')} className={css.button}>Good</button>
         <button onClick={() => updateFeedback('neutral')} className={css.button}>Neutral</button>
         <button onClick={() => updateFeedback('bad')} className={css.button}>Bad</button>
         {totalFeedback > 0 && (
           <button onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })} className={css.button}>
             Reset
           </button>
         )}
       </div>
     );
   };