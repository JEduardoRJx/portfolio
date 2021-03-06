import React, { useState } from 'react';
import './ContactForm.scss';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

const ContactForm = () => {

  const [displayThankYou, setDisplayThankYou] = useState(false)
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async () => {
    try {
      const url = 'https://formspree.io/xvorjkvy'
      await axios.post(url, inputs)
      setDisplayThankYou(true)
      setTimeout(() => {
        setDisplayThankYou(false)
      }, 2000)
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } catch(err) {
      throw new Error(err)
    }
  }

  const handleChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
  const renderButton = () => {
    if (inputs.name
      && (inputs.email.includes('@') && inputs.email.includes('.com'))
      && inputs.message) {
        return (<button type='button' onClick={() => handleSubmit()}>Send</button>)
    }
  }

  return (
      <>
        {!displayThankYou && 
          <Fade bottom delay={200}>
            <h2 className='reach-out-text'>Contact</h2>
            <form>
              <label className='form-el'>Name:</label>
              <input 
                className='form-el'
                name='name'
                type='text'
                alt='name input'
                onChange={e => handleChange(e)}></input>
              <label className='form-el'>Email:</label>
              <input className='form-el'
                name='email'
                type='text'
                alt='email input'
                onChange={e => handleChange(e)}></input>
              <label className='form-el'>Message:</label>
              <textarea className='form-el'
                name='message'
                type='text'
                alt='message input'
                placeholder='Hello Eduardo...'
                onChange={e => handleChange(e)}></textarea>
              {renderButton()}
            </form>
          </Fade>}
          {displayThankYou && 
            <Fade bottom>
              <h2 className='thankyou-msg'>Thank you!</h2>
            </Fade>}
      </>
  );
}

export default ContactForm;