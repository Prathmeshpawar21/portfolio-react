export const METADATA = {
  author: "Prathamesh Pawar",
  title: "Prathamesh Pawar",
  description:
    "Prathamesh pawar is a professional Data Scientist specializing in AI, machine learning, and advanced analytics, passionate about solving complex problems through data-driven innovation.",
  siteUrl: "https://prathameshpawar-mu.vercel.app/", //baki 
  twitterHandle: "@13Prathamesh",
  keywords: [
    "Prathamesh Pawar",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  // image:
  //   "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png", // baki
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Work", ref: "work" },
  { name: "Contact", ref: "contact" },
];

export const MENULINKSWORKSTATION = [
  { name: "Workstation", ref: "workstation" },
];

export const TYPED_STRINGS = [
  "A professional Data Scientist",
  "Expert in Machine Learning and Analytics.",
  "Empowering Businesses with Insights.",
];

export const SOCIAL_LINKS = [
  { name: "mail", url: "mailto: prathameshpawar212002@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/prathameshpawar21/" },
  { name: "github", url: "https://github.com/Prathameshpawar21" },
  { name: "instagram", url: "https://www.instagram.com/prathmesh_pawar_21/" },
  { name: "twitter", url: "https://x.com/13Prathamesh" },
];

export const SKILLS = {
  languagesAndTools: ["python-svgrepo-com", "r-programming-language-icon", "file-sql-color-green-icon"],
  librariesAndFrameworks: [
    "TensorFlow", "pytorch-svgrepo-com", "OpenCV", "Keras", "scikit-learn",
    "seaborn-1", "icons8-flask", "matplotlib-seeklogo", "hadoop-svgrepo-com",
    "Apache-Spark--Streamline-Svg-Logos", "parrot-svgrepo-com",
  ],
  tools: [
    "power-bi-icon", "tableau-software", "Jupyter", "microsoft-excel-2013", "huggingface-2",
  ],
  databases: ["mysql-logo-svgrepo-com", "mongodb", "Azure"],
  other: [
    "vs-code-svgrepo-com", "git", "github-white-icon", "Anaconda", "docker-icon"
  ],
  osData: ["Windows 8", "Linux", "icons8-apple"],
  // Web
  languagesAndToolsWeb: ["html", "css", "javascript-svgrepo-com", "PHP"],
  librariesAndFrameworksWeb: ["react", "Bootstrap", "nodejs", "NPM"],
  toolsWeb: ["xampp", "Postman"],
  databasesWeb: [],
  cloudWeb: ["Heroku", "netlify-svgrepo-com"],
  otherWeb: ["vs-code-svgrepo-com", "github-white-icon"],
  // Game Dev
  languagesAndToolsGame: ["c-sharp-programming-language-icon", "cpp"],
  librariesAndFrameworksGame: [],
  toolsGame: ["icons8-unreal-engine", "icons8-unity", "Blender"],
  databasesGame: [],
  otherGame: [],
};




export const PROJECTS = [
  {
    name: "RAG Multi-PDF Chat",
    image: "/projects/Ragpdf2.png",
    blurImage: "/projects/blur/ragblur.png",
    description: "Mulit PDF Chat using - Langchain + GenAI + OpenAI/Mistral/Ollama 🤖",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://super-chat-pdf.streamlit.app/",
    tech: ["openai-svgrepo-com","mistral-ai-icon", "tensorflow-svgrepo-com", "parrot-svgrepo-com","ollama"],
  },


  {
    name: "RAG Analytics",
    image: "/projects/hotelrag.png",
    blurImage: "/projects/blur/hotelrag.png", 
    description: "RAG Analytics on Hotel's DataFrame - Langchain + GenAI 🤖",
    gradient: ["#000033", "#3366CC"],
    url: "https://rag-data-analytics-df.streamlit.app/",
    tech: ["parrot-svgrepo-com", "mistral-ai-icon","huggingface-2","ollama","icons8-streamlit",],
  },
  {
    name: "Sentiment Review Analysis",
    image: "/projects/sentimentpng.png",
    blurImage: "/projects/blur/sentimentpng.png", 
    description: "Sentiment Analysis using - Python/Streamlit + Machine Learning 🤖",
    gradient: ["#8B0000", "#FF4500"],
    url: "https://sentiment-analysis-prathamesh.streamlit.app/",
    tech: ["python-svgrepo-com", "huggingface-2","icons8-streamlit","hadoop-svgrepo-com","machine-learning-03-svgrepo-com",],
  },
  {
    name: "Task Extractor",
    image: "/projects/taskExtractor.png",
    blurImage: "/projects/blur/taskExtractor.png", 
    description: "Task Extractor from List using - Python/Streamlit + Machine Learning 🤖",
    gradient: ["#220033", "#660099"],
    url: "https://task-extraction.streamlit.app/",
    tech: ["python-svgrepo-com", "icons8-streamlit", "vs-code-svgrepo-com","machine-learning-03-svgrepo-com",],
  },




  {
    name: "Car Price Prediction",
    image: "/projects/carprice2.png",
    blurImage: "/projects/blur/carpriceblur.png", 
    description: "Car Price Prediction using - Python/Flask + Machine Learning 🚕",
    gradient: ["#F14658", "#DC2537"],
    url: "https://carprice-w4i6.onrender.com/",
    tech: ["python-svgrepo-com", "vs-code-svgrepo-com","css-3-svgrepo-com","machine-learning-03-svgrepo-com",  "flask-svgrepo-com",],
  },
  {
    name: "Medication Recommendation",
    image: "/projects/medication3.png",
    blurImage: "/projects/blur/medicationblur.png",
    description:"Medication recommendation using - Python/Flask + ML/Scikit-Learn ⚕️",
    gradient: ["#000066", "#6699FF"],
    url: "https://medication-recommendation.onrender.com/index.html",
    tech: ["vs-code-svgrepo-com", "python-svgrepo-com", "numpy-svgrepo-com","flask-svgrepo-com"],
  },
  {
    name: "Blinkit Sales Analytics",
    image: "/projects/blinkit.png",
    blurImage: "/projects/blur/blinkitblur.png",
    description: "Project using - PowerBI, Tableau, Python 📈",
    gradient: ["#003300", "#66FF99"],
    url: "https://blinkitanalytics.netlify.app/",
    tech: ["tableau-software","power-bi-icon","excel-svgrepo-com","python-svgrepo-com"],
  },
  {
    name: "Face Emotion, Age, Gender Detection",
    image: "/projects/face2.png",
    blurImage: "/projects/blur/face2blur.png",
    description: "Project using - OpenCV, Keras, Tensorflow, Python",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Prathmeshpawar21/DS-Image-Recognition",
    tech: ["opencv-svgrepo-com","tensorflow-svgrepo-com","flask-svgrepo-com","pytorch-svgrepo-com"],
  },
  {
    name: "HR Analytics Dashboard",
    image: "/projects/hr2.png",
    blurImage: "/projects/blur/hrblur.png",
    description: "Project using - PowerBI, Tableau, Python 📊",
    gradient: ["#330033", "#9966FF"],
    url: "https://hrdashboardanalytics.netlify.app/",
    tech: ["tableau-software","python-svgrepo-com","power-bi-icon","excel-svgrepo-com"],
  },
];


// WEBPROJECT

export const WEBPROJECT = [
  {
    name: "Finance Analytics-DashBoard",
    image: "/projects/webAnalytics.png",
    blurImage: "/projects/webAnalytics.png",
    description: "Project using - react, next.js",
    gradient: ["#003300", "#66FF99"],
    url: "https://analytics-ten-sigma.vercel.app/",
    tech: ["vite-svgrepo-com","react-svgrepo-com","npm-svgrepo-com","vs-code-svgrepo-com","node-js-svgrepo-com"],
  },
  {
    name: "Real Estate",
    image: "/projects/realestate.png",
    blurImage:  "/projects/realestate.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#142D46", "#2E4964"],
    url: "https://real-estate-pawar.netlify.app/",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],
  },
  {
    name: "Finance Analysis",
    image: "/projects/finance.png",
    blurImage:  "/projects/finance.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#330033", "#9966FF"],
    url: "https://mini-analytics-dashboard.netlify.app/",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "CryptocCurrency",
    image: "/projects/crypto.png",
    blurImage:  "/projects/crypto.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#000066", "#6699FF"],
    url: "https://crypto-buy.netlify.app/",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","vs-code-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Rent Car",
    image: "/projects/carweb.png",
    blurImage:  "/projects/carweb.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#142D46", "#2E4964"],
    url: "https://car-renting-service.netlify.app//",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Art-Exhibition",
    image: "/projects/exhibithion.png",
    blurImage:  "/projects/exhibithion.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#330033", "#9966FF"],
    url: "https://exhibition-art.netlify.app/",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Landing Page",
    image: "/projects/monitorthemepage.png",
    blurImage: "/projects/monitorthemepage.png",
    description: "Project using - react, next.js",
    gradient: ["#003300", "#66FF99"],
    url: "https://landingpage212002.netlify.app/",
    tech: ["vs-code-svgrepo-com","css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Restaurant Page",
    image: "/projects/restuarant.png",
    blurImage:  "/projects/restuarant.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#142D46", "#2E4964"],
    url: "https://restaurantwebsite212002.netlify.app//",
    tech: ["css-3-svgrepo-com","vs-code-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],
  },
  {
    name: "Spotify Clone",
    image: "/projects/spotify.png",
    blurImage:  "/projects/spotify.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#330033", "#9966FF"],
    url: "https://spotifyclone212002.netlify.app/",
    tech: ["css-3-svgrepo-com","html-5-svgrepo-com","vs-code-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Calculator App",
    image: "/projects/calculator.png",
    blurImage:  "/projects/calculator.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#000066", "#6699FF"],
    url: "https://respcalculator212002.netlify.app/",
    tech: ["vs-code-svgrepo-com","css-3-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],

  },
  {
    name: "Application Form",
    image: "/projects/jobapplication.png",
    blurImage:  "/projects/jobapplication.png",
    description: "Project using - Html, Css, Js, Bootstrap-5",
    gradient: ["#142D46", "#2E4964"],
    url: "https://jobapplication21012002.netlify.app/",
    tech: ["css-3-svgrepo-com","vs-code-svgrepo-com","html-5-svgrepo-com","javascript-svgrepo-com","bootstrap-4-logo-svgrepo-com"],
  },
  
];



// GAMEPROJECT
export const GAMEPROJECT = [
  // {
  //   name: "Car Price Prediction",
  //   image: "/projects/carprice2.png",
  //   blurImage: "/projects/blur/carpriceblur.png", 
  //   description: "Car Price Prediction using - Python/Flask + Machine Learning 🚕",
  //   gradient: ["#F14658", "#DC2537"],
  //   url: "https://carprice-w4i6.onrender.com/",
  //   tech: ["python-svgrepo-com", "vs-code-svgrepo-com","css-3-svgrepo-com","machine-learning-03-svgrepo-com",  "flask-svgrepo-com",],
  // },

];








export const CLGPROJECT = [
  // {
  //   name: "Car Price Prediction",
  //   image: "/projects/carprice2.png",
  //   blurImage: "/projects/blur/carpriceblur.png", 
  //   description: "Car Price Prediction using - Python/Flask + Machine Learning 🚕",
  //   gradient: ["#F14658", "#DC2537"],
  //   url: "https://carprice-w4i6.onrender.com/",
  //   tech: ["python-svgrepo-com", "vs-code-svgrepo-com","css-3-svgrepo-com","machine-learning-03-svgrepo-com",  "flask-svgrepo-com",],
  // },

];




// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Stylio Store",
      exp: "+ 2 years",
      role: "(Founder & Owner)",
      description:
        "An online platform offering a wide range of high-quality products, designed to provide customers with a seamless and convenient shopping experience",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
    {
      title: "Skills Acquired",
      description:
      <div>
        <li> <strong>E-commerce Management :</strong> Built and optimized a Shopify dropshipping website from scratch.</li>

        <li> <strong>Order Fulfillment :</strong> Managed deliveries through Shiprocket to ensure timely shipments.</li>

        <li> <strong>Digital Marketing :</strong> Executed targeted campaigns to increase traffic and conversions.</li>
        
        <li> <strong>Financial Oversight :</strong> Managed budgeting and cost optimization to maintain profitability.</li>

        <li> <strong>Problem-Solving :</strong> Adapted to challenges and optimized fulfillment strategies.</li>


        </div>

        
        
        ,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Since launching in India, our dropshipping business has evolved by expanding product offerings, improving website functionality, and streamlining order fulfillment to deliver a better shopping experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
    // {
    //   title: "Optimization",
    //   description:
    //     "We continuously optimize our dropshipping platform by refining product selection, improving website speed, and enhancing order tracking to ensure a smooth and efficient shopping experience for customers.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Founder & Owner
    //     </div>
    //   ),
    // },
  ],



  AVIATE: [
    {
      title: "Zscaler",
      exp: "+ 3 months",
      role: "(Virtual Intern)",
      description:
        "Zero Trust Cloud Security Virtual Internship at Zscaler (AICTE Provider)",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Virtual Internship
        </div>
      ),
    },
    {
      title: "Skills Acquired",
      description:
        "During the Zero Trust Cloud Security Virtual Internship, I gained a strong understanding of cloud security principles, including Zero Trust architecture, access control, and network traffic monitoring. I developed skills in implementing security protocols, protecting data, and managing access within cloud environments, all while enhancing my knowledge of modern cybersecurity practices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Virtual Internship
        </div>
      ),
    },
  ],



  SPACENOS: [
    {
      title: "Application Square Infotech Pvt Ltd",
      exp: "+ 2 months",

      role: "(Web Developer Intern)",

      description:
        "Application Square Infotech is a web development startup specializing in scalable, user-friendly web solutions using React, Flask, and modern technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern</div>
      ),
    },
    {
      title: "Contribution",
      description:
        "I contributed to building responsive websites using HTML, CSS, JavaScript, PHP and Bootstrap. I developed interactive features with React and Flask, optimizing performance and enhancing user experience through collaboration with the team.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],




};

export const GTAG = "G-5HCTL2TJ5W";



export const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      width: 900,
      marginTop: 10,
    }}
  />
);

export const ColoredLineFull = ({ color, width }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      width: width,
      marginTop: 100,
    }}
  />
);