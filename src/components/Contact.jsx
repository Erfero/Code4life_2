import { useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import SimpleLoader from "./SimpleLoader";
import { slideIn } from "../utils/motion";
import { contactInfo } from "../constants";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.01 2C6.487 2 2.01 6.477 2.01 12c0 1.887.52 3.653 1.425 5.163L2 22l4.963-1.402A9.953 9.953 0 0 0 12.01 22C17.533 22 22.01 17.523 22.01 12S17.533 2 12.01 2Zm0 18.2a8.17 8.17 0 0 1-4.4-1.284l-.315-.198-2.945.832.85-2.87-.205-.3A8.16 8.16 0 0 1 3.81 12c0-4.522 3.678-8.2 8.2-8.2s8.2 3.678 8.2 8.2-3.678 8.2-8.2 8.2Z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8">
    <path
      d="M5 4h3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2L18.5 15v3a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.335-.024-3.053-1.86-3.053-1.862 0-2.148 1.454-2.148 2.955V20H9.72V8.5h3.235v1.57h.046c.45-.853 1.55-1.752 3.19-1.752 3.41 0 4.24 2.245 4.24 5.164V20Z" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-accent" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5" strokeLinecap="round" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-accent" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 5h16v10H9l-4 4v-4H4V5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactChip = ({ href, target, icon: Icon, label }) => (
  <a
    href={href}
    target={target}
    rel={target ? "noopener noreferrer" : undefined}
    className="flex items-center gap-2 text-[13px] text-white border border-white/15 rounded-full pl-3 pr-4 py-2 hover:border-accent hover:text-accent transition-colors"
  >
    <Icon />
    {label}
  </a>
);

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
      alert("Une erreur est survenue, réessayez ou contactez-moi directement par email.")
    })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Travaillons ensemble</p>
        <h3 className={styles.sectionHeadText}>Parlons de votre projet.</h3>
        <p className="mt-4 text-secondary text-[15px] max-w-lg">
          Une idée, un besoin urgent, ou juste une question ? Écrivez-moi ou passez
          directement par l&apos;un des canaux ci-dessous, je réponds vite.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ContactChip href={`mailto:${contactInfo.email}`} icon={MailIcon} label={contactInfo.email} />
          <ContactChip href={contactInfo.whatsappHref} target="_blank" icon={WhatsAppIcon} label="WhatsApp" />
          <ContactChip href={contactInfo.phoneHref} icon={PhoneIcon} label={contactInfo.phone} />
          <ContactChip href={contactInfo.linkedinHref} target="_blank" icon={LinkedInIcon} label="LinkedIn" />
        </div>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label
          className="flex flex-col"
          >
            <span className="flex items-center gap-2 text-white font-medium mb-4">
              <UserIcon /> Votre Nom :
            </span>
            <input
            type="text" 
            name = "name"
            value={form.name}
            onChange={handleChange}
            placeholder="Quel est votre nom ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/20 focus:border-accent focus:outline-none font-medium transition-colors"
            />
          </label>
          <label
          className="flex flex-col"
          >
            <span className="flex items-center gap-2 text-white font-medium mb-4">
              <MailIcon /> Votre Email :
            </span>
            <input
            type="email" 
            name = "email"
            value={form.email}
            onChange={handleChange}
            placeholder="Quel est votre email ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/20 focus:border-accent focus:outline-none font-medium transition-colors"
            />
          </label>
          <label
          className="flex flex-col"
          >
            <span className="flex items-center gap-2 text-white font-medium mb-4">
              <MessageIcon /> Votre Message :
            </span>
            <textarea
            rows="7" 
            name = "message"
            value={form.message}
            onChange={handleChange}
            placeholder="Qu'est ce que vous voulez dire ou savoir ?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/20 focus:border-accent focus:outline-none font-medium transition-colors"
            />
          </label>

          <button
           type="submit" className="bg-accent text-primary py-3 px-8 outline-none w-fit font-heading font-bold shadow-md shadow-primary rounded-xl hover:opacity-90 transition-opacity"
          >
            {loading ? 'En cours d\'envoi...' : 'Envoyer'}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-[1.15] xl:h-auto md:h-[560px] h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-tertiary"
      >
        <Suspense fallback={<SimpleLoader />}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  )
}


export default SectionWrapper(Contact, "contact")