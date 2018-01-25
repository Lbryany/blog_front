export default{
  install (Vue, options) {
    Vue.prototype.getRouter = 'http://localhost:8080/spring-demo'
  }
}
