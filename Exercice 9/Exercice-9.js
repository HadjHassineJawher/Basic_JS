const updateCountdown = () =>{
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25);
    const timeDifference = christmasDate - currentDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`Countdown: ${days} days ${hours} hours ${minutes} minutes`);
}

updateCountdown();
setInterval(updateCountdown, 60000);
