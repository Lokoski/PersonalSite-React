import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

function ContactMe() {

    const { register, handleSubmit, errors} = useForm();
    const [successMessage, setSuccessMessage] = useState("")

    const serviceID = "service_ID"
    const templateID = "template_ID"
    const userID = "user_kg3yLgNkUstEO86KHoLJY"

    const onSubmit = (data, reset) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
        )
        reset.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Thank you!");
          }).catch(err => `Something went wrong! ${err}`);
      }


    return (
        <div className="contact" id="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Hey you! Lets work together! <br/>Feel free to reach out. I'm looking forward to hearing from you.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="break-line"></div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12 ">
                        {/*--NAME INPUT--*/}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            ref={
                                register({
                                    required: 'Please enter your name',
                                    maxLength: 20,
                                    message: "Please enter a name with 20 characters or less!"
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        
                        {/*--EMAIL INPUT--*/}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Email"
                            name="email"
                            ref={
                                register({
                                    required: 'Please enter your email',
                                    pattern:{
                                        value: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/i,
                                        message: "Invalid email!"
                                    }
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/*--SUBJECT INPUT--*/}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required: 'Please add a subject'
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    {/*--*/}
                    <div className="col-md-6 col-xs-12">
                        {/*--DESCRIPTION INPUT--*/}
                        <div className="text-center">
                        <textarea
                            className="form-control"
                            placeholder="What can I help you with?"
                            name="message"
                            ref={
                                register({
                                    required: "Please add a message",
                                })
                            }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.message && errors.message.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        
    )
}

export default ContactMe
