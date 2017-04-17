const initialState = {
  all: [
    {
      id: 1,
      name: 'controller 1',
      connected: true,
      description: 'BrewPi controller description placeholder',
      connection: {
        type: 'serial',
        location: '/dev/ttyACM0',
      },
    },
    {
      id: 2,
      name: 'controller 2',
      connected: false,
      description: 'BrewPi controller description placeholder',
      connection: {
        type: 'wifi',
        location: '192.168.1.100',
      },
    },
  ],
};


const mutations = {};
const actions = {};
const getters = {
  msg: () => 'test controllers getter',
  connected: (state) => state.all.filter((item) => item.connected),
};

const module = {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
};

export default module;
