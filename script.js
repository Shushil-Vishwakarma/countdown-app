const countdownElement = document.getElementById('countdown');

function countdownCallback(number, callback) {
    setTimeout(() => {
        countdownElement.textContent = number;
        if (callback) {
            callback();
        }
    }, 1000);
}

countdownCallback(10, () => {
    countdownCallback(9, () => {
        countdownCallback(8, () => {
            countdownCallback(7, () => {
                countdownCallback(6, () => {
                    countdownCallback(5, () => {
                        countdownCallback(4, () => {
                            countdownCallback(3, () => {
                                countdownCallback(2, () => {
                                    countdownCallback(1, () => {
                                        setTimeout(() => {
                                            countdownElement.textContent = 'Happy Independence Day';
                                        }, 1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
