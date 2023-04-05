import { useState } from 'react';
import './index.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, like sending it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              placeholder="Enter name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="form-control"
          placeholder="Enter the subject of your message"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="5"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
