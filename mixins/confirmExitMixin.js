import { validateMessages } from '~/seeds'

export default {
  data() {
    return {
      validateMessages
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.dataSaved) { next(true); return }

    confirm(this.validateMessages.leavePageUnsaved) ? next(true) : next(false)
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav)
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav)
  },
  methods: {
    preventNav(e) {
      if (this.dataSaved) return

      e.preventDefault()
      e.returnValue = ""
    }
  }
}