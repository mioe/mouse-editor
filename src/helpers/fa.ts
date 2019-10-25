import { library } from '@fortawesome/fontawesome-svg-core'

// fa(:icon="['fa', 'clock']")/
import {
  faArrowLeft,
  faBookmark,
  faSave,
  faFilePowerpoint,
  faFileCode,
  faChevronRight,
  faCog,
  faTable,
  faTerminal,
  faCode,
  faAnchor,
  faLink,
  faMinus,
  faListUl,
  faListOl,
  faQuoteLeft,
  faBold,
  faStrikethrough,
  faItalic,
  faGrinHearts,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faArrowLeft,
  faBookmark,
  faSave,
  faFilePowerpoint,
  faFileCode,
  faChevronRight,
  faCog,
  faTable,
  faTerminal,
  faCode,
  faAnchor,
  faLink,
  faMinus,
  faListUl,
  faListOl,
  faQuoteLeft,
  faBold,
  faStrikethrough,
  faItalic,
  faGrinHearts,
)

// fa(:icon="['far', 'clock']")/
import {
  faCopyright,
  faClock,
  faImage,
  faFileAlt,
  faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons'
library.add(
  faCopyright,
  faClock,
  faImage,
  faFileAlt,
  faQuestionCircle,
)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export const FontAwesome = FontAwesomeIcon
