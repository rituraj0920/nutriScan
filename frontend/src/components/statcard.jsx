export default function StatCard({ title, value, icon, colorClass }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="text-muted text-uppercase small">{title}</h5>
          <h2 className={`text-${colorClass}`}>{value}</h2>
        </div>
      </div>
    </div>
  );
}