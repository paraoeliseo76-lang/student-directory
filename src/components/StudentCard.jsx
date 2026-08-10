import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isOnProbation = student.status === 'On Probation';
  const isDeansLister = student.gwa <= 1.75;

  return (
    <div className={isOnProbation ? `${styles.card} ${styles.probation}` : styles.card}>
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Year Level: {student.yearLevel}</p>
      <p>Status: {isOnProbation ? 'On Probation' : student.status}</p>
      <p>GWA: {student.gwa}</p>

      {isDeansLister && (
        <span className={styles.badge}>Dean's Lister</span>
      )}
    </div>
  );
}
