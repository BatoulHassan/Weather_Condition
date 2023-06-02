import { Container, CssBaseline, Grid } from "@material-ui/core";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Home} from "./Pages/Home";
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { UIProvider } from "./ContextUi";
import { dateToStr, currentDate } from "./date";

const API_KEY = process.env.REACT_APP_Weather_Api;
var LAT=-32.9615869;
var LON=-60.6253564;

var REQUEST_URL1 = "https://api.openweathermap.org/data/2.5/weather?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric";
var REQUEST_URL2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric";


function App() {
 
  let darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  })

  const [position,setPosition]=useState({latitude:LAT,longitude:LON});    
  const [currentWeather, setCurrentWeather] = useState({});
  const [temp,setTemp] = useState(5);
  const [city,setCity] = useState('rosario');
  const [weatherType,setWeatherType] = useState('clear');
  const [weatherIcon,setWeatherIcon] = useState('01d');
  const [convert, setConvert] = useState('C');

  const todayDate = currentDate();
  
  const HightlightData={
           
    humidity:1,
    pressure:1,
    visibility:1,
    windD:1,
    windS:1

  };

  const[Hightlight,setHightlight]=useState(HightlightData);

  const[ForecastTemp,setForecastTemp]=useState([{},{},{},{},{}]);
  const[ForecastIcon,setForecastIcon]=useState(['01d','01d','01d','01d','01d']);
  const[ForecastDate,setForecastDate]=useState([]);

  const geoLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function error(err) {
      console.log(`ERROR(${err.code}): ${err.message}`);
    }

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error, options);
    } else {
      alert("denied")
    }
  }

  function showPosition(position) {
    
        LAT=position.coords.latitude 
        LON=position.coords.longitude;
        REQUEST_URL1 = "https://api.openweathermap.org/data/2.5/weather?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric";
        REQUEST_URL2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric";

        setPosition({latitude:LAT,longitude:LON})
  }

  const getCurrentWeather = async() => {
    REQUEST_URL1  = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric`;
    
    try{
      const response = await fetch(REQUEST_URL1)
      const data = await response.json();
      setCurrentWeather(data);
      console.log("current Weather is" ,data);
      const Temperature = Math.round(data.main.temp)
    
      setTemp(Temperature)
      setCity(data.name);
      const weather = data.weather[0];
      setWeatherType(weather.description)
      setWeatherIcon(weather.icon);

      HightlightData.humidity = data.main.humidity;
      HightlightData.pressure = data.main.pressure;
      HightlightData.visibility = data.visibility;
      HightlightData.windD = data.wind.deg;
      HightlightData.windS = data.wind.speed;

      setHightlight(HightlightData);
    }
    catch(error){
      console.log(error)
    }
  }

  const getForcast = async() => {
    
    REQUEST_URL2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric`;
    
    try{
      const response = await fetch(REQUEST_URL2)
      const data = await response.json();
      //setForcast(data);
      console.log("Forcast is", data);

      const list=data.list;
      var MaxTemp=[];
      var MinTemp=[];
      var ForcastDateList=[];
      var icon=[];
    
      var ForcastIconList=[]
      let Max=6;
      let Min=3;

       for (let i=0;i<5;i++){
       MaxTemp[i]=list[Max].main.temp_max;
       MinTemp[i]=list[Min].main.temp_min;
       ForcastDateList[i]=dateToStr(list[i*8].dt_txt);
       icon[i]=list[Min+1].weather[0].icon;
       ForcastIconList[i]=list[Min+1].weather[0].icon;
      
       Min=Min+8
       Max=Max+8
 }

  var ForecastTempObj={}
  var ForecastTempList=[]

   for (let i=0;i<5;i++){
      ForecastTempObj.max=Math.round(MaxTemp[i])
      ForecastTempObj.min=Math.round(MinTemp[i])
      ForecastTempList[i]=ForecastTempObj;
      ForecastTempObj={}
      }

  setForecastTemp(ForecastTempList);
  setForecastIcon(ForcastIconList);
  setForecastDate(ForcastDateList);
}
    catch(error){
      console.log(error)
    }
  }
 
  useEffect(() => {

    getCurrentWeather();
    getForcast();

  }, [position])

useEffect(() => {

  geoLocation();
  
}, [])

 //Change unit C <=> F
  const unit_change=()=>{
              
              if(convert==='C'){
                  setTemp(Math.round(((temp*(9/5))+32)))
                  
                 //Convert ForcastTemp from C to F
                  var TempConvert = ForecastTemp.map((x) => {
                     var obj={};
                     obj.max= Math.round(((x.max*(9/5))+32))
                     obj.min=Math.round(((x.min*(9/5))+32))
                     return obj ;
                  });
                 setForecastTemp(TempConvert);
                 setConvert('F')
               }
               if(convert==='F'){
                   setTemp(Math.round((temp-32)*(5/9)))
                   setConvert('C')
                   //Convert ForcastTemp from F to C
                   TempConvert = ForecastTemp.map((x) => {
                       var obj={};
                       obj.max= Math.round((x.max-32)*(5/9))
                       obj.min=Math.round((x.min-32)*(5/9))
                       return obj ;
                    });
                    setForecastTemp(TempConvert);
               }
         }

  return (
    <ThemeProvider theme={darkTheme}>
       <Container maxWidth='lg'>
       <CssBaseline/>
        <UIProvider>
         <Grid container>
           <Grid item xs={12} sm={5} md={3} lg={3} >
             <Sidebar temp={temp}
                      city={city}
                      weatherType={weatherType}
                      weatherIcon={weatherIcon}
                      todayDate={todayDate}
                      unit={convert}/>
           </Grid>
           <Grid item xs={12} sm={7} md={9} lg={9}>
             <Home  windS={Hightlight.windS}
                    windD={Hightlight.windD}
                    humidity={Hightlight.humidity}
                    visibility={Hightlight.visibility}
                    pressure={Hightlight.pressure}
                    ForeTemp={ForecastTemp}
                    ForeIcon={ForecastIcon}
                    ForeDate={ForecastDate}
                    setPosition={setPosition}
                    unit={convert}
                    unit_change = {unit_change}
                     />
           </Grid>  
         </Grid>
        </UIProvider>
       </Container>
    </ThemeProvider>
  );
}

export default App;
