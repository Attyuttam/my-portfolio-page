import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_hgNnIHI1GOh16LeDvdpyU";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID, 
      templateID,
      data,
      userID
      )
    r.target.reset();

  };
  function sendEmail(serviceID, templateID, variables, userID) {
  
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Email sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out the form with the job requirements or drop me a
          message on LinkedIn
        </p>
        <span className="success-message">{successMessage}</span>

      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                <div className="line"></div>
              </div>
              {errors.name && errors.name.type === "required" && (
                <span className="error-message">Please enter a name</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="error-message">
                  Please enter a name of upto 20 characters
                </span>
              )}
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  name="phone"
                  {...register("phone", {
                    required: true,
                  })}
                />
                <div className="line"></div>
              </div>
              {errors.phone && errors.phone.type === "required" && (
                <span className="error-message">
                  Please enter a phone number
                </span>
              )}

              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                />
                <div className="line"></div>
              </div>
              {errors.email && errors.email.type === "required" && (
                <span className="error-message">Please enter an email id</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error-message">Please enter a valid email id</span>
              )}
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: true,
                  })}
                />
                <div className="line"></div>
              </div>
              {errors.subject && errors.subject.type === "required" && (
                <span className="error-message">Please enter subject</span>
              )}
            </div>

            <div className="col-md-6  col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: true,
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              {errors.description && errors.description.type === "required" && (
                <span className="error-message">Please enter description</span>
              )}
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
