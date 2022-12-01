import { motion } from "framer-motion"
import "../../styles/pages/home.scss"

const Home = () => {

    // Exemple de motion
    // TODO delete after seeing the example
    // const downloadVariants = {
    //     hidden:{ opacity: 0},
    //     show:{ opacity: 1 , transition: { staggerChildren: 0.3}}
    // }
    //
    // const downloadChildVariants = {
    //     hidden: {opacity: 0},
    //     show: {opacity: 1, transition: {duration: 0.5}}
    // }
    //
    //<div className="category" id="work">
    // <motion.div className="categoryContent" variants={downloadVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Mug</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Bibal</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">SecondDiv</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">J'ai payé</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Bite</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Etienne</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Ca fonctionne</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Fonctionnaire</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">Branlos</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">SecondDiv</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">SecondDiv</h1>
    //     </motion.div>
    //     <motion.div variants={downloadChildVariants}>
    //         <h1 className="text">SecondDiv</h1>
    //     </motion.div>
    // </motion.div>
    //</div>

    return(
        <main id="home">
            <div id="heroBanner">
                <div id="subHeader">
                    <a href="#ecouter">Écouter</a>
                    <a href="#informer">Informer</a>
                    <a href="#orienter">Orienter</a>
                    <a href="#temoigner">Témoigner</a>
                    <a href="#soutenir">Soutenir</a>
                    <a href="#lutter">Lutter</a>
                </div>
            </div>
            <div id="ecouter">

            </div>
            <div id="informer">

            </div>
            <div id="orienter">

            </div>

            <div id="temoigner">

            </div>

            <div id="soutenir">

            </div>

            <div id="lutter">

            </div>
        </main>
    )
}

export default Home