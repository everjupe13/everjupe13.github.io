export const AuthorCard = {
  props: {
    authorName: {
      type: String,
      default: 'Илья Бакиров'
    },
    authorAvatar: {
      type: String,
      default: '/assets/img/avatar.png'
    },
    authorLink: {
      type: String,
      default: '/'
    }
  },

  template: `
    <div class="author-card__header">
      <div class="author-avatar">
        <img :src="authorAvatar" alt="" class="author-avatar__img">
      </div>
      <p class="author-name">{{this.authorName}} 🚀</p>
    </div>
    <div class="author-card__body">
      <app-button class="button-primary" :onClick="handleClick">Source code</app-button>
      <p class="author-text">👋 Привет! Тут я публикую учебные лабораторные работы по курсу "Исследование экосистем веб-языков и веб-технологий"</p>
    </div>
  `,

  methods: {
    handleClick(e) {
      e.stopPropagation()

      window.open(this.authorLink, '_blank')
    }
  },
}
