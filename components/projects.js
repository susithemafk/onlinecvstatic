const custom_projects = document.querySelector('#custom_projects')
const count = custom_projects.getAttribute("count")

const projects = [
    {
        src: "assets/projects/susithechain/hero.jpg", 
        alt: 'susithechain', 
        link: 'projects/susithechain.html', 
        title: 'susithechain'
    }, 
    {
        src: "assets/projects/skatespotter/hero.webp", 
        alt: 'skatespotter', 
        link: 'projects/skatespotter.html', 
        title: 'skatespotter'
    }, 
    {
        src: "assets/projects/teachablewithsimpsons/hero.webp", 
        alt: 'teachablewithsimpsons', 
        link: 'projects/teachablewithsimpsons.html', 
        title: 'teachablewithsimpsons' 
    }, 
    {
        src: "assets/projects/podlahy-sucharda/services.webp", 
        alt: 'podlahysucharda', 
        link: 'projects/podlahy-sucharda.html', 
        title: 'Podlahy Sucharda'
    }, 
    {
        src: "assets/projects/sh-eden/hero_long.webp", 
        alt: 'sheden', 
        link: 'projects/sh-eden.html', 
        title: 'SH Eden'
    }
]

// container in header
const container = document.createElement('div')
container.className = "projects"

const wrapper = document.createElement('div')
wrapper.className = "row flex-wrap align-items-center justify-content-start"
container.appendChild(wrapper)

// loop 
projects.forEach((project, index) => {

    if (count && index >= count) return false 

    const projectsContainer = document.createElement('div')
    projectsContainer.className = "p-3 col-lg-6 col-12"
    const paddingContainer = document.createElement('div')
    paddingContainer.className = "project"

    const link = document.createElement('a')
    link.setAttribute('href', project.link)

    const imgWrapper = document.createElement('div')
    imgWrapper.className = "imgWrapper"
    imgWrapper.setAttribute('data-title', project.title)

    const img = document.createElement('img')
    img.setAttribute('src', project.src)
    img.setAttribute('alt', project.alt)
    img.setAttribute('width', 500)
    img.setAttribute('height', 500)

    imgWrapper.appendChild(img)
    link.appendChild(imgWrapper)
    paddingContainer.appendChild(link)
    projectsContainer.appendChild(paddingContainer)
    wrapper.appendChild(projectsContainer)
})


// Append the container to the shadow root
custom_projects.appendChild(container)