import {
    CodeIcon,
    CssIcon,
    FigmaIcon,
    GitIcon,
    HtmlIcon,
    JavaScriptIcon,
    LampIcon,
    LayoutIcon,
    ReactIcon,
    ReduxIcon,
    RocketIcon,
    SassIcon,
    TypeScriptIcon,
} from '../assets';

export const aboutBullets = [
    {
        svg: <CodeIcon />,
        header: 'Разработка',
        text: 'При разработке я стараюсь придерживаться самых актуальных технологий и best practices',
    },
    {
        svg: <LayoutIcon />,
        header: 'Адаптивность',
        text: 'Моя верстка будет работать на любом устройстве',
    },
    {
        svg: <LampIcon />,
        header: 'Интуитивность',
        text: 'Отдаю предпочтение интуитивно понятному UI/UX',
    },
    {
        svg: <RocketIcon />,
        header: 'Динамика',
        text: 'Все свои приложения и сайты я стараюсь оживить и сделать менее статичными',
    },
];

export const skillsItems = [
    { title: 'TypeScript', icon: <TypeScriptIcon /> },
    { title: 'JavaScript', icon: <JavaScriptIcon /> },
    { title: 'React', icon: <ReactIcon /> },
    { title: 'Redux', icon: <ReduxIcon /> },
    { title: 'CSS', icon: <CssIcon /> },
    { title: 'Sass / Scss', icon: <SassIcon /> },
    { title: 'HTML', icon: <HtmlIcon /> },
    { title: 'Git', icon: <GitIcon /> },
    { title: 'Figma', icon: <FigmaIcon /> },
];
