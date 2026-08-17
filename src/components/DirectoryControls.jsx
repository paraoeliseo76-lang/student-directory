import styles from './DirectoryControls.module.css';

export default function DirectoryControls({ searchTerm, onSearchChange, statusFilter, onStatusFilterChange }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'deansLister', label: "Dean's Listers" },
    { key: 'probation', label: 'On Probation' },
  ];

  return (
    <div className={styles.controls}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {filters.map(f => (
        <button
          key={f.key}
          className={`${styles.filterButton} ${statusFilter === f.key ? styles.activeFilter : ''}`}
          onClick={() => onStatusFilterChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
