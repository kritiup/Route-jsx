import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="about-container">
        <h2>About This Project</h2>
        <p>
          This React project demonstrates how to build a multi-page web application using
          <code> react-router-dom</code>. It covers basic routing concepts and shows how to
          create reusable components and apply styling.
        </p>

        <section className="about-section">
          <h3>Tech Stack</h3>
          <ul>
            <li>React.js (Functional Components)</li>
            <li>React Router v6</li>
            <li>CSS for styling</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>Purpose</h3>
          <p>
            The goal of this project is to help learners understand routing in React by building
            a small but complete application with navigation, pages, and component-based design.
          </p>
        </section>
      </div>
    </>
  );
}
