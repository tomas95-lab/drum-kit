// const contenedor = document.querySelector(".contenedor")
// const selector = document.getElementById("selector")


// for (let i = 1; i < 10; i++) {
//     let nota = document.createElement("button")
//     contenedor.appendChild(nota)
//     nota.innerHTML = i

//     selector.addEventListener("change", (e) => {
//         console.log(selector.value)
//         switch (selector.value) {
//             case "conga":
//                 audio.src = `./notas/CONGA(${i}).wav`
//                 break;
//             case "kicks":
//                 audio.src = `./notas/Kicks/CONGA(${i}).wav`
//                 break
//             default:
//                 audio.src = `./notas/CONGA(${i}).wav`
//                 break;
//         }
//     })
//     let audio = document.createElement("audio")
//     audio.classList.add("audio")
//     contenedor.appendChild(audio)

//     nota.value = i
//     audio.value = i
//     nota.classList.add("nota")
// }

// const audio = document.querySelectorAll(".audio")
// const nota = document.querySelectorAll(".nota")


// addEventListener("keypress", (e) => {
//     console.clear()
//     for (let i = 0; audio.length; i++) {
//         let nota = audio[ i ]
//         if (nota.value == e.key) {
//             nota.play()
//         }
//     }
// }
// )




const drumContainer = document.querySelector(".notesBut")

for (let i = 1; i < 8; i++) {
    const note = document.createElement("button")
    drumContainer.appendChild(note)
    note.innerHTML = i
    note.value = i
    note.id = `./notas/0${i}.wav`


    const audios = document.createElement("audio")
    drumContainer.appendChild(audios)
    audios.src = `./notas/0${i}.wav`

    audios.classList.add("audio")
    note.classList.add("note")
    audios.value = i
}


const audio = document.querySelectorAll(".audio")
const note = document.querySelectorAll(".note")

addEventListener("keypress", (e) => {
    console.clear()

    for (let i = 0; audio.length; i++) {
        let note = audio[ i ]
        if (note.value == e.key) {
            note.play()
        }
    }
    console.clear()
}
)

let playingNotes = []
note.forEach(el => {
    console.clear()

    el.addEventListener("click", (e) => {
        console.clear()

        for (let i = 0; audio.length; i++) {
            let note = audio[ i ]
            if (note.value == el.value) {
                note.play()
                playingNotes.push(note)
            }
        }
        console.clear()
    })
    console.clear()

})


const play = document.getElementById("play")
play.addEventListener("click", e => {
    for (let i = 0; i < playingNotes.length; i++) {
        let notes = playingNotes[ i ]
        setInterval(function () {
            return notes.play()
        }, 1000)
    }
})