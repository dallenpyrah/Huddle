class HomeService {
  getHome (): object {
    return {
      title: 'Home',
      description: 'This is the home page'
    }
  }
}

export default new HomeService()
