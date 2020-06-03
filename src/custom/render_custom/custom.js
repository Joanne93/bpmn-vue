import CustomPalette from '../palette_custom/CustomPalette.js'
import CustomRenderer from './CustomRenderer'
export default {
    __init__: ['paletteProvider', 'customRenderer'],
  paletteProvider: ['type', CustomPalette],
  customRenderer: ['type', CustomRenderer],
}