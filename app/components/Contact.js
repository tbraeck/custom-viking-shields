
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Email: viking@shieldsandweapons.com</p>
      <p>Phone: (555) 123-4567</p>
      <form>
        <label>
          Message:
          <textarea placeholder="Write your message here"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
