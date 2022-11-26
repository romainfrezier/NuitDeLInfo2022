import {useTranslation} from "react-i18next"
import { motion } from "framer-motion"
import "../../styles/pages/home.scss"

const Home = () => {

    const { t } = useTranslation()

    const downloadVariants = {
        hidden:{ opacity: 0},
        show:{ opacity: 1 , transition: { staggerChildren: 0.3}}
    }

    const downloadChildVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.5}}
    }

    return(
        <main id="home">

            <div className="category" id="work">
                <motion.div className="categoryContent" variants={downloadVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Mug</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Bibal</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">SecondDiv</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">J'ai payé</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Bite</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Etienne</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Ca fonctionne</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Fonctionnaire</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">Branlos</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">SecondDiv</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">SecondDiv</h1>
                    </motion.div>
                    <motion.div variants={downloadChildVariants}>
                        <h1 className="text">SecondDiv</h1>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default Home