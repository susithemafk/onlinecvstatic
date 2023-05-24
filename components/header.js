const custom_header = document.querySelector('#custom_header')
custom_header.className = "header text-light px-lg-0 px-3"

// container in header
const header_container = document.createElement('div')
header_container.className = "container-medium mx-auto row justify-content-between"
custom_header.appendChild(header_container)

// links in container
const homeLink = document.createElement('a')
const projectsLink = document.createElement('a')

homeLink.href = "../" 
projectsLink.href = "../projects.html"

// text in links
const homeLinkText = document.createElement('h2')
const projectsLinkText = document.createElement('h2')

homeLinkText.className = "py-4 fs-2"
projectsLinkText.className = "py-4 fs-2"

homeLinkText.textContent = "susithemafk"
projectsLinkText.textContent = "projekty"


homeLink.appendChild(homeLinkText)
projectsLink.appendChild(projectsLinkText)

header_container.appendChild(homeLink)
header_container.appendChild(projectsLink)


custom_header.appendChild(header_container)