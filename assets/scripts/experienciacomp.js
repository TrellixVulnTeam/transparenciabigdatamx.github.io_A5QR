const containerDiv6 = document.getElementById("vizContainer6");
const url6 = 'https://public.tableau.com/views/VersionfinalgraficasBD/DAHSEXPERT?:language=es-ES&:display_count=n&:origin=viz_share_link';


/*
const url6 = 'https://public.tableau.com/views/RESUMENgraficas2/DashExperienciaC2?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
*/
const options6 = {
    hideTabs: true,
}

function initViz6() {
    let viz = new tableau.Viz(containerDiv6, url6, options6)
}

document.addEventListener('DOMContentLoaded', initViz6)