// src/App.jsx

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Background Blur Effects */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>
      <div className="blur blur3"></div>

      {/* Navbar */}
      <nav className="navbar">

        <h1 className="logo">
          MeetPulse <span>AI</span>
        </h1>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#analytics">Analytics</a>
          <a href="#workflow">Workflow</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">
          Get Started
        </button>

      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">

          <div className="tag">
            AI Powered Meeting Intelligence
          </div>

          <h1>
            Transform Meetings Into
            <span> Smart Decisions</span>
          </h1>

          <p>
            Analyze engagement, fatigue, productivity,
            communication patterns, and collaboration
            using AI-powered behavioral analytics.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Dashboard
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>

          </div>

          {/* Stats */}
          <div className="stats">

            <div className="stat-card">
              <h2>92%</h2>
              <p>Engagement Accuracy</p>
            </div>

            <div className="stat-card">
              <h2>40%</h2>
              <p>Time Saved</p>
            </div>

            <div className="stat-card">
              <h2>85%</h2>
              <p>Task Detection</p>
            </div>

          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-right">

          <div className="image-card">
            <img
              src="/hero-meeting.png"
              alt="Meeting Hero"
            />
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features" id="features">

        <div className="section-header">
          <p>POWERFUL FEATURES</p>
          <h1>AI Meeting Intelligence</h1>
        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <img
              src="/dashboard.png"
              alt="Dashboard"
            />

            <div className="card-content">
              <h2>AI Dashboard</h2>

              <p>
                Real-time analytics dashboard
                with productivity and engagement insights.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <img
              src="/engagement.png"
              alt="Engagement"
            />

            <div className="card-content">
              <h2>Engagement Analysis</h2>

              <p>
                Detects participation levels,
                focus drop, and interaction quality.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <img
              src="/fatigue.png"
              alt="Fatigue"
            />

            <div className="card-content">
              <h2>Fatigue Detection</h2>

              <p>
                AI identifies attention loss
                and meeting exhaustion patterns.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <img
              src="/tasks.png"
              alt="Tasks"
            />

            <div className="card-content">
              <h2>Task Extraction</h2>

              <p>
                Automatically extracts tasks,
                deadlines, and responsibilities.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <img
              src="/teamwork.jpg"
              alt="Teamwork"
            />

            <div className="card-content">
              <h2>Team Collaboration</h2>

              <p>
                Measures communication balance,
                interruptions, and teamwork quality.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Analytics */}
      <section className="analytics" id="analytics">

        <div className="section-header">
          <p>LIVE ANALYTICS</p>
          <h1>Meeting Performance</h1>
        </div>

        <div className="analytics-grid">

          <div className="analytics-card">

            <h2>Engagement Score</h2>

            <div className="progress">
              <div className="fill fill1"></div>
            </div>

            <span>78% Active Participation</span>

          </div>

          <div className="analytics-card">

            <h2>Decision Clarity</h2>

            <div className="progress">
              <div className="fill fill2"></div>
            </div>

            <span>82% Clear Outcomes</span>

          </div>

          <div className="analytics-card">

            <h2>Task Completion</h2>

            <div className="progress">
              <div className="fill fill3"></div>
            </div>

            <span>90% AI Accuracy</span>

          </div>

        </div>

      </section>

      {/* Workflow */}
      <section className="workflow" id="workflow">

        <div className="section-header">
          <p>WORKFLOW</p>
          <h1>How It Works</h1>
        </div>

        <div className="workflow-grid">

          <div className="step">
            <div className="step-number">01</div>

            <h2>Meeting Recording</h2>

            <p>
              Audio and transcripts are collected.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <h2>AI Processing</h2>

            <p>
              Behavior and communication are analyzed.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <h2>Insight Generation</h2>

            <p>
              AI generates productivity reports.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="contact" id="contact">

        <div className="contact-box">

          <div className="section-header">
            <p>CONTACT US</p>
            <h1>Get In Touch</h1>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <textarea
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <h2>MeetPulse AI</h2>

        <p>
          AI Powered Meeting Psychology Intelligence System
        </p>

      </footer>

    </div>
  );
}

export default App;