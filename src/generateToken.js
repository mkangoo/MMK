const crypto = require('crypto')

export const generateToken = (user, password, age) => {
    // Step 1: Get current timestamp in seconds (Unix time)
    const stamp = Math.floor(Date.now() / 1000)

    // Step 2: Calculate pass_hash
    const passHash = crypto.createHash('md5').update(password).digest('base64')

    // Step 3: Create salt
    const salt = `${stamp}:${age}`

    // Step 4: Calculate salted_hash
    const saltedHash = crypto.createHash('md5').update(`${salt}:${passHash}`).digest('base64')

    // Step 5: Create the token
    const tokenData = `${user}:${stamp}:${age}:${saltedHash}`

    // Step 6: Encode the token in Base64
    const token = Buffer.from(tokenData).toString('base64')

    return token
}
