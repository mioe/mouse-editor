import { library } from '@fortawesome/fontawesome-svg-core'
import { faMugHot, faFileImport } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBookmark,
  faMugHot,
  faFileImport
)

export const FontAwesome = FontAwesomeIcon