import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out using the form below.</p>
        
        <form className="contact-form">
          <label htmlFor="name">Name  </label>
          <input type="text" id="name" placeholder="Your name" /><br/><br/>

          <label htmlFor="email">Email  </label>
          <input type="email" id="email" placeholder="Your email" /><br/><br/>

          <label htmlFor="message">Message  </label>
          <textarea id="message" placeholder="Your message"></textarea><br/><br/>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
