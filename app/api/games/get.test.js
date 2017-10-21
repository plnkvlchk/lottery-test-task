import app from '../../../index'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const should = chai.should()

describe('Games GET API', () => {
    describe('GET /games', async () => {
        it('should return all games from database', async () => {

            const response = await chai.request(app)
                .get('/games')

            response.body.should.have.property('games')
            response.body.games.should.be.an('array')
        })
    })
})
