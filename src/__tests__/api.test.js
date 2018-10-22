import HTTP from '../api'

describe('API', () => {
  it('async API call with Characters', async () => {
    const req = await HTTP.get(`/people`)
    const characters = req.data
    expect(typeof characters.results[0].name).toBe('string')
  }, 30000)
})