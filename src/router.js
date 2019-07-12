export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
})
