const clockContainer = document.querySelector('.js-clock'),
            clockTitle = clockContainer.querySelector('h1');
            calender = clockContainer.querySelector('h2');
        
        function getTime(){
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const seconds = date.getSeconds();
            const years = date.getFullYear();
            const months = date.getMonth()+1;
            const day = date.getDate();
            clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
            calender.innerText = `${years}년 ${months}월 ${day}일`
        }
        function init(){
            getTime();
            setInterval(getTime,1000);
        }

        init();