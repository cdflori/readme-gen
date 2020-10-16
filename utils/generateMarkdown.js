// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  # ${data.projectTitle}


  ## Table of Contents

  - [Description](#description)
  - [Installation](#installInstructions)
  - [Usage](#usageInfo)
  - [Contributions & Guidelines](#contributorGuidelines)
  - [Tests](#testInstructions)
  - [Questions](#questions)

  ## Description \n
  ${data.description} \n

  ## Installation \n
  ${data.installInstructions} \n

  ## Usage \n
  ${data.usageInfo} \n

  ## Contributions & Guidelines \n
  ${data.contributorGuidelines} \n

  ## Tests \n
  ${data.testInstructions} \n

  ## Questions \n
  [To reach me by email click here.](mailto:${data.email}.com) \n
  [Click for my Github profile.](https://github.com/${data.githubProfile}) \n

  ## Badges \n
  
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg) \n
`;
}

module.exports = generateMarkdown;

