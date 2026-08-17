import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  function handleAddStudent(newStudent) {
    setStudents(prev => [...prev, { ...newStudent, id: Date.now() }]);
  }

  const visibleStudents = students
    .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(s => {
      if (statusFilter === 'deansLister') return s.gwa <= 1.75;
      if (statusFilter === 'probation') return s.status === 'On Probation';
      return true;
    });

  return (
    <div>
      <h1>Student Directory</h1>
      <StudentForm onAdd={handleAddStudent} />
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}
