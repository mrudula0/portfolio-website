import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('contactData')) || [];

    const updatedData = [...existingData, formData];

    localStorage.setItem('contactData', JSON.stringify(updatedData));

    alert('Message Saved ✅');

    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          start={{ transform: 'translateX(200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  type="text"
                  className="inputName"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="nameLabel">Name</label>
              </div>

              <div>
                <input
                  required
                  name="email"
                  type="email"
                  className="inputEmail"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="emailLabel">Email</label>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <textarea
                  required
                  name="description"
                  rows="5"
                  className="inputDescription"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label className="descriptionLabel">Description</label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
