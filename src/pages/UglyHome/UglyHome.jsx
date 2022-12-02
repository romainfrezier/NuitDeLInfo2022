import { motion } from "framer-motion"
import "../../styles/pages/uglyhome.scss"

import girl from "../../assets/girl-listening-music.webp"
import information from "../../assets/information.jpg"
import orienter from "../../assets/orienter.jpg"
import talk from "../../assets/talk.jpg"
import help from "../../assets/help.jpg"
import fight from "../../assets/fight.jpg"

const Home = () => {

    // Exemple de motion
    // TODO delete after seeing the example
    const variants = {
        hidden:{ opacity: 0},
        show:{ opacity: 1 , transition: { staggerChildren: 0.3}}
    }

    const childVariants = {
        hidden: {opacity: 0, x: -200, rotate : '0deg'},
        show: {opacity: 1, transition: {duration: 0.5}, x:0, rotate: '1080deg'}
    }

    const childVariantsRight = {
        hidden: {opacity: 0, x: 200, rotate : '0deg'},
        show: {opacity: 1, transition: {duration: 0.5}, x:0, rotate: '720deg'}
    }

    return(
        <main id="home1">
            <div id="heroBanner1">
                <div id="subHeader1">
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#ecouter1" id="ecouterLink1" className="text">Écouter</motion.a>
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#informer1" id="informerLink1" className="text">Informer</motion.a>
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#orienter1" id="orienterLink1" className="text">Orienter</motion.a>
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#temoigner1" id="temoignerLink1" className="text">Témoigner</motion.a>
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#soutenir1" id="soutenirLink1" className="text">Soutenir</motion.a>
                    <motion.a whileHover={{ rotate: '330deg', scale: 2.5}} href="#lutter1" id="lutterLink1" className="text">Lutter</motion.a>
                </div>
            </div>
            <div className="partContainer1" id="ecouter1">
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h1 variants={childVariants} className="text">Ecouter</motion.h1>
                    <motion.p variants={childVariants} className="text">Sida Info Service est un observateur privilégié de l’évolution des questionnements abordés par les différents publics. Son observatoire a réalisé en 2015 une enquête portant sur l’évolution des questionnements VIH des jeunes entre 2004 et 2014 ? Quelle place occupent aujourd’hui les canaux de communication téléphonique et web dans la prévention contre le VIH/Sida ?</motion.p>
                    <motion.h2 variants={childVariants} className="text">Une génération online</motion.h2>
                    <motion.p variants={childVariants} className="text">En 2014, les services d’aide à distance Internet attirent un public particulièrement jeune : les 15-24 ans constituent 45, 2 % des usagers du LiveChat et 35, 3 % pour les mails. Les mineurs sont trois fois plus nombreux sur le LiveChat qu’au téléphone (0 800 840 800).</motion.p>
                    <motion.p variants={childVariants} className="text">En 2014, les deux tiers des 15-24 ans composent le numéro vert de Sida Info Service pour la première fois, une proportion stable depuis dix ans.</motion.p>
                    <motion.h2 variants={childVariants} className="text">La confidentialité : un atout</motion.h2>
                    <motion.p variants={childVariants} className="text">Sida Info Service est utilisé majoritairement comme source d’information et de renseignements, et ce, quel que soit le canal de communication et de profil de l’appelant.</motion.p>
                    <motion.p variants={childVariants} className="text">La confidentialité est un élément clé pour les jeunes qui ne souhaitent pas discuter de leur intimité avec leurs proches aînés. La communication par échanges écrits via Internet permet aux plus jeunes de détailler des pratiques sans entraîner un embarras ou une gêne.</motion.p>
                    <motion.h2 variants={childVariants} className="text">Le téléphone reste une valeur sûre</motion.h2>
                    <motion.p variants={childVariants} className="text">Les échanges téléphoniques restent essentiels à deux niveaux : l’écrit ne remplace pas le niveau de précision d’une conversation orale, *les écoutants du 0 800 840 800 apportent une écoute indispensable dès lors que la situation évoquée implique la santé de l’appelant et/ou est génératrice de stress.</motion.p>
                    <motion.h2 variants={childVariants} className="text">Risques de transmission</motion.h2>
                    <motion.p variants={childVariants} className="text">Depuis 2004, les risques de transmission du VIH et des autres infections sexuellement transmissibles (IST) et leur dépistage constituent les deux premiers thèmes évoqués sur l’ensemble des services de SIS.</motion.p>
                    <motion.p variants={childVariants} className="text">En 2014, les pénétrations non ou mal protégées par un préservatif sont deux fois plus évoquées par les jeunes qu’il y a dix ans : les mineurs sont particulièrement concernés.</motion.p>
                    <motion.h2 variants={childVariants} className="text">Contraception, une affaire de filles…</motion.h2>
                    <motion.p variants={childVariants} className="text">Les jeunes femmes sont toujours en première ligne pour prendre en charge la contraception. Le sujet est deux fois plus présent dans les appels féminins.</motion.p>
                    <motion.h2 variants={childVariants} className="text">L’éducation sexuelle en jachère ?</motion.h2>
                    <motion.p variants={childVariants} className="text">Les jeunes appelants ont un manque important de connaissances de base sur la sexualité. Ils méconnaissent leur corps, ne maitrisent pas la notion d’IST, développent un imaginaire sur les risques de transmission.</motion.p>
                    <motion.p variants={childVariants} className="text">Les bases de l’éducation sexuelle ne sont pas acquises par les jeunes : ils découvrent leur sexualité dans un contexte qui n’est pas serein.</motion.p>
                </motion.div>
                <img src={girl}/>
            </div>
            <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }} className="partContainer1" id="informer1">
                <div>
                    <motion.h1 variants={childVariantsRight} className="text">S'informer</motion.h1>
                    <motion.p variants={childVariantsRight} className="text">Afin de vous informer sur des questions générales, nous vous invitons a jetter un coup d'oeil à la FAQ du site sida-info-service: <a href="https://www.sida-info-service.org/categorie/questions-frequentes/foire-aux-questions-sida/" className="text">Cliquez ici</a></motion.p>
                </div>
                <img src={information} />
            </motion.div>
            <div className="partContainer1" id="orienter1">
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h1 variants={childVariants} className="text">S'orienter</motion.h1>
                    <motion.p variants={childVariants} className="text">Selon les besoins de chacun.e, SIS Association oriente vers les structures les plus adaptées. Tout est mis en œuvre pour que la prise en charge soit la plus efficace possible au travers des réseaux de soins, des actions sociales et des associations de proximité.</motion.p>
                    <motion.p variants={childVariants} className="text">Vous recherchez une adresse de dépistage pour le VIH, une IST ou une hépatite ? Vous pouvez vous rendre dans un CeGIDD (Centre Gratuit d’Information, de Dépistage et de Diagnostic) . Les dépistages du VIH, des IST et des hépatites y sont gratuits. Si vous le souhaitez, vous pouvez rester anonyme. Nos équipes d'écoutant.e.s restent à votre disposition pour tout accompagnement au 0 800 840 800 (appel gratuit).</motion.p>
                </motion.div>
                <img src={orienter}/>
            </div>

            <div className="partContainer1" id="temoigner1">
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h1 variants={childVariantsRight} className="text">Témoigner</motion.h1>
                    <motion.p variants={childVariantsRight} className="text">Avec trois décennies d’expérience dans la relation d’aide à distance, SIS Association est un témoin privilégié de l’évolution de l’épidémie de VIH, mais aussi des maladies connexes, de la vie intime et de toutes les formes de sexualité des appelants et des appelantes. Les écoutant.e.s recueillent les interrogations, les peurs et les discriminations telles que les vivent nos usager.e.s. Grâce aux entretiens réalisés, l’Observatoire collecte des données quantitatives et qualitatives, tout en préservant l’anonymat des personnes, informant sur l’état et les besoins des populations en matière de santé sexuelle.</motion.p>
                    <motion.h3 variants={childVariantsRight} className="text">10 ANS D’ÉCOUTE DES JEUNES SUR SIDA INFO SERVICE</motion.h3>
                    <motion.h2 variants={childVariantsRight} className="text">Une génération online</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">En 2014, les services d’aide à distance Internet attirent un public particulièrement jeune : les 15-24 ans constituent 45,2 % des usagers du LiveChat et 35,3 % pour les mails. Les mineurs sont trois fois plus nombreux sur le LiveChat qu’au téléphone (0 800 840 800).</motion.p>
                    <motion.p variants={childVariantsRight} className="text">En 2014, les deux tiers des 15-24 ans composent le numéro vert de Sida Info Service pour la première fois, une proportion stable depuis dix ans.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">La confidentialité : un atout</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Sida Info Service est utilisé majoritairement comme source d’information et de renseignements, et ce, quel que soit le canal de communication et de profil de l’appelant.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">La confidentialité est un élément clé pour les jeunes qui ne souhaitent pas discuter de leur intimité avec leurs proches aînés. La communication par échanges écrits via Internet permet aux plus jeunes de détailler des pratiques sans entraîner un embarras ou une gêne.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Le téléphone reste une valeur sûre</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Les échanges téléphoniques restent essentiels à deux niveaux : l’écrit ne remplace pas le niveau de précision d’une conversation orale, *les écoutants du 0 800 840 800 apportent une écoute indispensable dès lors que la situation évoquée implique la santé de l’appelant et/ou est génératrice de stress.</motion.p>
                </motion.div>
                <img src={talk}/>
            </div>

            <div className="partContainer1" id="soutenir1">
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h1 variants={childVariants} className="text">Soutenir</motion.h1>
                    <motion.h2 variants={childVariants} className="text">Soutenir un proche</motion.h2>
                    <motion.h3 variants={childVariants} className="text">Que la personne dont vous prenez soin soit un partenaire, un membre de la famille ou un ami, il y a plusieurs choses que vous pouvez faire pour aider quelqu’un qui vit avec le VIH:</motion.h3>
                    <motion.ul variants={childVariants}>
                        <li className="text">Écouter. Un diagnostic de VIH peut donner l’impression que le monde s’écroule autour de soi. Écoutez leurs inquiétudes et leurs craintes, de même que leurs espoirs pour le futur.</li>
                        <li className="text">Renseignez-vous. Si votre partenaire a été diagnostiqué séropositif, vous devrez prendre des précautions supplémentaires pour éviter d’être contaminé vous aussi.</li>
                        <li className="text">Rappelez-vous que la personne qui a reçu un diagnostic de VIH est toujours la même qu’avant. Elle prendra encore plaisir aux mêmes activités et, un jour ou l’autre, devrait avoir les mêmes espoirs pour l’avenir. Votre vie commune peut redevenir pratiquement normale, surtout si votre partenaire suit son plan de traitement.</li>
                        <li className="text">Aidez-le à prendre ses médicaments conformément aux directives. Ce faisant, le VIH n’aura que des répercussions minimes sur vos vies.</li>
                    </motion.ul>
                    <motion.h2 variants={childVariants} className="text">Forum</motion.h2>
                    <motion.p variants={childVariants} className="text">Pour parler de ses tracas, problèmes et discuter avec d’autres personnes le forum de sida-info-service est disponible : <a href="https://forum.sida-info-service.org/">ici</a></motion.p>
                    <motion.h2 variants={childVariants} className="text">Faire un don</motion.h2>
                    <motion.p variants={childVariants} className="text">Pour soutenir la lutte contre le sida, vous pouvez faire un don a l’adresse suivante:<a href="https://don.sidaction.org/">Cliquez ici</a></motion.p>
                </motion.div>
                <img src={help} />
            </div>

            <div className="partContainer1" id="lutter1">
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h1 variants={childVariantsRight} className="text">Lutter</motion.h1>
                    <motion.h2 variants={childVariantsRight} className="text">C’est quoi une trithérapie ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">La trithérapie est un terme qui désigne l'association de trois molécules contre le VIH afin de renforcer la puissance du traitement. Il n'existe pas une seule trithérapie mais différentes trithérapies qui associent différents types de molécules.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Ce n'est pas le nombre de médicaments qui compte mais la puissance du traitement. Actuellement, les traitements qui ont fait la preuve de la puissance antivirale la plus forte (en comparant efficacité, coût, toxicité, effets secondaires et qualité de vie des patients) sont composés d'une association de trois molécules différentes, d'où le nom de «~trithérapie~».</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Certains malades prennent des associations de quatre médicaments (quadrithérapie). On parle aussi de pentathérapie associant 5 médicaments anti-VIH. Certains malades en échappement thérapeutique - c'est-à-dire ne répondant pas aux schémas thérapeutiques classiques (tri-ou quadrithérapie) - prennent jusqu'à 8 ou 9 médicaments différents, cela uniquement dans des situations extrêmes et sous très haute surveillance médicale.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">L'avenir des traitements anti-VIH n'est donc pas forcément lié au nombre de médicaments pris mais à la puissance de ceux-ci.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Le traitement post exposition</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Le Traitement Post-Exposition (TPE) permet d'empêcher une contamination lorsqu’on a été exposé au VIH. Il se compose de plusieurs médicaments actifs contre le VIH et il doit être pris pendant 28 jours. Pour que son efficacité soit la meilleure possible, il faut le débuter immédiatement, de préférence moins de 4 heures après le risque et au plus tard dans les 48 heures, après un risque de transmission du VIH.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Ce traitement est très efficace dès lors qu'il est pris correctement pendant tout sa durée.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Vous avez oublié le préservatif ou bien il a craqué ? Vous ne prenez pas la PrEP ?</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Si votre partenaire est séropositif-ve au VIH et que sa charge virale n'est pas indétectable, il y a un risque de transmission du VIH.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Ne perdez pas de temps. Rendez-vous immédiatement au service des urgences d’un hôpital pour faire évaluer le risque et bénéficier éventuellement d’un Traitement Post-Exposition.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Meurt-on encore du Sida ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Dans les pays où l’accès aux traitements contre le VIH est possible, les décès dus au Sida ont fortement diminué.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Savoir très tôt qu’on est porteur du VIH permet de mettre en place une prise en charge thérapeutique précoce. Grâce à elle, une personne séropositive peut vivre à peu près aussi longtemps qu’une personne non contaminée, avec une qualité de vie la meilleure possible.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">C’est pour cette raison qu’il est préférable de faire un test de dépistage rapidement après une prise de risque.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Cependant certaines personnes supportent mal ces médicaments ou bien ne parviennent pas à les prendre régulièrement.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Il se peut aussi que le VIH devienne résistant aux traitements ce qui peut entrainer un échec thérapeutique. Dans ce cas la maladie continue de se développer et peut devenir mortelle.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Enfin, certaines personnes débutent un traitement au moment où leur santé est fortement dégradée car elles ignoraient leur séropositivité. Les médicaments peuvent alors être moins efficaces.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">La charge virale c’est quoi ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">La charge virale est la quantité de virus présent dans le sang circulant.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Mesurer la charge virale permet d'évaluer la sévérité de l'infection et l'efficacité des traitements contre le VIH.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Une charge virale est indétectable lorsqu'elle ne peut pas être mesurée à partir d'un certain seuil, actuellement de l'ordre de 40 ou 50 copies de virus par millilitre de sang.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Quand une personne séropositive sous traitement a une charge virale indétectable depuis plus de six mois, et qu'elle n'a pas d'IST, les scientifiques considèrent aujourd'hui que le VIH ne peut plus se transmettre</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Comment obtenir un prêt malgré la maladie ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Une personne séropositive au VIH peut-elle contracter un prêt immobilier ? Aujourd’hui, une personne séropositive peut contracter un prêt immobilier. Il y a eu une évolution en la matière. La dernière évolution c’est la convention AERAS qui est entrée en vigueur en janvier 2007</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Il y a des conditions à respecter pour rentrer dans le champ d’application de la convention AERAS :</motion.p>
                    <motion.p variants={childVariantsRight} className="text">le montant de l’emprunt est plafonné à hauteur de 320 000 euros,</motion.p>
                    <motion.p variants={childVariantsRight} className="text">l'emprunteur ne doit pas être âgée de plus de 70 ans à la fin de cet emprunt.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">C'est la banque qui doit, dès lors que vous souhaitez souscrire à un prêt, vous présenter elle-même, via un formulaire, les dispositions de cette convention AERAS si justement vous rentrez dans son champ d’application. Les conditions d'applications des garanties proposées par l'assureur (décès et invalidité) dans le cadre de la grille de référence de la convention AERAS différeront selon les pathologies déclarées. Il appartient ensuite, à l’emprunteur qui souhaite souscrire ce prêt, de le ramener chez lui et de le remplir tranquillement. Une fois rempli, l'emprunteur le retourne sous pli cacheté au médecin-conseil de la compagnie d’assurance, qui sera soumis au secret médical.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Les informations concernant l’état de santé de l’emprunteur font partie de sa vie privée et elles n’ont pas à être portées à la connaissance de sa banque, ni de son conseiller bancaire. L’assurance va intervenir en matière de garantie. La banque elle, n’interviendra que sur l’aspect financier.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Comment fait-on pour choisir la bonne assurance ? Que faut-il regarder ? Il faut regarder les garanties proposées. La convention AERAS garantit l’invalidité, ce qui n’était pas le cas précédemment avec la convention Belorgey. Au moment où vous allez souscrire un prêt, vous n’êtes pas tenu de souscrire un contrat d’assurance avec l’assurance groupe de votre banque. Il est même plutôt conseillé même aux emprunteurs de faire jouer la délégation d’assurance, qui peut se révéler plus avantageuse.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">En outre, depuis la loi HAMON entrée en vigueur le 26 juillet 2014, l'emprunteur peut pendant la première année de son prêt, changer sans frais son contrat d'assurance, dès lors que celui-ci présente des garanties similaires au précédent. Un refus injustifié de l'assureur concernant ce changement de contrat, l'exposerait au paiement d'une amende d'un montant de 3000 euros.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Peut-on refuser de m’embaucher si j’ai le VIH ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">La visite médicale est obligatoire et tout employeur est tenu d’avoir adhéré à un service de médecin du travail. Elle doit avoir lieu avant la fin de la période d’essai.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">La visite médicale a deux buts :</motion.p>
                    <motion.ul variants={childVariantsRight}>
                        <li className="text">rechercher si le salarié n’est pas atteint d’une affection dangereuse pour les autres employés,</li>
                        <li className="text"> s’assurer que le salarié est médicalement apte au poste de travail proposé.</li>
                    </motion.ul>
                    <motion.p variants={childVariantsRight} className="text">Le salarié n’est pas tenu de fournir au médecin du travail des informations qu’il n’estime pas nécessaire à l’exercice de sa fonction.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Quelle que soit la maladie du salarié, le principe de non-discrimination en raison de l’état de santé doit être respecté par l’employeur.</motion.p>
                    <motion.h2 variants={childVariantsRight} className="text">Dois-je révéler à mon employeur ma séropositivité ?</motion.h2>
                    <motion.p variants={childVariantsRight} className="text">Aucune situation ne vous oblige à révéler votre séropositivité à votre employeur ( article 9 du Code civil). Votre état de santé ne le concerne pas, vos éventuelles absences étant justifiées par des certificats médicaux.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">De même, votre médecin traitant ne peut pas parler de votre séropositivité sans votre accord, de manière générale, et aux administrations qui veulent connaître votre état de santé. Non seulement, il n’y est pas obligé par la loi, mais il encourt, en raison de l’atteinte au secret médical, des sanctions professionnelle ( art. 4 Code de déontologie médicale), pénale ( art. 226-13 Code pénal) et/ou civile ( art. 1240 Code civil). Sans votre consentement, et sauf cas exceptionnels (urgence notamment), aucun médecin ne peut révéler votre état de santé (même à un autre médecin).</motion.p>
                    <motion.p variants={childVariantsRight} className="text">De même, rien ne vous oblige à parler de votre séropositivité au médecin du travail. Votre séropositivité ne va pas définir si vous êtes apte ou pas à effectuer votre travail.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Par contre, si vous demandez des aménagements de poste pour des raisons médicales vous devrez évoquer vos problèmes de santé, et probablement votre séropositivité.</motion.p>
                    <motion.p variants={childVariantsRight} className="text">Vous souhaitez contacter des juristes ? Appelez Sida Info Droit au 0 810 636 636 (0,06€/min + prix de l'appel) les lundi de 17 h à 21 h, les vendredi de 9 h 30 à 13 h 30 (anonyme et confidentiel)</motion.p>
                    <motion.p variants={childVariantsRight} className="text">L’anonymat et la confidentialité des échanges sont garantis à chaque entretien. Le prix de la communication est celui d’un appel métropolitain depuis un poste fixe.</motion.p>
                </motion.div>
                <div id="fightImage1">
                    <img src={fight}/>
                </div>
            </div>
        </main>
    )
}

export default Home