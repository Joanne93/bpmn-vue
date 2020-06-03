// 加上左侧工具栏
import CustomPalette from '../palette_append/CustomPalette.js'
// 加入自定义的renderer
import CustomRenderer from '../render_append/CustomRenderer.js'
import CustomContextPad from './CustomContextPad'

export default {
    __init__: ['customPalette', 'customRenderer', 'customContextPad'],
    customPalette: ['type', CustomPalette],
    customRenderer: ['type', CustomRenderer],
    customContextPad: ['type', CustomContextPad]
}