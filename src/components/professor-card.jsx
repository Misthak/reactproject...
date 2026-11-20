import './professor-card.css'

function ProfessorCard({ number, name, department, email }) {
  return (
    <article className="professor-card">
      <span className="professor-number">{number}</span>
      <p className="professor-label">FACULTY</p>
      <h2>Professors</h2>
      <p className="professor-name">{name}</p>
      <p className="professor-department">{department}</p>
      <a className="professor-email" href={`mailto:${email}`}>
        {email}
      </a>
    </article>
  )
}

export default ProfessorCard
