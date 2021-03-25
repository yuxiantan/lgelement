import TanButton from '../'

export default {
  title: 'TanButton',
  component: TanButton
}

export const Text = () => ({
  components: { TanButton },
  template: '<tan-button @click="handleClick"></tan-button>',
  data () {
    return {
      value: 'admin'
    }
  },
  methods: {
    handleClick (evt) {
      console.log(evt)
      this.$emit('click', evt)
      evt.preventDefault();
    }
  }
})

