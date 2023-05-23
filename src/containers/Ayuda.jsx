import "../assets/css/Ayuda.css";
import Filosofia from "../components/Filosofia";
import Faq from "../components/Faq";
import faqs from "../assets/datos/ayuda.json";


const Ayuda = () => {
  
    return (
      <>
        <div className="container-faq">
          <h2 className="title">Todo lo que necesitas saber.</h2>
          {faqs.map((faq) => (
            <Faq
              key={faq.id}
              title={faq.title}
              description={faq.description}
              
            >
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </Faq>
          ))}
        </div>
        <Filosofia />
      </>
    );
  };

export default Ayuda;
