enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function reversedDayOfWeek(dayName: string): void {
    console.log(Days[dayName as keyof typeof Days] || 'error');
}

reversedDayOfWeek('Monday');
reversedDayOfWeek('Friday');
reversedDayOfWeek('Invalid');