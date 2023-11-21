let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function checkStar(star) {
    let index = star1.indexOf(star);

    if (index !== -1) {
        return star2[index];
    } else {
        return "Không tìm thấy chòm sao";
    }
}

let star = prompt("Nhập vào ngôi sao: ");
document.write(checkStar(star));