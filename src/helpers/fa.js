import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright, faClock, faImage, faFileAlt, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faBookmark, faSave, faFilePowerpoint, faFileCode, faChevronRight, faCog, faTable, faTerminal, faCode, faAnchor, faLink, faMinus, faListUl, faListOl, faQuoteLeft, faBold, faStrikethrough, faItalic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFileAlt,
  faBookmark,
  faQuestionCircle,
  faBold,
  faStrikethrough,
  faItalic,
  faQuoteLeft,
  faListUl,
  faListOl,
  faMinus,
  faLink,
  faAnchor,
  faImage,
  faCode,
  faTerminal,
  faTable,
  faClock,
  faCopyright,
  faCog,
  faChevronRight,
  faFileCode,
  faFilePowerpoint,
  faSave,
  faArrowLeft,
)

export const FontAwesome = FontAwesomeIcon
