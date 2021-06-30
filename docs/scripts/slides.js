// One method per module
function introSlides() {
  return ['00-Intro/00-TITLE.md', '00-Intro/01-speaker-louis.md','00-Intro/02-speaker-gaetan.md'];
}

function contextSlides() {
  return ['01-Context/00-TITLE.md', '01-Context/10-WISH.md', '01-Context/20-DECISION.md'];
}

function buildSlides() {
  return ['02-Build/10-DESIGN.md', '02-Build/20-CRAFTING.md', '02-Build/30-TOOLS.md'];
}

function retroSlides() {
  return ['03-Retro/00-TITLE.md'];
}

function conclusionSlides() {
  return ['04-Conclusion/00-TITLE.md','04-Conclusion/01-ADVICES.md','04-Conclusion/02-THANKS.md'];
}

function formation() {
  return [
    //
    ...introSlides(),
    ...contextSlides(),
    ...buildSlides(),
    ...retroSlides(),
    ...conclusionSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
