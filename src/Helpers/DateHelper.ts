export function normalizeDateBySeconds(seconds: number) {
    const date = new Date(1970, 0, 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.setSeconds(seconds);
    return date.toLocaleDateString('en-US', options);
}

export function normalizeDateByDate(date: string) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString('en-US', options);
}
