import {default as scss} from './Sizes.scss'
import withSizes from 'react-sizes'

const desktopBreakpoint = parseInt(scss.desktopbp.match(/^\d+/g).shift() || '840')
const _withIsDesktop = ({ width }) => ({
    isDesktop: width >= desktopBreakpoint,
})
export const withIsDesktop = c=>withSizes(_withIsDesktop)(c)