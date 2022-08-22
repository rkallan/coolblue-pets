import image from "../images/treats.jpg";
import image480 from "../images/treats-480-768.jpg";
import image768 from "../images/treats-768-1200.jpg";
import image1200 from "../images/treats-1200-1980.jpg";
import image1980 from "../images/treats-1980-2560.jpg";

const heroData = {
    url: "?available=true",
    title: "Pets directory",
    text: "See all pets available for adoption, promote them and get them a home.",
    button: "See all",
    image,
    imageSource: [
        {
            id: 1,
            url: image480,
            size: 480,
        },
        {
            id: 2,
            url: image768,
            size: 768,
        },
        {
            id: 3,
            url: image1200,
            size: 1200,
        },
        {
            id: 4,
            url: image1980,
            size: 1980,
        },
    ],
};

export default heroData;
