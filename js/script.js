let greetingPar = document.querySelector('.greeting');
let weekPar = document.querySelector('.week');
let timePar = document.querySelector('.time');
let daysBeforeNewYearPar = document.querySelector('.days');

let date = new Date();

let greetings = () => {
    let time = date.getHours();
    if (time >= 0 && time < 6) {
        greetingPar.innerHTML = 'Доброй ночи';
    } else if (time >= 6 && time < 12) {
        greetingPar.innerHTML = 'Доброе утро';
    } else if (time >= 12 && time < 18) {
        greetingPar.innerHTML = 'Добрый день';
    } else {
        greetingPar.innerHTML = 'Добрый вечер';
    }

};

let weekDayToday = () => {
    let week = date.getDay();
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пяница", "суббота"];
    weekPar.innerHTML = 'Сегодня: ' + days[week];
};

let timeNow = () => {
    let time = date.toLocaleTimeString('en');
    timePar.innerHTML = 'Текущее время: ' + time;
};

let daysBeforeNewYear = () => {
    const nextYear = new Date(date.getFullYear() + 1, 0, 1);
    let remainingDays = Math.floor((newYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    let ending = (num) => {
        num = num.toString().slice(-1);
        if (num == 1) {
            return 'день';
        } else if (num >= 2 && num <= 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    };
    timePar.innerHTML = 'До нового года осталось ' + remainingDays + ending(remainingDays);
};

greetings();
weekDayToday();
timeNow();
daysBeforeNewYear();
