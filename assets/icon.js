import Vue from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { faChildren } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)
library.add(faUser)
library.add(faUserXmark)
library.add(faChildren)
library.add(faCalendarDays)
library.add(faGear)
library.add(faClock)
library.add(faXmark)
library.add(faPaperclip)
library.add(faPlus)
library.add(faAlignJustify)
library.add(faDollarSign)
library.add(faBookBookmark)
library.add(faEye)

Vue.component('font-awesome-icon', FontAwesomeIcon)
