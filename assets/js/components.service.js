import { AuthorCard } from './components/AuthorCard.js'
import { AppButton } from './components/AppButton.js'
import { LeftNavbar } from './components/LeftNavbar.js'

const components = [
  {
    name: 'author-card',
    component: AuthorCard
  },
  {
    name: 'app-button',
    component: AppButton
  },
  {
    name: 'left-navbar',
    component: LeftNavbar
  }
]

class ComponentsServiceClass {
  constructor({ components }) {
    this.components = components
  }

  getAll() {
    return this.components
  }
}

export const ComponentsService = new ComponentsServiceClass({ components })
