class Service {
  baseUrl = `https://aviasales-test-api.kata.academy/`

  getResponse = async (url, option = {}) => {
    const request = await fetch(this.baseUrl + url, option)
    if (request.status !== 500 && !request.ok) throw true
    const response = await request.json()
    return response
  }

  getId = async () => {
    const url = `search `
    let response = await this.getResponse(url)
    return response
  }

  getTikets = async (id) => {
    const url = `tickets?searchId=${id}`
    let response = await this.getResponse(url)

    return response
  }
}

export default new Service()
