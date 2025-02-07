import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_jk4wzti',
      'template_kcd088e',
      {
        from_name: form.name,
        to_name: 'Erféro KEOULA',
        from_email: form.email,
        to_email: 'erferokam@gmail.com',
        message: form.message,
      },
      'NKbb8RK26fDHYa0rV'
    )
    .then(() => {
      setLoading(false);
      alert("Merci. Je vous recontacterai dès que possible.");

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert('Quelque chose ne vas pas avec ta logique.')
    })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Contactez-nous</p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label
          className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Votre Nom :</span>
            <input
            type="text" 
            name = "name"
            value={form.name}
            onChange={handleChange}
            placeholder="Quel est votre nom ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label
          className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Votre Email :</span>
            <input
            type="email" 
            name = "email"
            value={form.email}
            onChange={handleChange}
            placeholder="Quel est votre email ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label
          className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Votre Message :</span>
            <textarea
            rows="7" 
            name = "message"
            value={form.message}
            onChange={handleChange}
            placeholder="Qu'est ce que vous voulez dire ou savoir ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
           type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'En cours d\'envoi...' : 'Envoyez'}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}


export default SectionWrapper(Contact, "contact")