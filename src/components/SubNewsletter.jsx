import React, { useState } from 'react'
import Notification from '../assets/Images/icon-notification.svg'

const SubNewsletter = () => {
    const [formData, setFormData] = useState({email:''})
    const [errors, setErrors] = useState ({});
    const [submitted, setSubmitted] = useState(false)

    const validateField = (name, value) => {
        let error = ''

        if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "You must enter a valid email-adress!"
        }

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }

    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "You must enter a valid email-adress!"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

        validateField(name, value)

        if (value.trim () === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: "Please enter an emailadress to subscribe."}))
        }
    };

    const handleClose = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = "Please enter an emailadress to subscribe."
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', { 
            method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) 
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({email:''})
        }
    }

    if (submitted) {
        return (
            <div className='container information-box'>
                <h2>Thank you for subscribing to our newsletter!</h2>
                <button className='btn-primary' onClick={handleClose} >Close</button>
            </div>
        )
    }

  return (
    <section id='sub-newsletter'>
        <form className="container" onSubmit={handleSubmit} noValidate>
            <div className='headline'>
                <img src={Notification} alt="Notification Icon"/>
                <h4 className='mobile-text'>Subscribe to our newsletter</h4>
                <h4 className='desktop-text'>Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>
            <div className='input-group'>
                <div className='sub-input'>
                    <i className="fa-light fa-envelope icon"></i>
                    <input className='form-input email' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your Email' required/>
                    <button className='btn-sub'>Subcribe</button>
                </div>
                {errors.email && <span className='validation-error'>{errors.email}</span>}
            </div>
        </form>
    </section>
  )
}

export default SubNewsletter