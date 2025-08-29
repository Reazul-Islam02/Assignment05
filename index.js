
        let loveCount = 0;
        let coinCount = 100;
        let copyCount = 0;
        const loveDisplay = document.getElementById('love-count');
        const coinDisplay = document.getElementById('coin-count');
        const copyDisplay = document.getElementById('copy-count');
        const historyList = document.getElementById('history-list');
        const clearHistoryBtn = document.getElementById('clear-history');

        function updateDisplays() {
            loveDisplay.innerHTML = `${loveCount}<span class="mr-1">❤️</span>`;
            coinDisplay.innerHTML = `${coinCount}<span class="mr-1">💰</span>`;
            copyDisplay.innerHTML = `${copyCount} <span class="mr-1 text-white"> Copy</span>`;
        }

        document.querySelectorAll('.heart').forEach(heart => {
            heart.addEventListener('click', () => {
                loveCount++;
                updateDisplays();
            });
        });

        // document.querySelectorAll('.copy-btn').forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         const number = btn.dataset.number;
        //         navigator.clipboard.writeText(number).then(() => {
        //             alert('Hotline number copied to clipboard!');
        //             copyCount++;
        //             updateDisplays();
        //         });
        //     });
        // });
        
     document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const number = btn.dataset.number;
        navigator.clipboard.writeText(number).then(() => {
            copyCount++; // increment the copy count
            updateDisplays(); // update the display
            alert(`Hotline number ${number} copied to clipboard!`);
        }).catch(err => {
            alert('Failed to copy number!');
            console.error(err);
        });
    });
});

// function updateDisplays() {
//     loveDisplay.innerHTML = `<span class="mr-1">❤️</span>${loveCount}`;
//     coinDisplay.innerHTML = `<span class="mr-1">💰</span>${coinCount}`;
//     copyDisplay.innerHTML = `<span class="mr-1">📋</span>${copyCount} Copy`;
// }

        document.querySelectorAll('.call-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.dataset.name;
                const number = btn.dataset.number;
                if (coinCount < 20) {
                    alert('Insufficient coins!');
                    return;
                }
                alert(`Calling ${name} at ${number}`);
                coinCount -= 20;
                const time = new Date().toLocaleTimeString();
                const li = document.createElement('li');
                li.classList.add('bg-gray-100', 'p-2', 'rounded', 'flex', 'justify-between');
                li.innerHTML = `<span>${name}    ${number}</span><span class="text-gray-500 text-sm">${time}</span>`;
                historyList.appendChild(li);
                updateDisplays();
            });
        });

        clearHistoryBtn.addEventListener('click', () => {
            historyList.innerHTML = '';
        });

        updateDisplays();
    