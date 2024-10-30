document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let element = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = range / (duration / 10); // Calculate increment based on duration
        let timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current); // Use Math.floor to avoid decimals
        }, 10);
    }
    
    counter("count-1", 0, 1287, 3000);
    counter("count-2", 100, 5786, 2500);
    counter("count-3", 0, 1440, 3000);
    counter("count-4", 0, 7110, 3000);
});
