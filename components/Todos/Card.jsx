import styles from './card.module.css';

const Card = ({ title = 'Build an app', isCompleted }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>

      <h5>{isCompleted ? 'Completed' : 'In progress 🧚🏽‍♀️'}</h5>
    </div>
  );
};

export default Card;
