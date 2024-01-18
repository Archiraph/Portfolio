import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";
init(process.env.REACT_APP_PUBLICKEY);

const Contact = () => {
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

  return (
    <div id="contact">
      <div id="Cv">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <header>
        <Nav />
      </header>
      <div id="head-contact">
        <h2>Prise de contact</h2>
        <p>
          Je suis activement à la recherche d'un emploi et je suis ouvert à
          toute proposition.
          <br />
          <br />
          Vous pouvez me contacter via le formulaire ci-dessous, par téléphone
          ou via mes réseaux sociaux.
          <br />
          <br /> Le dévelopement est un apprentissage continu et le meilleur
          moyen d'apprendre est en travaillant. Merci d'avoir pris le temps de
          regarder mes projets !
        </p>
      </div>
      <div id="content-contact">
        <div id="infos-contact">
          <NavLink
            to="https://portfolio-lac-psi-91.vercel.app"
            target="_blank"
            className="navLi"
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                />
              </svg>
              raphaelmortiers.com
            </li>
          </NavLink>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            0471 86 93 59
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
            raphael.mortiers@hotmail.com
          </li>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" id="mess" />
          </div>
          <div>
            <input type="submit" value="Envoyer" id="button" />
          </div>
          <div className="formMessage"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
