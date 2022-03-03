import express from 'express'
const app=express()
import path from 'path'
import { dirname, extname, resolve as resolvePath } from 'node:path'
import hbs from 'hbs'
import { ppid } from 'process'



const port = process.env.PORT || 8000
const staticPath=path.join('dirname','../public')
const templatesPath=path.join('dirname','../templates/views')

const partialspath=path.join('dirname','../templates/partials')
hbs.registerPartials(partialspath)

app.set('view engine','hbs')
app.set('views',templatesPath)

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/',(req,res)=>{
    res.send('hello from server side')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error')
})
app.get('/about/*',(req,res)=>{
    res.render('404error')
})

app.get('/weather/*',(req,res)=>{
    res.render('404error')
})

app.listen(port,()=>{
    console.log(`listening to port at ${port}`)
})
