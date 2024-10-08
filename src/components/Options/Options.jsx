import css from "./Options.module.css"


export default function Options({ totalFeedback, updateFeedback, resetFeedback}) {
     
   
     return (
       <div className={css.sectionOptions}>
         <button onClick={() => updateFeedback('good')} className={css.button}>Good</button>
         <button onClick={() => updateFeedback('neutral')} className={css.button}>Neutral</button>
         <button onClick={() => updateFeedback('bad')} className={css.button}>Bad</button>
         {totalFeedback > 0 && (
           <button onClick={resetFeedback} className={css.button}>
             Reset
           </button>
         )}
       </div>
     );
   };