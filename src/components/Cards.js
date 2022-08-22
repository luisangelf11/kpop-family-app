import React, {useEffect, useState} from 'react';
import photos from '../helpers/photos';
import '../components/Cards.css';
import '../components/Button.css';
import Loader from './Loader';

export default function Cards(){
    const [images, setImages] = useState([0, 0, 0, 0, 0]);
    const [newIm, setNewIm]= useState([0, 0, 0, 0, 0]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setImages(newIm);
        }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newIm]);

    const valueRandom =()=>{
        let newValue = [];
        for(let i =1; i <= 5; i++){
            let x = Math.floor(Math.random() * (photos.length - 1) + 1);
            newValue.push(x);
        }
        
        setNewIm(newValue);
    }
    return(
        <>
            {loading === true? <Loader />
            :<section className='container'>
                <div className='box'>
                    <img src={photos[images[0]].image} alt={photos[images[0]].nombre}/>
                    <h3>Padre - {photos[images[0]].nombre}</h3>
                </div>
                <div className='box'>
                    <img src={photos[images[1]].image} alt={photos[images[1]].nombre}/>
                    <h3>Madre - {photos[images[1]].nombre}</h3>
                </div>
                <div className='box'>
                    <img src={photos[images[2]].image} alt={photos[images[2]].nombre}/>
                    <h3>Hermano/a - {photos[images[2]].nombre}</h3>
                </div>
                <div className='box'>
                    <img src={photos[images[3]].image} alt={photos[images[3]].nombre}/>
                    <h3>Novio/a - {photos[images[3]].nombre}</h3>
                </div>
                <div className='box'>
                    <img src={photos[images[4]].image} alt={photos[images[4]].nombre}/>
                    <h3>Ex - {photos[images[4]].nombre}</h3>
                </div>
            </section>
            }
            <button className='button' onClick={valueRandom}>Buscar</button>
        </>
    );
}