main.js
```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo, faSatelliteDish , faFireFlameCurved} from '@fortawesome/free-solid-svg-icons'

library.add(faVideo,faSatelliteDish, faFireFlameCurved)

Vue.component('font-awesome-icon', FontAwesomeIcon)
```
menu.vue
```vue
<font-awesome-icon icon="fa-solid fa-fire-flame-curved" />
```
package.json
```json
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.1.2",
    "@fortawesome/free-brands-svg-icons": "^6.1.2",
    "@fortawesome/free-regular-svg-icons": "^6.1.2",
    "@fortawesome/free-solid-svg-icons": "^6.1.2",
    "@fortawesome/vue-fontawesome": "^2.0.8",
    ...
    }
```
