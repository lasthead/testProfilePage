import { mount } from '@vue/test-utils'
import User from '@/pages/user.vue'

describe('User', () => {
  it('sets the correct default data', () => {
    expect(typeof User.data() === 'object').toBeTruthy()
    expect(User.computed.dataSaved()).toBeTruthy()
    expect(User.asyncData()).toBeTruthy()
  })
})
