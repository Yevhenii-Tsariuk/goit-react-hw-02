import css from "./Feedback.module.css";
export default function Feedback({ feedback, totalFeedback }) {
     const positiveFeedback = feedback.good + feedback.bad > 0 
     ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100)
     : 0;
  return (
    <div className={css.sectionFeedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
