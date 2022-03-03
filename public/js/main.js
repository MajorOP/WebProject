
const submitbtn=document.getElementById('submitbtn')
const cityname=document.getElementById('cityname')
const temp=document.getElementById('temp')
const tempminmax=document.getElementById('temp-min-max')
const citycountry=document.getElementById('citycountry')
const day=document.getElementById('day')
const date=document.getElementById('date')

const img=document.getElementById('img')
const tempStatus=document.getElementById('temp-status')
const dayarr=new Array(7)
dayarr[0]='Sunday'
dayarr[1]='Monday'
dayarr[2]='Tuesday'
dayarr[3]='Wednesday'
dayarr[4]='Thursday'
dayarr[5]='Friday'
dayarr[6]='Saturday'
const montharr=new Array(12)
montharr[0]='Jan'
montharr[1]='Feb'
montharr[2]='Mar'
montharr[3]='April'
montharr[4]='May'
montharr[5]='June'
montharr[6]='July'
montharr[7]='Aug'
montharr[8]='Sep'
montharr[9]='Oct'
montharr[10]='Nov'
montharr[11]='Dec'
const dayDate=new Date().getDay()
const dateDate=new Date().getDate()
const monthDate=new Date().getMonth()
const yearDate=new Date().getFullYear()
const timeHours=new Date().getHours()
const timeMinutes=new Date().getMinutes()
let period='AM'
if (timeHours>=12){
    period='PM'
}
else{
    period='AM'
}
// if(timeMinutes<10){
//     timeMinutes=`0${timeMinutes}`
// }
// else{
//     timeMinutes=timeMinutes
// }
// console.log(dateDate)


const dayNow=dayarr[dayDate]
const dateNow=montharr[monthDate]
day.innerText=`${dayNow} ${timeHours}:${timeMinutes} ${period}`
date.innerText=`${dateNow} ${dateDate}, ${yearDate}`

const getinfo=async (event)=>{
    event.preventDefault()
    let cityval=cityname.value
    if(cityval===""){
        alert('Please enter a city name!')
    }
    else{
        try{
            let url=`https:api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=fc79251e103d92baf215ef2d17ec9f7d`       
            const data=await fetch(url)
            const jsonData=await data.json()
            const arrData=[jsonData]
            temp.innerText=arrData[0].main.temp+'\u00B0C'
            tempminmax.innerText=`${arrData[0].main.temp_max}\u00B0C / ${arrData[0].main.temp_min}\u00B0C`
            citycountry.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
            tempStatus.innerText=`Temp Status: ${arrData[0].weather[0].main}`
            
            
            

        }
        catch{
            alert('Please enter correct city name')
            temp.innerText=0 +'\u00B0C'
            tempminmax.innerText=`0\u00B0C / 0\u00B0C`
            citycountry.innerText=""
            tempStatus.innerText="Temp Status:"
        }
    }   
}
submitbtn.addEventListener('click',getinfo)