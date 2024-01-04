import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
init(process.env.REACT_APP_PUBLICKEY);

const Popup = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_iohtmof",
        "template_ojleqn8",
        form.current,
        process.env.REACT_APP_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = `<p className="success">Message envoyé !</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML = `<p className="error">Une erreur s'est produite, veuillez réessayer</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  const animPopup = {
    initial: {
      opacity: 0,
      x: 2000,
      y: -250,
    },
    visible: {
      opacity: 1,
      x: "78vw",
      y: "-25vh",
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 1],
    duration: 1,
  };

  const popupOff = () => {
    document.getElementById("popup").style.display = "none";
  };

  return (
    <motion.div
      variants={animPopup}
      transition={transition}
      initial="initial"
      animate="visible"
      id="popup"
    >
      <div>
        <FontAwesomeIcon icon={faX} className="iconX" onClick={popupOff} />
        <h2>Contactez moi</h2>
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
          />
          <label>Message</label>
          <textarea name="message" id="mess" />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="formMessage"></div>
      </div>
    </motion.div>
  );
};

export default Popup;
