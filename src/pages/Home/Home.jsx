import { motion } from "framer-motion"
import "../../styles/pages/home.scss"

import girl from "../../assets/girl-listening-music.webp"
import information from "../../assets/information.jpg"
import orienter from "../../assets/orienter.jpg"
import talk from "../../assets/talk.jpg"
import help from "../../assets/help.jpg"
import fight from "../../assets/fight.jpg"

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
                    <a href="#ecouter" id="ecouterLink" className="text">Écouter</a>
                    <a href="#informer" id="informerLink" className="text">Informer</a>
                    <a href="#orienter" id="orienterLink" className="text">Orienter</a>
                    <a href="#temoigner" id="temoignerLink" className="text">Témoigner</a>
                    <a href="#soutenir" id="soutenirLink" className="text">Soutenir</a>
                    <a href="#lutter" id="lutterLink" className="text">Lutter</a>
                </div>
            </div>
            <div className="partContainer" id="ecouter">
                <div>
                    <h1 className="text">Ecouter</h1>
                    <p className="text">Sida Info Service est un observateur privilégié de l’évolution des questionnements abordés par les différents publics. Son observatoire a réalisé en 2015 une enquête portant sur l’évolution des questionnements VIH des jeunes entre 2004 et 2014 ? Quelle place occupent aujourd’hui les canaux de communication téléphonique et web dans la prévention contre le VIH/Sida ?</p>
                    <h2 className="text">Une génération online</h2>
                    <p className="text">En 2014, les services d’aide à distance Internet attirent un public particulièrement jeune : les 15-24 ans constituent 45, 2 % des usagers du LiveChat et 35, 3 % pour les mails. Les mineurs sont trois fois plus nombreux sur le LiveChat qu’au téléphone (0 800 840 800).</p>
                    <p className="text">En 2014, les deux tiers des 15-24 ans composent le numéro vert de Sida Info Service pour la première fois, une proportion stable depuis dix ans.</p>
                    <h2 className="text">La confidentialité : un atout</h2>
                    <p className="text">Sida Info Service est utilisé majoritairement comme source d’information et de renseignements, et ce, quel que soit le canal de communication et de profil de l’appelant.</p>
                    <p className="text">La confidentialité est un élément clé pour les jeunes qui ne souhaitent pas discuter de leur intimité avec leurs proches aînés. La communication par échanges écrits via Internet permet aux plus jeunes de détailler des pratiques sans entraîner un embarras ou une gêne.</p>
                    <h2 className="text">Le téléphone reste une valeur sûre</h2>
                    <p className="text">Les échanges téléphoniques restent essentiels à deux niveaux : l’écrit ne remplace pas le niveau de précision d’une conversation orale, *les écoutants du 0 800 840 800 apportent une écoute indispensable dès lors que la situation évoquée implique la santé de l’appelant et/ou est génératrice de stress.</p>
                    <h2 className="text">Risques de transmission</h2>
                    <p className="text">Depuis 2004, les risques de transmission du VIH et des autres infections sexuellement transmissibles (IST) et leur dépistage constituent les deux premiers thèmes évoqués sur l’ensemble des services de SIS.</p>
                    <p className="text">En 2014, les pénétrations non ou mal protégées par un préservatif sont deux fois plus évoquées par les jeunes qu’il y a dix ans : les mineurs sont particulièrement concernés.</p>
                    <h2 className="text">Contraception, une affaire de filles…</h2>
                    <p className="text">Les jeunes femmes sont toujours en première ligne pour prendre en charge la contraception. Le sujet est deux fois plus présent dans les appels féminins.</p>
                    <h2 className="text">L’éducation sexuelle en jachère ?</h2>
                    <p className="text">Les jeunes appelants ont un manque important de connaissances de base sur la sexualité. Ils méconnaissent leur corps, ne maitrisent pas la notion d’IST, développent un imaginaire sur les risques de transmission.</p>
                    <p className="text">Les bases de l’éducation sexuelle ne sont pas acquises par les jeunes : ils découvrent leur sexualité dans un contexte qui n’est pas serein.</p>
                </div>
                <img src={girl}/>
            </div>
            <div className="partContainer" id="informer">
                <div>
                    <h1 className="text">S'informer</h1>
                    <p className="text">Afin de vous informer sur des questions générales, nous vous invitons a jetter un coup d'oeil à la FAQ du site sida-info-service: <a href="https://www.sida-info-service.org/categorie/questions-frequentes/foire-aux-questions-sida/" className="text">Cliquez ici</a></p>
                </div>
                <img src={information} />
            </div>
            <div className="partContainer" id="orienter">
                <div>
                    <h1 className="text">S'orienter</h1>
                    <p className="text">Selon les besoins de chacun.e, SIS Association oriente vers les structures les plus adaptées. Tout est mis en œuvre pour que la prise en charge soit la plus efficace possible au travers des réseaux de soins, des actions sociales et des associations de proximité.</p>
                    <p className="text">Vous recherchez une adresse de dépistage pour le VIH, une IST ou une hépatite ? Vous pouvez vous rendre dans un CeGIDD (Centre Gratuit d’Information, de Dépistage et de Diagnostic) . Les dépistages du VIH, des IST et des hépatites y sont gratuits. Si vous le souhaitez, vous pouvez rester anonyme. Nos équipes d'écoutant.e.s restent à votre disposition pour tout accompagnement au 0 800 840 800 (appel gratuit).</p>
                </div>
                <img src={orienter}/>
            </div>

            <div className="partContainer" id="temoigner">
                <div>
                    <h1 className="text">Témoigner</h1>
                    <p className="text">Avec trois décennies d’expérience dans la relation d’aide à distance, SIS Association est un témoin privilégié de l’évolution de l’épidémie de VIH, mais aussi des maladies connexes, de la vie intime et de toutes les formes de sexualité des appelants et des appelantes. Les écoutant.e.s recueillent les interrogations, les peurs et les discriminations telles que les vivent nos usager.e.s. Grâce aux entretiens réalisés, l’Observatoire collecte des données quantitatives et qualitatives, tout en préservant l’anonymat des personnes, informant sur l’état et les besoins des populations en matière de santé sexuelle.</p>
                    <h3 className="text">10 ANS D’ÉCOUTE DES JEUNES SUR SIDA INFO SERVICE</h3>
                    <h2 className="text">Une génération online</h2>
                    <p className="text">En 2014, les services d’aide à distance Internet attirent un public particulièrement jeune : les 15-24 ans constituent 45,2 % des usagers du LiveChat et 35,3 % pour les mails. Les mineurs sont trois fois plus nombreux sur le LiveChat qu’au téléphone (0 800 840 800).</p>
                    <p className="text">En 2014, les deux tiers des 15-24 ans composent le numéro vert de Sida Info Service pour la première fois, une proportion stable depuis dix ans.</p>
                    <h2 className="text">La confidentialité : un atout</h2>
                    <p className="text">Sida Info Service est utilisé majoritairement comme source d’information et de renseignements, et ce, quel que soit le canal de communication et de profil de l’appelant.</p>
                    <p className="text">La confidentialité est un élément clé pour les jeunes qui ne souhaitent pas discuter de leur intimité avec leurs proches aînés. La communication par échanges écrits via Internet permet aux plus jeunes de détailler des pratiques sans entraîner un embarras ou une gêne.</p>
                    <h2 className="text">Le téléphone reste une valeur sûre</h2>
                    <p className="text">Les échanges téléphoniques restent essentiels à deux niveaux : l’écrit ne remplace pas le niveau de précision d’une conversation orale, *les écoutants du 0 800 840 800 apportent une écoute indispensable dès lors que la situation évoquée implique la santé de l’appelant et/ou est génératrice de stress.</p>
                </div>
                <img src={talk}/>
            </div>

            <div className="partContainer" id="soutenir">
                <div>
                    <h1 className="text">Soutenir</h1>
                    <h2 className="text">Soutenir un proche</h2>
                    <h3 className="text">Que la personne dont vous prenez soin soit un partenaire, un membre de la famille ou un ami, il y a plusieurs choses que vous pouvez faire pour aider quelqu’un qui vit avec le VIH:</h3>
                    <ul>
                        <li className="text">Écouter. Un diagnostic de VIH peut donner l’impression que le monde s’écroule autour de soi. Écoutez leurs inquiétudes et leurs craintes, de même que leurs espoirs pour le futur.</li>
                        <li className="text">Renseignez-vous. Si votre partenaire a été diagnostiqué séropositif, vous devrez prendre des précautions supplémentaires pour éviter d’être contaminé vous aussi.</li>
                        <li className="text">Rappelez-vous que la personne qui a reçu un diagnostic de VIH est toujours la même qu’avant. Elle prendra encore plaisir aux mêmes activités et, un jour ou l’autre, devrait avoir les mêmes espoirs pour l’avenir. Votre vie commune peut redevenir pratiquement normale, surtout si votre partenaire suit son plan de traitement.</li>
                        <li className="text">Aidez-le à prendre ses médicaments conformément aux directives. Ce faisant, le VIH n’aura que des répercussions minimes sur vos vies.</li>
                    </ul>
                    <h2 className="text">Forum</h2>
                    <p className="text">Pour parler de ses tracas, problèmes et discuter avec d’autres personnes le forum de sida-info-service est disponible : <a href="https://forum.sida-info-service.org/">ici</a></p>

                    <h2 className="text">Faire un don</h2>
                    <p className="text">Pour soutenir la lutte contre le sida, vous pouvez faire un don a l’adresse suivante:<a href="https://don.sidaction.org/">Cliquez ici</a></p>
                </div>
                <img src={help} />
            </div>

            <div className="partContainer" id="lutter">
                <div>
                    <h1 className="text">Lutter</h1>
                    <h2 className="text">C’est quoi une trithérapie ?</h2>
                    <p className="text">La trithérapie est un terme qui désigne l'association de trois molécules contre le VIH afin de renforcer la puissance du traitement. Il n'existe pas une seule trithérapie mais différentes trithérapies qui associent différents types de molécules.</p>
                    <p className="text">Ce n'est pas le nombre de médicaments qui compte mais la puissance du traitement. Actuellement, les traitements qui ont fait la preuve de la puissance antivirale la plus forte (en comparant efficacité, coût, toxicité, effets secondaires et qualité de vie des patients) sont composés d'une association de trois molécules différentes, d'où le nom de «~trithérapie~».</p>
                    <p className="text">Certains malades prennent des associations de quatre médicaments (quadrithérapie). On parle aussi de pentathérapie associant 5 médicaments anti-VIH. Certains malades en échappement thérapeutique - c'est-à-dire ne répondant pas aux schémas thérapeutiques classiques (tri-ou quadrithérapie) - prennent jusqu'à 8 ou 9 médicaments différents, cela uniquement dans des situations extrêmes et sous très haute surveillance médicale.</p>
                    <p className="text">L'avenir des traitements anti-VIH n'est donc pas forcément lié au nombre de médicaments pris mais à la puissance de ceux-ci.</p>

                    <h2 className="text">Le traitement post exposition</h2>
                    <p className="text">Le Traitement Post-Exposition (TPE) permet d'empêcher une contamination lorsqu’on a été exposé au VIH. Il se compose de plusieurs médicaments actifs contre le VIH et il doit être pris pendant 28 jours. Pour que son efficacité soit la meilleure possible, il faut le débuter immédiatement, de préférence moins de 4 heures après le risque et au plus tard dans les 48 heures, après un risque de transmission du VIH.</p>
                    <p className="text">Ce traitement est très efficace dès lors qu'il est pris correctement pendant tout sa durée.</p>
                    <p className="text">Vous avez oublié le préservatif ou bien il a craqué ? Vous ne prenez pas la PrEP ?</p>
                    <p className="text">Si votre partenaire est séropositif-ve au VIH et que sa charge virale n'est pas indétectable, il y a un risque de transmission du VIH.</p>
                    <p className="text">Ne perdez pas de temps. Rendez-vous immédiatement au service des urgences d’un hôpital pour faire évaluer le risque et bénéficier éventuellement d’un Traitement Post-Exposition.</p>

                    <h2 className="text">Meurt-on encore du Sida ?</h2>
                    <p className="text">Dans les pays où l’accès aux traitements contre le VIH est possible, les décès dus au Sida ont fortement diminué.</p>
                    <p className="text">Savoir très tôt qu’on est porteur du VIH permet de mettre en place une prise en charge thérapeutique précoce. Grâce à elle, une personne séropositive peut vivre à peu près aussi longtemps qu’une personne non contaminée, avec une qualité de vie la meilleure possible.</p>
                    <p className="text">C’est pour cette raison qu’il est préférable de faire un test de dépistage rapidement après une prise de risque.</p>
                    <p className="text">Cependant certaines personnes supportent mal ces médicaments ou bien ne parviennent pas à les prendre régulièrement.</p>
                    <p className="text">Il se peut aussi que le VIH devienne résistant aux traitements ce qui peut entrainer un échec thérapeutique. Dans ce cas la maladie continue de se développer et peut devenir mortelle.</p>
                    <p className="text">Enfin, certaines personnes débutent un traitement au moment où leur santé est fortement dégradée car elles ignoraient leur séropositivité. Les médicaments peuvent alors être moins efficaces.</p>

                    <h2 className="text">La charge virale c’est quoi ?</h2>
                    <p className="text">La charge virale est la quantité de virus présent dans le sang circulant.</p>
                    <p className="text">Mesurer la charge virale permet d'évaluer la sévérité de l'infection et l'efficacité des traitements contre le VIH.</p>
                    <p className="text">Une charge virale est indétectable lorsqu'elle ne peut pas être mesurée à partir d'un certain seuil, actuellement de l'ordre de 40 ou 50 copies de virus par millilitre de sang.</p>
                    <p className="text">Quand une personne séropositive sous traitement a une charge virale indétectable depuis plus de six mois, et qu'elle n'a pas d'IST, les scientifiques considèrent aujourd'hui que le VIH ne peut plus se transmettre</p>

                    <h2 className="text">Comment obtenir un prêt malgré la maladie ?</h2>
                    <p className="text">Une personne séropositive au VIH peut-elle contracter un prêt immobilier ? Aujourd’hui, une personne séropositive peut contracter un prêt immobilier. Il y a eu une évolution en la matière. La dernière évolution c’est la convention AERAS qui est entrée en vigueur en janvier 2007</p>
                    <p className="text">Il y a des conditions à respecter pour rentrer dans le champ d’application de la convention AERAS :</p>
                    <p className="text">le montant de l’emprunt est plafonné à hauteur de 320 000 euros,</p>
                    <p className="text">l'emprunteur ne doit pas être âgée de plus de 70 ans à la fin de cet emprunt.</p>
                    <p className="text">C'est la banque qui doit, dès lors que vous souhaitez souscrire à un prêt, vous présenter elle-même, via un formulaire, les dispositions de cette convention AERAS si justement vous rentrez dans son champ d’application. Les conditions d'applications des garanties proposées par l'assureur (décès et invalidité) dans le cadre de la grille de référence de la convention AERAS différeront selon les pathologies déclarées. Il appartient ensuite, à l’emprunteur qui souhaite souscrire ce prêt, de le ramener chez lui et de le remplir tranquillement. Une fois rempli, l'emprunteur le retourne sous pli cacheté au médecin-conseil de la compagnie d’assurance, qui sera soumis au secret médical.</p>
                    <p className="text">Les informations concernant l’état de santé de l’emprunteur font partie de sa vie privée et elles n’ont pas à être portées à la connaissance de sa banque, ni de son conseiller bancaire. L’assurance va intervenir en matière de garantie. La banque elle, n’interviendra que sur l’aspect financier.</p>
                    <p className="text">Comment fait-on pour choisir la bonne assurance ? Que faut-il regarder ? Il faut regarder les garanties proposées. La convention AERAS garantit l’invalidité, ce qui n’était pas le cas précédemment avec la convention Belorgey. Au moment où vous allez souscrire un prêt, vous n’êtes pas tenu de souscrire un contrat d’assurance avec l’assurance groupe de votre banque. Il est même plutôt conseillé même aux emprunteurs de faire jouer la délégation d’assurance, qui peut se révéler plus avantageuse.</p>
                    <p className="text">En outre, depuis la loi HAMON entrée en vigueur le 26 juillet 2014, l'emprunteur peut pendant la première année de son prêt, changer sans frais son contrat d'assurance, dès lors que celui-ci présente des garanties similaires au précédent. Un refus injustifié de l'assureur concernant ce changement de contrat, l'exposerait au paiement d'une amende d'un montant de 3000 euros.</p>

                    <h2 className="text">Peut-on refuser de m’embaucher si j’ai le VIH ?</h2>
                    <p className="text">La visite médicale est obligatoire et tout employeur est tenu d’avoir adhéré à un service de médecin du travail. Elle doit avoir lieu avant la fin de la période d’essai.</p>
                    <p className="text">La visite médicale a deux buts :</p>
                    <ul>
                        <li className="text">rechercher si le salarié n’est pas atteint d’une affection dangereuse pour les autres employés,</li>
                        <li className="text"> s’assurer que le salarié est médicalement apte au poste de travail proposé.</li>
                    </ul>
                    <p className="text">Le salarié n’est pas tenu de fournir au médecin du travail des informations qu’il n’estime pas nécessaire à l’exercice de sa fonction.</p>
                    <p className="text">Quelle que soit la maladie du salarié, le principe de non-discrimination en raison de l’état de santé doit être respecté par l’employeur.</p>

                    <h2 className="text">Dois-je révéler à mon employeur ma séropositivité ?</h2>
                    <p className="text">Aucune situation ne vous oblige à révéler votre séropositivité à votre employeur ( article 9 du Code civil). Votre état de santé ne le concerne pas, vos éventuelles absences étant justifiées par des certificats médicaux.</p>
                    <p className="text">De même, votre médecin traitant ne peut pas parler de votre séropositivité sans votre accord, de manière générale, et aux administrations qui veulent connaître votre état de santé. Non seulement, il n’y est pas obligé par la loi, mais il encourt, en raison de l’atteinte au secret médical, des sanctions professionnelle ( art. 4 Code de déontologie médicale), pénale ( art. 226-13 Code pénal) et/ou civile ( art. 1240 Code civil). Sans votre consentement, et sauf cas exceptionnels (urgence notamment), aucun médecin ne peut révéler votre état de santé (même à un autre médecin).</p>
                    <p className="text">De même, rien ne vous oblige à parler de votre séropositivité au médecin du travail. Votre séropositivité ne va pas définir si vous êtes apte ou pas à effectuer votre travail.</p>
                    <p className="text">Par contre, si vous demandez des aménagements de poste pour des raisons médicales vous devrez évoquer vos problèmes de santé, et probablement votre séropositivité.</p>
                    <p className="text">Vous souhaitez contacter des juristes ? Appelez Sida Info Droit au 0 810 636 636 (0,06€/min + prix de l'appel) les lundi de 17 h à 21 h, les vendredi de 9 h 30 à 13 h 30 (anonyme et confidentiel)</p>
                    <p className="text">L’anonymat et la confidentialité des échanges sont garantis à chaque entretien. Le prix de la communication est celui d’un appel métropolitain depuis un poste fixe.</p>
                </div>
                <div id="fightImage">
                    <img src={fight}/>
                </div>
            </div>
        </main>
    )
}

export default Home