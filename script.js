"use strict";

const unitInputEl = document.querySelector("#unit-input");
const convertBtnEl = document.querySelector(".input-section > button");

const lengthOutputEl = document.querySelector(".length p");
const volumeOutputEl = document.querySelector(".volume p");
const massOutputEl = document.querySelector(".mass p");

convertBtnEl.addEventListener("click", () => {
  const unitValue = Number(unitInputEl.value);

  // Length Conversion
  const metersToFeet = Number((unitValue * 3.281).toFixed(3));
  const feetToMeters = Number((unitValue / 3.281).toFixed(3));
  const lengthConversion = `${unitValue} meters = ${metersToFeet} feet | ${unitValue} feet = ${feetToMeters} meters`;
  lengthOutputEl.textContent = lengthConversion;

  // Volume Conversion
  const litersToGallons = Number((unitValue * 0.264).toFixed(3));
  const gallonsToLitters = Number((unitValue / 0.264).toFixed(3));
  const volumeConversion = `${unitValue} liters = ${litersToGallons} gallons | ${unitValue} gallons = ${gallonsToLitters} litters`;
  volumeOutputEl.textContent = volumeConversion;

  // Mass Conversion
  const kilosToPounds = Number((unitValue * 2.204).toFixed(3));
  const poundsToKilos = Number((unitValue / 2.204).toFixed(3));
  const massConversion = `${unitValue} kilos = ${kilosToPounds} pounds | ${unitValue} pounds = ${poundsToKilos} kilos`;
  massOutputEl.textContent = massConversion;
});
