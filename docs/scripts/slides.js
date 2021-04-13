// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md', '00-school/speaker-gaetan.md', '00-school/speaker-louis.md'];
}

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function conclusionSlides() {
  return ['conclusion/00-TITLE.md'];
}

function toolPresentation() {
  return ['01-toolPresentation/00-TITLE.md'];
}

function infraAsCode() {
  return [
    '02-InfraAsCode/00-TITLE.md', 
    '02-InfraAsCode/10-provider.md', 
    '02-InfraAsCode/20-wysiwyg.md', 
    '02-InfraAsCode/30-create-import.md', 
    '02-InfraAsCode/40-repeat.md', 
    '02-InfraAsCode/50-lifecycle.md'
  ];
}

function collaboration() {
  return [
    '03-collaboration/00-TITLE.md',
    '03-collaboration/10-module.md',
    '03-collaboration/20-scale.md',
    '03-collaboration/30-pull-request.md',
    '03-collaboration/40-colocation.md',
    '03-collaboration/50-easy.md',
    '03-collaboration/60-devops.md',
  ];
}

function automation() {
  return ['04-automation/00-TITLE.md'];
}

function security() {
  return ['05-security/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(),
    ...toolPresentation(),
    ...infraAsCode(),
    ...collaboration(),
    ...automation(),
    ...security(),
    ...conclusionSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
