const isInSitesFolder = () =>
  window.location.pathname.toLowerCase().includes('/sites/')

const getDefaultLinks = () => {
  if (isInSitesFolder()) {
    return [
      { label: 'Messageboard', href: '../index.html' },
      { label: 'About', href: './aboutus.html' },
      { label: 'Contact', href: '#contact' }
    ]
  }

  return [
    { label: 'Messageboard', href: './index.html' },
    { label: 'About', href: './sites/aboutus.html' },
    { label: 'Contact', href: '#contact' }
  ]
}

export const renderHeader = (links) => {
  const navLinks = links || getDefaultLinks()
  const mount = document.getElementById('header-root') || document.body
  const existingHeader = mount.querySelector('[data-generated-header="true"]')
  if (existingHeader) return existingHeader

  const header = document.createElement('header')
  header.dataset.generatedHeader = 'true'

  const nav = document.createElement('nav')
  navLinks.forEach(({ label, href }) => {
    const anchor = document.createElement('a')
    anchor.textContent = label
    anchor.href = href
    nav.append(anchor)
  })

  header.append(nav)

  if (mount === document.body) {
    document.body.prepend(header)
  } else {
    mount.replaceChildren(header)
  }

  return header
}

export const initHeaderOnLoad = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderHeader(), {
      once: true
    })
    return
  }

  renderHeader()
}
