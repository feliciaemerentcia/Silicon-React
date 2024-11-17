import React, { useState } from 'react'

const ConsultationForm = () => {
    const [formData, setFormData] = useState ({fullName: '', email: '', specialist: '',  })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState (false)

    const validateField = (name, value) => {
        let error = ''

        if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
            error = "Your name can not contain numbers and need to be at least 2 characters long!"
        }
        if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "You must enter a valid email-adress!"
        }

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }
    
    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
            newErrors.fullName = "Your name can not contain numbers and need to be at least 2 characters long"
        }

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email-adress"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })

        validateField(name, value)
    };

    const handleClose = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `This field is required to book a consultation!`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        if(validateForm()) {
            console.log('form valid')
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData),
            })

            if (res.ok) {
                setSubmitted(true)
                setFormData({fullName: '', email: '', specialist: '' })
            } 
        }
    }

    if (submitted) {
        return (
            <div className='consultation-confirmation'>
                <h1>Thank you for contacting us!</h1>
                <p>We will get back to you as soon as we have reviewed your application</p>
                <button className='btn-primary' onClick={handleClose}>Close</button>
            </div>
        )
    }

  return (
    <section id='consultation-form'>
        <div className='container'>
            <h3>Get Online Consultation</h3>
            <form onSubmit={handleSubmit} noValidate className='consultation-form'>
                <div className='form-group'>
                    <p>Full name</p>
                    <input type="name" value={formData.fullName} onChange={handleChange} required name='fullName'/>
                    <span>{errors.fullName && errors.fullName}</span>
                </div>
                <div className='form-group'>
                    <p>Email address</p>
                    <input type="email" value={formData.email} onChange={handleChange} required name='email' />
                    <span>{errors.email && errors.email}</span>
                </div>
                <div className='form-group'>
                    <p>Specialist</p>
                    <select value={formData.specialist} onChange={handleChange} name="specialist" required>
                        <option disabled value=""></option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                    </select>
                    <span>{errors.specialist && errors.specialist}</span>
                </div>
                <button type="submit" className="btn-primary">Make an appointment</button>
            </form>
        </div>

    </section>
  )
}

export default ConsultationForm