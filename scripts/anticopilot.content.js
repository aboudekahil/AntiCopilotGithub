const combos = [
    "cOpilOt",
    "cOpiLOT",
    "COPiLOT",
    "cOPiLOT",
    "COpiloT",
    "COpIlot",
    "CopilOt",
    "CopIlot",
    "CopILot",
    "COpilOt",
    "CopIlOt",
    "copiLOT",
    "copiLot",
    "CopiLot",
    "COpIlOt",
    "COPiloT",
    "copILot",
    "cOpiLot",
    "COpIlOT",
    "COpILOT",
    "COPiLot",
    "COPIlOt",
    "cOpIlOT",
    "copiLoT",
    "COPiLOt",
    "cOPiloT",
    "COPILOT",
    "CoPiLoT",
    "cOpIlot",
    "coPIlot",
    "coPiLOT",
    "COPIlOT",
    "CopiLOT",
    "cOpilot",
    "CoPILOT",
    "coPIloT",
    "coPilOt",
    "cOPIlOt",
    "CopIlOT",
    "COPiLoT",
    "copIlOt",
    "CoPiLOt",
    "cOPIloT",
    "coPIlOt",
    "CopiloT",
    "cOPiLOt",
    "coPILot",
    "COPilOT",
    "coPiLoT",
    "CoPILot",
    "cOpilOT",
    "CoPIlot",
    "COPIloT",
    "CoPilOT",
    "cOPILot",
    "COpilot",
    "COpilOT",
    "coPilOT",
    "CopILOt",
    "cOpILOT",
    "coPilot",
    "cOpILOt",
    "cOPiLot",
    "COpiLOt",
    "coPiloT",
    "coPIlOT",
    "cOpILoT",
    "CoPiLOT",
    "cOpIlOt",
    "COpiLoT",
    "CopilOT",
    "CopiLoT",
    "coPiLOt",
    "CoPIlOT",
    "copilOt",
    "cOPILOT",
    "COpiLOT",
    "COpIloT",
    "cOpIloT",
    "CoPiloT",
    "cOPilOt",
    "cOPIlot",
    "coPiLot",
    "CoPILoT",
    "COPILot",
    "copIlOT",
    "cOPiLoT",
    "copiLOt",
    "COpiLot",
    "CoPIlOt",
    "cOPilot",
    "copilOT",
    "cOPIlOT",
    "cOPilOT",
    "cOpiLoT",
    "CoPIloT",
    "copIlot",
    "cOPILoT",
    "copILOT",
    "cOpiLOt",
    "CopIloT",
    "COpILot",
    "coPILOT",
    "coPILoT",
    "CoPILOt",
    "COPilOt",
    "CoPilot",
    "CopILoT",
    "coPILOt",
    "COPILOt",
    "COPIlot",
    "copIloT",
    "cOpILot",
    "CoPiLot",
    "CopiLOt",
    "COpILOt",
    "COPILoT",
    "copiloT",
    "cOPILOt",
    "copILoT",
    "copILOt",
    "CoPilOt",
    "COPilot",
    "cOpiloT",
    "copilot",
    "COpILoT",
    "Copilot",
    "CopILOT",
]

function runAntiCopilotGithub() {
    window.addEventListener("", function() {})

    const codeFasterElement = document.querySelector("#\\:R3kptal9lab\\: > span > span.prc-Button-Label-pTQ3x");

    if (codeFasterElement) {
        codeFasterElement.closest("div")?.remove();
    }

    const customTaggedElement = document.getElementsByTagName("copilot-dashboard-entrypoint")[0];
    customTaggedElement?.remove();

    const elementsToRemove = [customTaggedElement];
    for (let copilotCombo of combos) {
        elementsToRemove.push(...document.querySelectorAll(`div[class*=${copilotCombo}]`));
    }
    elementsToRemove.forEach((element) => {
        element?.remove();
    });
}

let oldHref = document.location.href;

window.onload = function () {
    const bodyList = document.querySelector("body");
    const observer = new MutationObserver(function (mutations) {
        if (oldHref !== document.location.href) {
            oldHref = document.location.href;
            runAntiCopilotGithub();
        }
    })
    const config = {
        childList: true,
        subtree: true,
    }

    observer.observe(bodyList, config);
    runAntiCopilotGithub();
}
