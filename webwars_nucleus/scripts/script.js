// FETCH LEADERBOARD DATA
fetch("backend/leaderboard.json")
    .then(response => response.json())
    .then(data => {
        let leaderboard = "";
        data.forEach((entry, index) => {
            leaderboard += `<tr><td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td></tr>`;
        });
        document.getElementById("leaderboard-data").innerHTML = leaderboard;
    });

// FETCH API DATA 
fetch("http://localhost:5000/api/events")
    .then(response => response.json())
    .then(data => {
        document.getElementById("event-details").innerText = data.description;
    })
    .catch(() => document.getElementById("event-details").innerText = "Failed to load event details.");
