export function addStyling () {
  const isInSitesFolder = () =>
    window.location.pathname.toLowerCase().includes('/sites/')

  const basePath = isInSitesFolder() ? '../css/' : './css/'

  const cssFiles = ['styles.css', 'footer.css', 'header.css', 'formstyling.css']

  return Promise.all(
    cssFiles.map(file => {
      const link = document.createElement('link')

      link.rel = 'stylesheet'
      link.href = basePath + file

      const stylesheetLoaded = new Promise(resolve => {
        link.addEventListener('load', resolve, { once: true })
        link.addEventListener('error', resolve, { once: true })
      })

      document.head.append(link)

      return stylesheetLoaded
    })
  )
}
