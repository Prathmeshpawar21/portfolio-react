import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { name, email, message },
    {
      publicKey: import.meta.env.VITE_EMAILJS_USER_ID,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;
