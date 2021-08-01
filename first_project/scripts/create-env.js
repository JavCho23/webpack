const fs = require("fs")

fs.writeFileSync("./env.js", `API=${process.env.API}`)
