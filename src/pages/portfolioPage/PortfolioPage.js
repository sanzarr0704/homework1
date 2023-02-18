import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function PortfolioPage(props) {

    const [photos, setPhotos] = useState([]);


    const [photo, setPhoto] = useState({})

    const navi = useNavigate()

    const click = (e) => {
        fetch('https://jsonplaceholder.typicode.com/photos/'+e.target.value)
            .then(response => response.json())
            .then(photo => setPhoto(photo))
    }

    const back = () => {
        navi(-1)
    }



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [])


    return (
        <div>
            <h1>portfolio page</h1>
            <button onClick={back}>back</button>

            <div style={{display: 'flex'}}>
                <div>
                    {
                        photos.slice(0, 10).map(photo => <div>

                            <img src={photo.url} alt=""/>
                            <p>{photo.title}</p>
                            <button value={photo.id} onClick={click}>узнать url</button>
                            <p>------------------------------------------</p>
                        </div>)

                    }
                </div>


                <h2>Url картинки: {photo.url}</h2>

            </div>

                </div>
                );
                }

                export default PortfolioPage;