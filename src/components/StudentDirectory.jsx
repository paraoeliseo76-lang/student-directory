import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div>
      <h1>Student Directory</h1>
      <div>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
