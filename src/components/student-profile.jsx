import './student-profile.css'

function StudentProfile() {
  return (
    <section className="student-profile" id="student-profile" aria-labelledby="profile-title">
      <div className="profile-main">
        <p className="profile-kicker">YOUR ACCOUNT</p>
        <h2 id="profile-title">Student Profile</h2>
        <dl className="profile-details">
          <div className="profile-detail">
            <dt>Name</dt>
            <dd>Mohamed Misthak</dd>
          </div>
          <div className="profile-detail">
            <dt>Age</dt>
            <dd>20</dd>
          </div>
          <div className="profile-detail">
            <dt>Major</dt>
            <dd>Computer Science</dd>
          </div>
        </dl>
      </div>
      <div className="profile-actions">
        <button className="profile-button" type="button">Edit profile</button>
        <button className="profile-button" type="button">Delete profile</button>
      </div>
    </section>
  )
}

export default StudentProfile
