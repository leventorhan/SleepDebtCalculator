const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 6;
        case "tuesday":
            return 5;
        case "wednesday":
            return 9;
        case "thursday":
            return 6;
        case "friday":
            return 11;
        case "saturday":
            return 7;
        case "sunday":
            return 8;
    }
};

const getActualSleepHours = () => {
    return (
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday")
    );
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("You slept well this week");
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};

calculateSleepDebt(); const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 6;
        case "tuesday":
            return 5;
        case "wednesday":
            return 9;
        case "thursday":
            return 6;
        case "friday":
            return 11;
        case "saturday":
            return 7;
        case "sunday":
            return 8;
    }
};

const getActualSleepHours = () => {
    return (
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday")
    );
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("You slept well this week");
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};

calculateSleepDebt();