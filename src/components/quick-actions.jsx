import './quick-actions.css'

function QuickActions() {
  return (
    <section className="quick-actions" aria-label="Student shortcuts">
      <a className="action-link" href="#student-profile">Attendance</a>
      <a className="action-link" href="#professors">Schedule</a>
      <a className="action-link" href="#student-profile">Pay fees</a>
    </section>
  )
}

export default QuickActions
