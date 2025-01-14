import { useState } from "react"

const useFetchImage = (API_URL, typeImage) => {
    const [image, setImage] = useState("");

    const fetchImage = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        if(typeImage === "CAT"){
            setImage(data[0].url);
        }
        if(typeImage === "DOG"){
            setImage(data.message);
        }
    }

    return [image, fetchImage];
}

export default useFetchImage;