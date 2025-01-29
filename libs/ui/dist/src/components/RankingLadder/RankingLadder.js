import React from "react";
import LadderItem from "./LadderItem/LadderItem";
import { AnimatePresence, motion } from "motion/react";
/**
 * Composant fonctionnel pour afficher le classement des joueurs
 *
 * @param {RankingLadderProps} props Les propriétés du composant
 * @param {PlayerData[]} props.data Les données des joueurs
 * @param {(data: PlayerData[]) => void} props.updateData La fonction pour mettre à jour les données des joueurs
 *
 * @returns {JSX.Element} Le composant pour afficher le classement des joueurs
 */
const RankingLadder = (props) => {
    const { data } = props;
    // return(<></>)
    return (React.createElement("div", { "data-testid": "RankingLadder", className: "h-full" },
        React.createElement(AnimatePresence, null,
            React.createElement("div", { className: "pt-4 columns-8 gap-4 overflow-x-auto max-h-full themed-scrollbar" }, data.map((player) => (React.createElement(motion.div, { key: player.id, initial: { scale: 0 }, animate: {
                    scale: 1,
                    transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 260,
                        damping: 40,
                    },
                }, layout: true },
                React.createElement(LadderItem, { player: player }))))))));
};
export default RankingLadder;
