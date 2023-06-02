import React, { useState, useEffect } from 'react';

const Events = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const URL = 'http://localhost:3000/api/v1/users/login';
        const datos = {
            username: 'adminEvento',
            password: 'adminEvento'
        };

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(res => {
                const token = res.token;
                const headersP = { Authorization: 'Bearer ' + token };
                const URL2 = 'http://localhost:3000/api/v1/eventos';

                fetch(URL2, { headers: headersP })
                    .then(res => res.json())
                    .then(res => {
                        setEventos(res);
                    });
            });
    }, []);

    return (
        <div id='events'>
            <h1>EcoWeb Events</h1>
            {eventos.length === 0 ? (
                <p>No events available at this moment.</p>
            ) : (
                eventos.map(evento => (
                    <div key={evento.id} className="my-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className='px-5'>
                                    <h4>{evento.titulo}</h4>
                                    <p style={{ fontSize: '18px' }}>{evento.objetivo}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <img src={evento.imagen} alt={evento.titulo} style={{ width: '300px', height: 'auto' }} />
                                </div>
                                <div className='mt-3'>
                                    <strong>Location</strong> <br /> {evento.lugar}
                                </div>
                                <div className='mt-3'>
                                    <strong>Date and Time</strong> <br />{evento.fecha}
                                </div>
                                <button className="btn btn-primary mt-3 float-md-right rounded-pill" style={{ backgroundColor: '#75E7C4', color: 'black', padding: '10px 20px', border: '1px solid black' }}>Reserve a Spot</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Events;
