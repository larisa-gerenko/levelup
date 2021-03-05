$( document ).ready(function() {
    const timeNow = new Date();
    const time = new Date(timeNow.getTime() + 30 * 60000)

    $('#noDays').countdown({
        until: time,
        format: 'MS'
    });
});