import { state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const code = {
  /**
   * defines the state being monitored for the module
   */
  state: state,
  /**
   * defines the actions used to retrieve the data
   */
  actions: actions,
  /**
   * defines the mutations used
   */
  mutations: mutations,
  /**
   * defines the getters used by the module.
   */
  getters: getters
}
