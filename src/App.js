import React from 'react'
import "./App.css"
import I1 from "./Images/1.jpg"
import I2 from "./Images/2.jpg"
import I3 from "./Images/3.jpg"
import I4 from "./Images/4.jpg"
import I5 from "./Images/5.jpg"
import I6 from "./Images/6.jpg"
// import A1 from "./Images/a1.gif"
import music from "./Images/1.mp3"
import vid from "./Images/vid.mp4"
import a1 from "./Images/a1.gif"

export default function App() {
  let mainBody = document.querySelector("div")
  let myVideo = document.getElementById("myVideo")
  let btn = document.getElementById("changeBtn")
  let btn2 = document.getElementById("swepVid")
  let hTag = document.querySelector("h1")
  let cartoon = document.getElementById("imgAni")

  mainBody.style.height = "100vh"
  myVideo.style.display = "none"
  let welcome = window.prompt("Enter Your Name")
  window.onload = () => {
    clearTimeout(timeout1)
    clearTimeout(timeout2)
    clearTimeout(timeout3)
    clearTimeout(timeout4)
    clearTimeout(timeout5)
    clearTimeout(timeout6)
  }
  let musicBackground = () => {
    let a = new Audio(music)
    a.play()
  }
  let timeout1 = setTimeout(() => {
    mainBody.style.background = `url(${I1}) no-repeat center center/cover`
    hTag.style.color = "black"
    btn2.style.display = "none"
    myVideo.style.display = "none"
  }, 1000);

  let timeout2 = setTimeout(() => {
    mainBody.style.background = `url(${I2}) no-repeat center center/cover`
    hTag.style.color = "white"
    btn2.style.display = "none"
    myVideo.style.display = "none"

  }, 25000);
  let timeout3 = setTimeout(() => {
    mainBody.style.background = `url(${I3}) no-repeat center center/cover`
    hTag.style.color = "blue"
    btn2.style.display = "none"
    myVideo.style.display = "none"

  }, 50000);
  let timeout4 = setTimeout(() => {
    mainBody.style.background = `url(${I4}) no-repeat center center/cover`
    hTag.style.color = "green"
    btn2.style.display = "none"
    myVideo.style.display = "none"

  }, 75000);
  let timeout5 = setTimeout(() => {
    mainBody.style.background = `url(${I5}) no-repeat center center/cover`
    hTag.style.color = "black"
    btn2.style.display = "none"
    myVideo.style.display = "none"

  }, 100000);
  let timeout6 = setTimeout(() => {
    mainBody.style.background = `url(${I6}) no-repeat center center/cover`
    hTag.style.color = "white"
    btn2.style.display = "none"
    myVideo.style.display = "none"

  }, 130000);

  let swap = function () {
    setTimeout(timeout7)
    setTimeout(timeout8)
  }
  let timeout7 = setTimeout(() => {
    mainBody.style.background = `url(${I1}) no-repeat center center/cover`
    btn.style.display = "none"
    hTag.style.display = "none"
    btn2.style.display = "block"
    cartoon.style.display = "none"
  }, 150000);

  let timeout8 = setTimeout(() => {
    btn2.style.display = "none"
    myVideo.style.display = "block"
    myVideo.style.width = "98.5vw"
    myVideo.style.height = "100%"
    cartoon.style.display = "none"
    myVideo.play()
  }, 153000);

  return (
    <div>
      <h1>🙏{welcome}🙏</h1>
      <button id='changeBtn' onClick={musicBackground}>Click Btn</button>
      <button id='swepVid' onClick={swap}>Play The Video</button>
      <video autoPlay loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video>
      <img src={a1} alt="load" id='imgAni' />
    </div>
  )
}

    // let btn = document.getElementById("changeBtn")
    // var myData = { // Create a JSON for your images
    //   1: {
    //       imageUrl: I1
    //   },
    //   2: {
    //     imageUrl: I2
    //   }
    // }
    // let changeBtn = ()=>{
    //   var randomNumber = Math.floor((Math.random() * 2) + 1);
    //   mainBody.style.background = "url('"+myData[randomNumber].imageUrl+"')";
    // }