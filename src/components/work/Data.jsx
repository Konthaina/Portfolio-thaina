import TicTacToe from "../../assets/tic-tac-toe.png";
import CoffeeShop from "../../assets/Edencoffee.png";
import Portfolio from "../../assets/portfolio.png";
import dms from "../../assets/dms-system.png";
import animationdesign from "../../assets/animation-design.png";

export const projectsData = [
    {
        id: 1,
        image: TicTacToe,
        title: 'Project X - Tic Tac Toe Game',
        category: 'web',
        link: 'https://github.com/Konthaina/tic-tac-toe-game',
    },
    {
        id: 2,
        image: Portfolio,
        title: 'Portfolio Website - Personal Project',
        category: 'web',
        link: 'https://github.com/Konthaina/Portfolio',
    },
    {
        id: 3,
        image: CoffeeShop,
        title: 'Eden Coffee POS System',
        category: 'web',
        link:'https://github.com/Konthaina/Eden-Coffee-Frontend',
    },
    {
        id: 4,
        image: dms,
        title: 'Document Management System',
        category: 'web',
        link:'https://github.com/Konthaina/school-management',
    },
    {
        id: 5,
        image: animationdesign,
        title: 'Animation Design Page',
        category: 'designs',
        link:'https://www.figma.com/design/VJF3dVDirkjMTf5az0gxlT/Animation-Product?t=azsXBNUQWye2LuXZ-1',
    },
    
];

export const projectsNav = [
    
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'designs',
    },
]