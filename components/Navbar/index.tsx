import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
  const [subMenuState, setSubMenuState] = useState<{ [key: string]: boolean }>(
    {}
  ); // ex: string=false

  const handleMouseLeave = (key: string) => {
    setSubMenuState((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleMouseEnter = (key: string) => {
    setSubMenuState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const toggleNav = (key: string) => {
    setSubMenuState((prevState) => {
      const newState = { ...prevState };
      if (newState.hasOwnProperty(key)) {
        newState[key] = !newState[key];
      } else {
        newState[key] = true;
      }
      return newState;
    });
  };

  const subMenuLinks: SubMenuLink[] = [
    {
      menu: "Ma Commune",
      subMenus: [
        { text: "Conseil municipal", url: "/conseilMunicipal" },
        { text: "Comptes rendus", url: "/comptesRendus" },
        { text: "Commissions municipales", url: "/commissionsMunicipales" },
        { text: "Services municipaux", url: "/servicesMunicipaux" },
        {
          text: "Bulletins municipaux",
          subSubMenus: [
            { text: "Petit beuvardois", url: "/petitBeuvardois" },
            { text: "Petit journal", url: "/petitJournal" },
          ],
        },
      ],
    },
    {
      menu: "Mes Demandes",
      subMenus: [
        {
          text: "Etat-civil",
          subSubMenus: [
            { text: "Demande d'aide", url: "/demandeDAide" },
            {
              text: "Reconnaissance anticipée",
              url: "/reconnaissanceAnticipee",
            },
            { text: "Mariage", url: "/mariage" },
            { text: "Pacs", url: "/pacs" },
            { text: "Parrainage civil", url: "/parrainageCivil" },
          ],
        },
        {
          text: "Urbanisme",
          subSubMenus: [
            { text: "Permis de conduire", url: "/permisDeConduire" },
            { text: "Déclaration préalable", url: "/declarationPrealable" },
            { text: "Certificat d'urbanisme", url: "/certificatDUrbanisme" },
            { text: "Permis de démolir", url: "/permisDeDemolir" },
            {
              text: "Demande d'assainissement non collectif",
              url: "/demandeDAssainissementNonCollectif",
            },
            { text: "Reglement du PLU", url: "/reglementDuPLU" },
            { text: "Divers", url: "/divers" },
          ],
        },
        { text: "Nouveaux habitats", url: "/nouveauxHabitats" },
        { text: "Cimetière", url: "/cimetiere" },
        {
          text: "Identité",
          subSubMenus: [
            { text: "Carte d'identité", url: "/carteDIdentite" },
            { text: "Passeport", url: "/passeport" },
          ],
        },
        { text: "Elections", url: "/elections" },
        { text: "Recensement", url: "/recensement" },
        {
          text: "Actions sociales",
          subSubMenus: [
            { text: "Permanences", url: "/permanences" },
            { text: "Livret d'accueil", url: "/liveretDAccueil" },
            { text: "Plan canicule", url: "/planCanicule" },
            { text: "Différentes actions", url: "/differentesActions" },
          ],
        },
        {
          text: "Animaux",
          subSubMenus: [
            { text: "Chenil communal", url: "/chenilCommunal" },
            { text: "Déclaration chien", url: "/declarationChien" },
          ],
        },
      ],
    },
    {
      menu: "Enfance Jeunesse",
      subMenus: [
        { text: 'SIVU "Le point du jour"', url: "/sivu" },
        { text: "Inscription école", url: "/inscriptionEcole" },
        { text: "Dérogation", url: "/derogation" },
        {
          text: "Inscriptions extrascolaires",
          subSubMenus: [
            { text: "Accueil du mercredi", url: "/accueilDuMercredi" },
            { text: "Service périscolaire", url: "/servicePeriscolaire" },
            { text: "Restoration scolaire", url: "/restorationScolaire" },
          ],
        },
      ],
    },
    {
      menu: "Vie Du Village",
      subMenus: [
        {
          text: "Informations",
          subSubMenus: [
            { text: "Décheterie", url: "/decheterie" },
            { text: "Fablio", url: "/fablio" },
            { text: "Calendrier de chasse", url: "/calendrierDeChasse" },
            { text: "Frelons asiatique", url: "/frelonsAsiatique" },
            { text: "Destruction de nid", url: "/destructionDeNid" },
            { text: "Feux et bruits", url: "/feuxEtBruits" },
            { text: "Service déchets", url: "/serviceDechets" },
          ],
        },
        { text: "Vie locale", url: "/vieLocale" },
        { text: "Vie associative", url: "/vieAssociative" },
        {
          text: "Histoire de Beuvardes",
          subSubMenus: [
            { text: "Histoire 1", url: "/histoire" },
            { text: "Histoire 2", url: "/histoire" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className={styles.navbar}>
      <ul>
        {/* =========== */}
        {subMenuLinks.map((subMenuLink, index) => (
          <li
            key={index}
            onMouseLeave={() => handleMouseLeave(`link${index + 1}`)}
          >
            <p
              onMouseOver={() => {
                handleMouseEnter(`link${index + 1}`);
              }}
              className={subMenuState[`link${index + 1}`] ? styles.active : ""}
            >
              {subMenuLink.menu}
            </p>
            {subMenuState[`link${index + 1}`] && (
              <div className={styles.submenu}>
                {/* =========== */}
                {subMenuLink.subMenus.map((subMenu, subMenuIndex) => (
                  <div key={subMenuIndex} className={styles.submenu__container}>
                    {subMenu.url ? (
                      <Link
                        href={subMenu.url}
                        onMouseLeave={() =>
                          handleMouseLeave(
                            `text${index * 2 + subMenuIndex + 1}`
                          )
                        }
                        onMouseEnter={() => {
                          toggleNav(`text${index * 2 + subMenuIndex + 1}`);
                        }}
                        className={
                          subMenuState[`text${index * 2 + subMenuIndex + 1}`]
                            ? styles.active
                            : ""
                        }
                      >
                        {subMenu.text}
                      </Link>
                    ) : (
                      <p
                        onMouseLeave={() =>
                          handleMouseLeave(
                            `text${index * 2 + subMenuIndex + 1}`
                          )
                        }
                        onMouseEnter={() => {
                          toggleNav(`text${index * 2 + subMenuIndex + 1}`);
                        }}
                        className={
                          subMenuState[`text${index * 2 + subMenuIndex + 1}`]
                            ? styles.row + " " + styles.active
                            : styles.row
                        }
                      >
                        {subMenu.text}
                        <FontAwesomeIcon
                          className={styles.contact__left_icon}
                          icon={faCaretRight}
                          aria-hidden="true"
                        />
                      </p>
                    )}
                    {subMenuState[`text${index * 2 + subMenuIndex + 1}`] && (
                      <div
                        className={styles.subsubmenu}
                        onMouseLeave={() =>
                          handleMouseLeave(
                            `text${index * 2 + subMenuIndex + 1}`
                          )
                        }
                        onMouseEnter={() => {
                          toggleNav(`text${index * 2 + subMenuIndex + 1}`);
                        }}
                      >
                        {/* =========== */}
                        {subMenu.subSubMenus
                          ? subMenu.subSubMenus.map(
                              (subSubMenu, subSubMenuIndex) => (
                                <div key={subSubMenuIndex}>
                                  <Link
                                    href={subSubMenu.url}
                                    onMouseLeave={() =>
                                      handleMouseLeave(
                                        `finalLink${
                                          subMenuIndex * 2 + subSubMenuIndex + 1
                                        }`
                                      )
                                    }
                                    onMouseEnter={() => {
                                      toggleNav(
                                        `finalLink${
                                          subMenuIndex * 2 + subSubMenuIndex + 1
                                        }`
                                      );
                                    }}
                                    className={
                                      subMenuState[
                                        `finalLink${
                                          subMenuIndex * 2 + subSubMenuIndex + 1
                                        }`
                                      ]
                                        ? styles.active
                                        : ""
                                    }
                                  >
                                    {typeof subSubMenu === "object"
                                      ? subSubMenu.text
                                      : subSubMenu}
                                  </Link>
                                </div>
                              )
                            )
                          : ""}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
