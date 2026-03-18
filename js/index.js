import { getAll } from './firebase.js'
import { renderPost } from './renderpost.js'
import { initHeaderOnLoad } from './modules/header.js'

initHeaderOnLoad()
getAll().then(() => renderPost())
