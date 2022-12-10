const bcrypt = require('bcryptjs')
const {User} = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
      await truncate();  
    })

    it('should encrypt user password', async () => {
        const user = await User.create({name: 'Guilherme Ramos', mail: 'guilherme.silvano@hotmail.com ', password: '123123'})

        const hash = await bcrypt.hash('123123', 8)

        const compareHash = await bcrypt.compare('123123', user.passwordHash)

        expect(compareHash).toBe(true)
    })

    
})