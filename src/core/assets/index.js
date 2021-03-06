/* ------------------------- Internal Dependencies -------------------------- */
import images from './images.js'
import devices from './devices.js'
import graphics from './graphics.js'
import shapes from './shapes.js'
import screenshots from './screenshots.js'

const assets = {
  graphics: {
    ...graphics
  },
  devices: {
    ...devices
  },
  images: {
    ...images
  },
  svg: {
    ...shapes
  },
  screenshots: {
    ...screenshots
  }
}

export default assets

