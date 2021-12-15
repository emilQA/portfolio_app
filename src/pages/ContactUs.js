import React from 'react';
import {motion} from "framer-motion";
import {PageAnimation} from "../animation";

const Contactus = () => {

    return (
        <motion.div variants={PageAnimation} initial="hidden" animate="show"  exit="exit">
            <h1>contact</h1>
        </motion.div>
    )

}

export default Contactus;