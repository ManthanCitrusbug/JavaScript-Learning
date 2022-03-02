if (a >= 18) {
    if (b == "Yes" || b == "yes" || b == "Y" || b == "y"){
        document.write("You're not aligible for vote");
    }else if (b == "No" || b == "no" || b == "N" || b == "n"){
        document.write("Get your voter id first");
    }   
}
else{
    document.write("You're not aligible for vote");
}
    
if (a>=18){
    switch(b){
        case "Yes":
            document.write("you're aligible for vote");
            break;
        case "yes":
            document.write("you're aligible for vote");
            break;
        case "Y":
            document.write("you're aligible for vote");
            break;
        case "y":
            document.write("you're aligible for vote");
            break;
        case "No":
            document.write("you're aligible for vote");
            break;
        case "no":
            document.write("you're aligible for vote");
            break;
        case "N":
            document.write("you're aligible for vote");
            break;
        case "n":
            document.write("you're aligible for vote");
            break;
        default:
            document.write("Enter valid information");
    }
}
else{
    document.write("You're not aligible for vote")
}

if (a<18){
    document.write("You're not aligible for vote")
}
else{
    switch(b){
        case "Yes":
            document.write("you're aligible for vote");
            break;
        case "yes":
            document.write("you're aligible for vote");
            break;
        case "Y":
            document.write("you're aligible for vote");
            break;
        case "y":
            document.write("you're aligible for vote");
            break;
        case "No":
            document.write("you're aligible for vote");
            break;
        case "no":
            document.write("you're aligible for vote");
                break;
        case "N":
            document.write("you're aligible for vote");
            break;
        case "n":
            document.write("you're aligible for vote");
            break;
        default:
            document.write("Enter valid information");
            }
}
