const day='wednesday';

switch(day){
    case 'monday':
        console.log("Its a Monday");
        console.log("I have a meetin");
        break;
        case 'tuesday':
            console.log("Its a Tuesday");
            break
         case 'wednesday':
         case 'thursday':
            console.log("Its a thursday and wednesday");
            break;
        case 'friday':
             console.log("Its a friday");
             break;
        case 'saturday':
        case 'sunday':
             console.log("Its a weekend");
             break;
        default:
            console.log("Invalid Day");

               
}

if(day==='monday'){
    console.log("Its a Monday");
    console.log("I have a meetin");
}
else if(day=='tuesday'){
    console.log("Its a Tuesday");
}
else if(day=='wednesday' || day=='thursday'){
    console.log("Its a thursday and wednesday");
}
else if(day=='friday'){
    console.log("Its a friday");
}
else if(day=='saturday' || day=='sunday'){
    console.log("Its a weekend");
}
else{
    console.log("Invalid Day"); 
}