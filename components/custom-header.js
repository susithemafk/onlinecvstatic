// Define the CustomHeader component
class CustomHeader extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })

        // header
        const header = document.createElement('header')
        header.className = "header text-light px-lg-0 px-3"
    
        // container in header
        const container = document.createElement('div')
        container.className = "container-medium mx-auto row justify-content-between"
        header.appendChild(container)

        // links in container
        const homeLink = document.createElement('a')
        const projectsLink = document.createElement('a')

        homeLink.href = "/index.html" 
        projectsLink.href = "/projects.html"

        // text in links
        const homeLinkText = document.createElement('h2')
        const projectsLinkText = document.createElement('h2')

        homeLinkText.className = "py-4 fs-2"
        projectsLinkText.className = "py-4 fs-2"

        homeLinkText.textContent = "susithemafk"
        projectsLinkText.textContent = "projekty"


        homeLink.appendChild(homeLinkText)
        projectsLink.appendChild(projectsLinkText)

        container.appendChild(homeLink)
        container.appendChild(projectsLink)


        // Create the link element for the CSS stylesheet
        const cssLink = document.createElement('link')
        cssLink.rel = "stylesheet"
        cssLink.href = "../index.css"

        // Append the container to the shadow root
        shadow.appendChild(cssLink)
        shadow.appendChild(header)
    }
}

customElements.define('custom-header', CustomHeader)
