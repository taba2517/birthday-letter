const text = `
> birthday.exe

Initialisation...

Chargement des souvenirs...
Chargement de l’amitié...
Chargement des émotions...

Terminé.

Un message spécial t’attend.
`;

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("terminal").innerHTML =
            text.substring(0, i) +
            '<span class="cursor">|</span>';

        i++;

        setTimeout(typeWriter, 35);

    } else {

        document.getElementById("terminal").innerHTML = text;

        document.getElementById("openBtn").style.display = "block";
    }
}

typeWriter();

document.getElementById("openBtn").addEventListener("click", () => {

    const letter = document.getElementById("letter");

    letter.style.display = "block";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

const firstTalk = new Date("2024-03-01T00:00:00");

function updateCounter() {

    const now = new Date();
    const diff = now - firstTalk;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);

    document.getElementById("relationshipCounter").innerHTML = `
        ${days.toLocaleString()} jours<br>
        ${hours.toLocaleString()} heures<br>
        ${minutes.toLocaleString()} minutes<br>
        ${totalSeconds.toLocaleString()} secondes
    `;
}

updateCounter();
setInterval(updateCounter, 1000);