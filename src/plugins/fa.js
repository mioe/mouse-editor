import { library } from '@fortawesome/fontawesome-svg-core'
import { faMugHot, faFileImport, faFileExport, faPuzzlePiece, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBookmark,
  faMugHot,
  faFileImport,
  faFileExport,
  faPuzzlePiece,
  faThumbtack,
  faEye,
  faEyeSlash
)

export const FontAwesome = FontAwesomeIcon