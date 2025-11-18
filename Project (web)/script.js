document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('timetable-form');
    const timetableBody = document.querySelector('#timetable tbody');
    let timetable = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const subject = document.getElementById('subject').value;
        const date = document.getElementById('date').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;

        timetable.push({ subject, date, startTime, endTime });
        renderTimetable();
        form.reset();
    });

    function renderTimetable() {
        timetableBody.innerHTML = '';
        timetable.forEach((item, idx) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${idx + 1}</td>
                <td><i class="fa-solid fa-book-open-reader"></i> ${item.subject}</td>
                <td><i class="fa-solid fa-calendar-day"></i> ${item.date}</td>
                <td><i class="fa-solid fa-clock"></i> ${item.startTime}</td>
                <td><i class="fa-regular fa-clock"></i> ${item.endTime}</td>
                <td>
                    <button onclick="deleteEntry(${idx})" title="Xóa dòng này">
                        <i class="fa-solid fa-trash"></i> Xóa
                    </button>
                </td>
            `;
            timetableBody.appendChild(row);
        });
    }

    window.deleteEntry = function(idx) {
        timetable.splice(idx, 1);
        renderTimetable();
    }
});