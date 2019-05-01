const formatDate = (timeInSeconds) => {
    
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = (timeInSeconds % 60);


    if (timeInSeconds == 0 || timeInSeconds == null){
        return '0s';
    }

    else if (hours >= 1 && minutes == 0 && seconds == 0){
        return `${hours}h`;
    }

    else if (timeInSeconds >= 60 && timeInSeconds <= 3599 && seconds >= 1) {
        return `${minutes}m ${seconds}s`;
    }

    else if (timeInSeconds >= 60 && timeInSeconds <= 3599 && seconds < 1){
        return `${minutes}m`;
    }

    else if (timeInSeconds >= 1 && timeInSeconds <= 59){
        return `${seconds}s`;
    }
   
    else if(hours >= 1 && minutes < 1){
        return `${hours}h ${seconds}s`;
    }
    
    else if(hours >= 1 && seconds == 0){
        return `${hours}h ${minutes}m`;
    }

    else if(hours >= 1 && minutes > 1){
       return  `${hours}h ${minutes}m ${seconds}s`;
    }

}

module.exports = formatDate;