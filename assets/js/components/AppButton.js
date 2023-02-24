export const AppButton = {
  props: {
    onClick: {
      type: Function,
      default: e => {}
    }
  },

  template: '<button @click="onClick" v-bind="$attrs" class="app-button"><slot></slot></button>'
}