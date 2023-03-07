// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import styles from "./styles.module.scss";

// const Navbar: React.FC = () => {
// 	const router = useRouter();
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [secondMenuOpen, setSecondMenuOpen] = useState(false);
// 	const [thirdMenuOpen, setThirdMenuOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("");

// 	const handleLinkEnter = (link: string) => {
// 		if (activeLink !== link) {
// 			setActiveLink(link);
// 			setMenuOpen(true);
// 		}
// 	};

// 	const handleLinkLeave = (link: string) => {
// 		if (activeLink === link) {
// 			setActiveLink("");
// 			setMenuOpen(false);
// 			setSecondMenuOpen(false);
// 		}
// 	};

// 	return (
// 		<>
// 			<div className={styles.navbar}>
// 				<nav>
// 					<div
// 						className={router.asPath === "/macommune" ? styles.active : ""}
// 						onMouseEnter={() => handleLinkEnter("/macommune")}
// 						onMouseLeave={() => handleLinkLeave("/macommune")}
// 					>
// 						<p>Ma Commune</p>
// 						<div
// 							className={`${menuOpen && activeLink === "/macommune" ? styles.show : styles.hide
// 								} ${styles.home}`}
// 							onMouseEnter={() => setSecondMenuOpen(true)}
// 							onMouseLeave={() => setSecondMenuOpen(false)}
// 						>
// 							<div
// 								className={
// 									router.asPath === "/conseil_municipal" ? styles.active : styles.test
// 								}
// 								onMouseEnter={() => setThirdMenuOpen(true)}
// 								onMouseLeave={() => setThirdMenuOpen(false)}
// 							>
// 								<div>
// 									<p>Conseil municipal</p>
// 								</div>
// 								{/* <div className={`${secondMenuOpen ? "" : styles.hide}`}>
// 								<Link
// 									href={"/dernier"}
// 									className={
// 										router.asPath === "/dernier" ? styles.active : styles.test
// 									}
// 								>
// 									dernier
// 								</Link>
// 							</div> */}
// 							</div>
// 							<div
// 								className={
// 									router.asPath === "/comptes_rendus" ? styles.active : styles.test
// 								}
// 								onMouseEnter={() => setThirdMenuOpen(true)}
// 								onMouseLeave={() => setThirdMenuOpen(false)}
// 							>
// 								<div>
// 									<p>Comptes rendus</p>
// 								</div>
// 								{/* <div className={`${secondMenuOpen ? "" : styles.hide}`}>
// 									<Link
// 										href={"/dernier"}
// 										className={
// 											router.asPath === "/dernier" ? styles.active : styles.test
// 										}
// 									>
// 										dernier
// 									</Link>
// 								</div> */}
// 							</div>
// 						</div>
// 					</div>

// 					<div
// 						className={router.asPath === "/test" ? styles.active : ""}
// 						onMouseEnter={() => handleLinkEnter("/test")}
// 						onMouseLeave={() => handleLinkLeave("/test")}
// 					>
// 						<p>Mes demandes</p>
// 						<div
// 							className={`${menuOpen && activeLink === "/test" ? styles.show : styles.hide
// 								} ${styles.test}`}
// 							onMouseEnter={() => setMenuOpen(true)}
// 							onMouseLeave={() => setMenuOpen(false)}
// 						>
// 							<div
// 								className={router.asPath === "/plusieurs" ? styles.active : ""}
// 								onMouseEnter={() => setSecondMenuOpen(true)}
// 								onMouseLeave={() => setSecondMenuOpen(false)}
// 							>
// 								<p>autre</p>
// 								<div className={`${secondMenuOpen ? "" : styles.hide}`}>
// 									<Link
// 										href={"/dernier"}
// 										className={
// 											router.asPath === "/dernier" ? styles.active : ""
// 										}
// 									>
// 										truc
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div
// 						className={router.asPath === "/" ? styles.active : ""}
// 						onMouseEnter={() => handleLinkEnter("/")}
// 						onMouseLeave={() => handleLinkLeave("/")}
// 					>
// 						<p>Enfance jeunesse</p>
// 						<div
// 							className={`${menuOpen && activeLink === "/" ? styles.show : styles.hide
// 								} ${styles.home}`}
// 							onMouseEnter={() => setSecondMenuOpen(true)}
// 							onMouseLeave={() => setSecondMenuOpen(false)}
// 						>
// 							<div
// 								className={
// 									router.asPath === "/plusieurs" ? styles.active : styles.test
// 								}
// 								onMouseEnter={() => setThirdMenuOpen(true)}
// 								onMouseLeave={() => setThirdMenuOpen(false)}
// 							>
// 								<div>
// 									<p>plusieurs</p>
// 								</div>
// 								<div className={`${secondMenuOpen ? "" : styles.hide}`}>
// 									<Link
// 										href={"/dernier"}
// 										className={
// 											router.asPath === "/dernier" ? styles.active : styles.test
// 										}
// 									>
// 										dernier
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div
// 						className={router.asPath === "/" ? styles.active : ""}
// 						onMouseEnter={() => handleLinkEnter("/")}
// 						onMouseLeave={() => handleLinkLeave("/")}
// 					>
// 						<p>Vie Du Village</p>
// 						<div
// 							className={`${menuOpen && activeLink === "/" ? styles.show : styles.hide
// 								} ${styles.home}`}
// 							onMouseEnter={() => setSecondMenuOpen(true)}
// 							onMouseLeave={() => setSecondMenuOpen(false)}
// 						>
// 							<div
// 								className={
// 									router.asPath === "/plusieurs" ? styles.active : styles.test
// 								}
// 								onMouseEnter={() => setThirdMenuOpen(true)}
// 								onMouseLeave={() => setThirdMenuOpen(false)}
// 							>
// 								<div>
// 									<p>plusieurs</p>
// 								</div>
// 								<div className={`${secondMenuOpen ? "" : styles.hide}`}>
// 									<Link
// 										href={"/dernier"}
// 										className={
// 											router.asPath === "/dernier" ? styles.active : styles.test
// 										}
// 									>
// 										dernier
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</nav>
// 			</div>
// 		</>
// 	);
// };

// export default Navbar;

import React, { useState } from 'react';
import Link from 'next/link';

type SubMenu = {
	text: string;
	url?: string;
	subSubMenus?: SubSubMenu[];
};

type SubSubMenu = {
	text: string;
	url: string;
};

type SubMenuLink = {
	menu: string;
	subMenus: SubMenu[];
};

const Navbar = () => {
	const [subMenuState, setSubMenuState] = useState<{ [key: string]: boolean }>({}); // ex: string=false

	const handleMouseEnter = (key: string) => {
		setSubMenuState((prevState) => ({
			...prevState,
			[key]: true,
		}));
	};

	const handleMouseLeave = (key: string) => {
		setSubMenuState((prevState) => ({
			...prevState,
			[key]: false,
		}));
	};

	const subMenuLinks: SubMenuLink[] = [
		{
			menu: 'Ma Commune',
			subMenus: [
				{ text: 'Conseil municipal', url: "/conseilMunicipal" },
				{ text: 'Comptes rendus', url: "/comptesRendus" },
				{ text: 'Commissions municipales', url: "/commissionsMunicipales" },
				{ text: 'Services municipaux', url: "/servicesMunicipaux" },
				{
					text: 'Bulletins municipaux',
					subSubMenus: [
						{ text: 'Petit beuvardois', url: "/petitBeuvardois" },
						{ text: 'Petit journal', url: "/petitJournal" },
					],
				},
			],
		},
		{
			menu: 'Mes Demandes',
			subMenus: [
				{
					text: 'Etat-civil',
					subSubMenus: [
						{ text: 'Demande d\'aide', url: "/demandeDAide" },
						{ text: 'Reconnaissance anticipée', url: "/reconnaissanceAnticipee" },
						{ text: 'Mariage', url: "/mariage" },
						{ text: 'Pacs', url: "/pacs" },
						{ text: 'Parrainage civil', url: "/parrainageCivil" },
					]
				},
				{
					text: 'Urbanisme',
					subSubMenus: [
						{ text: 'Permis de conduire', url: "/permisDeConduire" },
						{ text: 'Déclaration préalable', url: "/declarationPrealable" },
						{ text: 'Certificat d\'urbanisme', url: "/certificatDUrbanisme" },
						{ text: 'Permis de démolir', url: "/permisDeDemolir" },
						{ text: 'Demande d\'assainissement non collectif', url: "/demandeDAssainissementNonCollectif" },
						{ text: 'Reglement du PLU', url: "/reglementDuPLU" },
						{ text: 'Divers', url: "/divers" },
					]
				},
				{ text: 'Nouveaux habitats', url: "/nouveauxHabitats" },
				{ text: 'Cimetière', url: "/cimetiere" },
				{
					text: 'Identité',
					subSubMenus: [
						{ text: 'Carte d\'identité', url: "/carteDIdentite" },
						{ text: 'Passeport', url: "/passeport" }
					]
				},
				{ text: 'Elections', url: "/elections" },
				{ text: 'Recensement', url: "/recensement" },
				{
					text: 'Actions sociales',
					subSubMenus: [
						{ text: 'Permanences', url: "/permanences" },
						{ text: 'Livret d\'accueil', url: "/liveretDAccueil" },
						{ text: 'Plan canicule', url: "/planCanicule" },
						{ text: 'Différentes actions', url: "/differentesActions" },
					]
				},
				{
					text: 'Animaux',
					subSubMenus: [
						{ text: 'Chenil communal', url: "/chenilCommunal" },
						{ text: 'Déclaration chien', url: "/declarationChien" }
					]
				},
			],
		},
		{
			menu: 'Enfance Jeunesse',
			subMenus: [
				{ text: 'SIVU "Le point du jour"', url: "/sivu" },
				{ text: 'Inscription école', url: "/inscriptionEcole" },
				{ text: 'Dérogation', url: "/derogation" },
				{
					text: 'Inscriptions extrascolaires',
					subSubMenus: [
						{ text: 'Accueil du mercredi', url: "/accueilDuMercredi" },
						{ text: 'Service périscolaire', url: "/servicePeriscolaire" },
						{ text: 'Restoration scolaire', url: "/restorationScolaire" },
					]
				},

			],
		},
		{
			menu: 'Vie Du Village',
			subMenus: [
				{
					text: 'Informations',
					subSubMenus: [
						{ text: 'Décheterie', url: "/decheterie" },
						{ text: 'Fablio', url: "/fablio" },
						{ text: 'Calendrier de chasse', url: "/calendrierDeChasse" },
						{ text: 'Frelons asiatique', url: "/frelonsAsiatique" },
						{ text: 'Destruction de nid', url: "/destructionDeNid" },
						{ text: 'Feux et bruits', url: "/feuxEtBruits" },
						{ text: 'Service déchets', url: "/serviceDechets" },
					]
				},
				{ text: 'Vie locale', url: "/vieLocale" },
				{ text: 'Vie associative', url: "/vieAssociative" },
				{
					text: 'Histoire de Beuvardes',
					subSubMenus: [
						{ text: 'Histoire 1', url: "/histoire" },
						{ text: 'Histoire 2', url: "/histoire" },
					]
				},
			],
		},
	];

	return (
		<nav>
			<ul>

				{/* =========== */}
				{subMenuLinks.map((subMenuLink, index) => (
					<li
						key={index}
						onMouseEnter={() => handleMouseEnter(`link${index + 1}`)}
						onMouseLeave={() => handleMouseLeave(`link${index + 1}`)}
					>
						<p>{subMenuLink.menu}</p>
						{subMenuState[`link${index + 1}`] && (
							<div className="submenu">

								{/* =========== */}
								{subMenuLink.subMenus.map((subMenu, subMenuIndex) => (
									<div key={subMenuIndex}>
										{subMenu.url ? (
											<Link href={subMenu.url}>{subMenu.text}</Link>
										) : (

											<p
												onMouseEnter={() =>
													handleMouseEnter(`text${index * 2 + subMenuIndex + 1}`)
												}
												onMouseLeave={() =>
													handleMouseLeave(`text${index * 2 + subMenuIndex + 1}`)
												}
											>
												{subMenu.text}
											</p>
										)}
										{subMenuState[`text${index * 2 + subMenuIndex + 1}`] && (
											< div className="subsubmenu">

												{/* =========== */}
												{subMenu.subSubMenus ? subMenu.subSubMenus.map((subSubMenu, subSubMenuIndex) => (
													<div key={subSubMenuIndex} >
														<Link
															href={subSubMenu.url}
															onMouseEnter={() =>
																handleMouseEnter(`text${index * 2 + subMenuIndex + 1}`)
															}
															onMouseLeave={() =>
																handleMouseLeave(`text${index * 2 + subMenuIndex + 1}`)
															}>
															{typeof subSubMenu === 'object' ? subSubMenu.text : subSubMenu}
														</Link>
													</div>
												)) : ""}
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</nav >
	);
};

export default Navbar;