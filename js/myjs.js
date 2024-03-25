// function onClickCallback() {
//     console.log("Thank you for your submission!");
// }

// let button = document.querySelector('button');

// button.addEventListener('click', onClickCallback);

// button.addEventListener('click', function(event) {
//     //store who clicked it
// }); 

// {/* <button>Change color</button>
//         <script>
//             function changeBackgroundColor() {
//                 document.body.style.background= "rgb(200, 200, 200)";
//             }

//             let but = document.querySelector('button');
//             but.addEventListener('click', changeBackgroundColor);
//         </script> */}

let btagform = document.getElementById("btagSearch");

btagform.addEventListener("submit", searchBnet);

function searchBnet(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let btag = document.getElementById("btag").value;
    window.open("https://overwatch.blizzard.com/en_US/search/?q=" + btag, "_blank");
}