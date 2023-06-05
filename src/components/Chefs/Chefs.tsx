import styleschefs from "./Chefs.module.css";
import imagenes from "../../assets/imagenes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Chefs = () => {
  return (
      <div className={styleschefs.container}>
        <h3 className={styleschefs.h3}> DISCOVER OUR CHEF</h3>
        <h4 className={styleschefs.h4}> EXPERIENCE CHEFS</h4>
    <div className={styleschefs.cardsContainer}>
        <div className={styleschefs.chefcard}>
      <div className={styleschefs.orange}>
        <div className={styleschefs.icono}>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} /></div>
      </div>
      <div className={styleschefs.hover}> 
        <img className={styleschefs.img} src={imagenes.chef1} alt="chef-1" />
        </div>
        <div>
          <div className="icono"></div>
        </div>
        </div>
       
       
       
       
        <div className={styleschefs.chefcard}>
      <div className={styleschefs.orange}>
        <div className={styleschefs.icono}>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} /></div>
      </div>
      <div className={styleschefs.hover}> 
        <img className={styleschefs.img} src={imagenes.chef2} alt="chef-2" />
        </div>
        <div>
         
        </div>
        </div>
 
 
 
 
 
        <div className={styleschefs.chefcard}>
      <div className={styleschefs.orange}>
        <div className={styleschefs.icono}>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} /></div>
      </div>
      <div className={styleschefs.hover}> 
        <img className={styleschefs.img} src={imagenes.chef3} alt="chef-3" />
        </div>
        <div>
       
        </div>
        </div>



     


        </div>
    </div>
  );
};
export default Chefs;
