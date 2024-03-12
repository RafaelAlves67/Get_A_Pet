const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(`mongodb+srv://rafudin:52qZB0wmKItXKnIw@cluster0.1mikqdj.mongodb.net/`)
    console.log("Conectou ao Banco de dados MongoDB")
}

main().catch((err) => console.log(err))

module.exports = mongoose
