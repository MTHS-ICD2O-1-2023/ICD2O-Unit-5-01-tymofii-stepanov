// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/** 
 * This function checks if the user has selected the random number from above
 */

function checkNumber() {
  //input
  const userNumber = parseInt(document.getElementById("user-number").value)

  //process
  if (userNumber == randomNumber) {
    //output
    document.getElementById("result").innerHTML = 
      "You have guessed the correct number!"
  }

  if (userNumber != randomNumber) {
    //output
    document.getElementById("result").innerHTML =
      "You have guessed the wrong number!"
  }
}