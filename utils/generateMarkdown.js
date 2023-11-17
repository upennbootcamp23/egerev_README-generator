const licenseDetails  = require('./detailsOfLicenses.js');

/**
 * This function creates a badge for the user-inputted license. 
 * @param {*} license provides the license from the list of licenses in detailsOfLicenses.js
 * @returns the badge of the given license; if there is no license, then an empty string
 */
function renderLicenseBadge(license) {
  if(license == "None") {
    return " ";
  }

  var licenseResult = licenseDetails.filter(licenseDetails => licenseDetails.name === license);
 return licenseResult[0].badge;

}

/**
 * This function creates a link for the user-inputted license.
 * @param {*} license provides the license from the list of licenses in detailsOfLicenses.js
 * @returns the link of the given license; if there is no license, then an empty string
 */
function renderLicenseLink(license) {
  if(license == "None") {
    return " ";
  }
  var licenseLinkResult = licenseDetails.filter(licenseDetails => licenseDetails.name === license);
  return licenseLinkResult[0].link;
}

/**
 * This function creates the License section of the example README file.
 * @param {*} license provides the license from the list of licenses in detailsOfLicenses.js
 * @returns the link of the given license; if there is no license, then an empty string
 */
function renderLicenseSection(license) {
  if(license == "None") {
    return " ";
  }

  return `
  ## License
  This application is under the ${license}(${renderLicenseLink(license)}) license. To learn about license rights and limitations, click the link. Thank you.`
}

/**
 * Generates the example README
 * @param {*} response the user's response
 * @returns the generated README
 */
function generateMarkdown(response) {
  return ` # ${response.application_name}
 
  
  > ${renderLicenseBadge(response.license)}

  ## Description 
  > ${response.description}

  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  >  ${response.installation}  

  ## Usage
  >  ${response.usage}

  >  ${renderLicenseSection(response.license)}

  ## Contributions 
  >  ${response.help}

  ## Tests
  >  ${response.tests}

  ## Questions 
  > [My Github Portfolio](https://github.com/${response.github}) <br>
  > Contact me at ${response.email}

  `;
}

module.exports = generateMarkdown;
