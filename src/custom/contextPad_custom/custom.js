import CustomPalette from '../palette_custom/CustomPalette.js'
import CustomRenderer from '../render_custom/CustomRenderer.js'
import CustomContextPadProvider from './CustomContextPadProvider'
export default {
    __init__: ['paletteProvider', 'customRenderer', 'contextPadProvider'],
    paletteProvider: ['type', CustomPalette],
    customRenderer: ['type', CustomRenderer],
    contextPadProvider: ['type', CustomContextPadProvider]
}

// export default {
//   __init__: ['paletteProvider', 'customRenderer'],
//   paletteProvider: ['type', CustomPalette],
//   customRenderer: ['type', CustomRenderer]
// }