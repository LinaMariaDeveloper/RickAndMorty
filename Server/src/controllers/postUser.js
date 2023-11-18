const { User } = require('../DB_connection')

const postUser = async(request, response) => {
  try {
    const { email, password } = request.body
  
    if(!email || !password) return response.status(400).json({error: 'Faltan datos'})
  
    const user = await User.findOrCreate({
      where: {
        email,
        password
      }
    })
    return response.status(200).json(user)
  } 
  catch (error) {
    return response.status(500).json({ error: error.message })
  }
}

module.exports = postUser