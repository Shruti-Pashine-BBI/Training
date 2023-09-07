const hasDriverLicence=true;
const hasGoodVision=false;


console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);


const shouldDrive=hasDriverLicence && hasGoodVision;
if(shouldDrive){
    console.log("Drive");
}
else{
    console.log("No drive");
}

const isTired=true;
console.log(hasDriverLicence && hasGoodVision && isTired);

console.log(hasDriverLicence && hasGoodVision || isTired);

if(hasDriverLicence && hasGoodVision && !isTired){
    console.log("Drive");
}
else{
    console.log("No drive");
}