import bmw135 from "../assets/images/bmw_135.jpg";
import bmwm3 from "../assets/images/bmw_m3.jpg";
import bmwm4 from "../assets/images/bmw_m4.jpg";
import bmwm5 from "../assets/images/bmw_m5.jpg";
import bmwm8 from "../assets/images/bmw_m8.jpg";
import bmwx6m from "../assets/images/bmw_x6m.jpg";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";

const Main = () => {
    const data = [
        { title: "BMW 135i", price: 45000, image: bmw135 },
        { title: "BMW M3", price: 89000, image: bmwm3 },
        { title: "BMW M4", price: 125000, image: bmwm4 },
        { title: "BMW M5", price: 140000, image: bmwm5 },
        { title: "BMW M8", price: 180000, image: bmwm8 },
        { title: "BMW X6M", price: 200000, image: bmwx6m },
    ];

    return (
        <>
            <Banner />
            <Gallery data={data} />
            <Feedback />
        </>
    )
}

export default Main;