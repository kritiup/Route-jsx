import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="home-container">
        <h2>Welcome to the React Router Tutorial</h2>
        <p>This is the home page of a simple React application demonstrating routing.</p>
        
        <section className="features">
          <h3>What You'll Learn</h3>
          <ul>
            <li>Setting up routes using <code>react-router-dom</code></li>
            <li>Creating reusable components</li>
            <li>Adding page navigation</li>
            <li>Styling your React app</li>
          </ul>
        </section>

        <section className="cta">
          <h3>Get Started Now</h3>
          <p>Explore the About and Contact pages using the navigation links.</p>
        </section>
      </div>
    </>
  );
}
