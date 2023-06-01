import { useState, useRef } from "react";
import styles from "./Chefs.module.css";
import imagenes from "../../assets/imagenes";

const Chefs = () => {
    return(
        <div className={styles.div}>
<h3 className={styles.h3}> DISCOVER OUR CHEF</h3>
<h4 className={styles.h4}> EXPERIENCE CHEFS</h4>

        <img className={styles.img}src={imagenes.chef1} alt="chef-1" />
        <img className={styles.img} src={imagenes.chef2} alt="chef-2" />
        <img className={styles.img} src={imagenes.chef3} alt="chef-3" />
        </div>
    )
};
export default Chefs;