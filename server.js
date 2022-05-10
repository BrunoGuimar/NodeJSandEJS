const express = require('express')
const app = express()

app.set("view engine" , "ejs")

app.get("/", function(req, res){
  const items = [
    {tittle: `D`,
     message: `evelopment easier`},
    {tittle: `I`,
    message: `LALAUIUI`},
    {tittle: `C`,
    message: `olalala uiui`},
    {tittle: `K`,
    message: `akaka soo funny`}
  ]
  const subtitle = `One language that can create pages with HTML`
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle
  })  
})
app.get("/about", function(req, res){
    res.render("pages/about")  
  })

app.listen(8080)
console.log(`Rodando`)