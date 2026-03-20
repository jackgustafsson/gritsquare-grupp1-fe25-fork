import { getAll } from './firebase/firebase.js'
import { renderFlowers } from './rendering/renderflowers.js'
import { renderPost } from './rendering/renderpost.js'
import { initHeaderOnLoad } from './modules/header.js'
import { addStyling } from './modules/cssadder.js'
import { initRabbitControl } from './modules/rabbit.js'

async function initPage () {
  initHeaderOnLoad()
  await addStyling()
  initRabbitControl()
  const data = await getAll()
  renderFlowers(data)
}

initPage()
