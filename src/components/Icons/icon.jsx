import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
} from "."; // <-- Adjust path as needed

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
