function minAngle(minutes,hour){
    const minutesAngle = 6 * minutes
    const hourAngle = 30 * (hour % 12) + 0.5 * minutes
    const diff = Math.abs(hourAngle - minutesAngle)
    return Math.min(diff,360-diff)
}