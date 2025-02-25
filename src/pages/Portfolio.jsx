import { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";
import BLOG_WEB from "../assets/images/blogweb.png";
import PORTFOLIO_IMG from "../assets/images/portfolioimage.png";
import EVENT_IMG from "../assets/images/eventshowcase.png";
import BLOG_ADMIN from "../assets/images/blogadmin.png";
import COMP_PORTFOLIO from "../assets/images/companyPortfolio.png";
import TMDB from "../assets/images/tmdb.png";
import INSYNC from "../assets/images/insync.png";
import COFFETO from "../assets/images/coffeto.png";

const projects = [
  {
    id: 1,
    title: "TMDB - Movies and TV Shows",
    subTitle: "ReactJs, CSS",
    image: TMDB,
    link:'https://ratingmovies.netlify.app/'
  },
  {
    id: 2,
    title: "Blog Web App",
    subTitle: "NextJS, Tailwind",
    image: BLOG_WEB,
    link:'https://blog-pink-two-93.vercel.app'
  },
  {
    id: 3,
    title: "Blog Web App Admin Panel",
    subTitle: "ReactJs, Tailwind",
    image: BLOG_ADMIN,
    link:'https://tailadmin-git-main-ashraf-jamals-projects.vercel.app'
  },
  {
    id: 4,
    title: "Portfolio",
    subTitle: "HTML, CSS, Tailwind, Framer Motion",
    image: PORTFOLIO_IMG,
    link:'https://arshi-portfolio.netlify.app/'
  },
  {
    id: 5,
    title: "Event Show Casing Web App",
    subTitle: "ReactJS, Tailwind, Framer Motion",
    image: EVENT_IMG,
    link:'https://fam-event.netlify.app'
  },
  {
    id: 6,
    title: "Company Portfolio",
    subTitle: "HTML, CSS",
    image: COMP_PORTFOLIO,
    link:'https://front-endtest.netlify.app/'
  },
  {
    id: 6,
    title: "INSYNC - Company portfolio",
    subTitle: "HTML, CSS",
    image: INSYNC,
    link:'https://insync-work.netlify.app/'
  },
  {
    id: 7,
    title: "Coffee Shop",
    subTitle: "HTML, CSS, Javascript",
    image: COFFETO,
    link:'https://j-coffee.netlify.app/'
  },
];

const Portfolio = () => {
  const context = useContext(ThemeContext);

  return (
    <Card>
      <h4
        className={`font-semibold sm:text-[40px] text-[28px] ${
          context?.isDark ? "text-dark-heading-color" : "text-primary"
        }`}
      >
        Check Out My <span className="text-senior-secondary">Projects</span>
      </h4>
      <p className={`text-lg text-light-black`}>
        I'm here to help if you're searching for a Frontend Developer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
      {projects?.map((pro) => {
        return (
          <div className="mt-4 overflow-hidden" key={crypto.randomUUID()}>
            <div className="rounded-[10px] overflow-hidden">
              <a href={`${pro.link}`} target="_blank"><img src={pro?.image} alt="" /></a>
            </div>
            <div className="mt-2 mb-2">
              <a href={`${pro.link}`} target="_blank"><h4 className={`text-[25px] ${context?.isDark ? 'text-dark-heading-color' : 'text-primary'}`}>{pro?.title}</h4></a>
              <div className="flex flex-wrap gap-2">
                {
                  pro?.subTitle.split(',').map((item)=> <span key={crypto.randomUUID()} className={`${context?.isDark ? 'bg-dark-bg' : 'bg-light-bg'} p-2 rounded-[8px] text-secondary`}>{item}</span>)
                }
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default Portfolio;
