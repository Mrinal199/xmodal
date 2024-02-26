import React, { useState } from 'react';

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => {
    setIsOpen(true);
    setErrorMessage('');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !dob) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Invalid email. Please check your email address.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    const currentDate = new Date();
    const inputDate = new Date(dob);
    if (inputDate > currentDate) {
      setErrorMessage('Invalid date of birth. Please enter a past date.');
      return;
    }
    // Here you can handle form submission or any further processing
    // For simplicity, let's just reset the form
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
              <button type="submit" className="submit-button">Submit</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
