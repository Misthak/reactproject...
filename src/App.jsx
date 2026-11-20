import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="dashboard">

      <h1>Student Dashboard</h1>
      <p className="subtitle">A little overview of your campus life.</p>

      <div className="quick-actions">
        <button>Attendance</button>
        <button>Schedule</button>
        <button>Pay fees</button>
      </div>

      <div className="profile-card">

        <div className="profile-info">
          <p className="label">YOUR ACCOUNT</p>
          <h2>Student Profile</h2>

          <div className="details">
            <p><span>Name</span> Misthak</p>
            <p><span>Age</span> 20</p>
            <p><span>Major</span> Computer Science</p>
          </div>
        </div>

        <div className="profile-buttons">
          <button>Edit profile</button>
          <button>Delete profile</button>
        </div>

      </div>

      <div className="professor-grid">

        <div className="professor-card">
          <div className="number">1</div>
          <p className="label">FACULTY</p>
          <h2>Professors</h2>
          <p>Professor 1</p>
          <p className="department">Computer Science</p>
          <a href="mailto:professor1@university.edu">
            professor1@university.edu
          </a>
        </div>

        <div className="professor-card">
          <div className="number">2</div>
          <p className="label">FACULTY</p>
          <h2>Professors</h2>
          <p>Professor 2</p>
          <p className="department">Mathematics</p>
          <a href="mailto:professor2@university.edu">
            professor2@university.edu
          </a>
        </div>

        <div className="professor-card">
          <div className="number">3</div>
          <p className="label">FACULTY</p>
          <h2>Professors</h2>
          <p>Professor 3</p>
          <p className="department">Physics</p>
          <a href="mailto:professor3@university.edu">
            professor3@university.edu
          </a>
        </div>

      </div>
            <div className="counter-section">
        <h2>Counter</h2>

        <div className="count-number">
          {count}
        </div>

        <div className="counter-buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment +
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement -
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

    </div>
    
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<h1 className="other-page">About Page</h1>} />

        <Route path="/professors" element={<h1 className="other-page">Professors Page</h1>} />

        <Route path="/contact" element={<h1 className="other-page">Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
