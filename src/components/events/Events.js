import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const Events = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const storedEventos = localStorage.getItem('eventos');
        if (storedEventos) {
            setEventos(JSON.parse(storedEventos));
        }

        const fetchData = async () => {
            const URL = 'http://localhost:3000/api/v1/users/login';
            const datos = {
                username: 'adminEvento',
                password: 'adminEvento'
            };

            try {
                const loginResponse = await fetch(URL, {
                    method: 'POST',
                    body: JSON.stringify(datos),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                });

                const { token } = await loginResponse.json();
                const headersP = { Authorization: 'Bearer ' + token };
                const URL2 = 'http://localhost:3000/api/v1/eventos';

                const eventosResponse = await fetch(URL2, { headers: headersP });
                const eventosData = await eventosResponse.json();

                setEventos(eventosData);
                localStorage.setItem('eventos', JSON.stringify(eventosData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>EcoWeb <FormattedMessage id="Eventos" /></h1>
            {eventos.length === 0 ? (
                <p>
                    <FormattedMessage id="noEventsAvailable" />
                </p>
            ) : (
                eventos.map(evento => (
                    <div key={evento.id} className="my-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="px-5">
                                    <h4>{evento.titulo}</h4>
                                    <p style={{ fontSize: '18px' }}>{evento.objetivo}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <img
                                        src={evento.imagen}
                                        alt={evento.titulo}
                                        style={{ width: '300px', height: 'auto' }}
                                    />
                                </div>
                                <div className="mt-3">
                                    <strong>
                                        <FormattedMessage id="location" />
                                    </strong>
                                    <br /> {evento.lugar}
                                </div>
                                <div className="mt-3">
                                    <strong>
                                        <FormattedMessage id="dateAndTime" />
                                    </strong>
                                    <br />
                                    {evento.fecha}
                                </div>
                                <button
                                    className="btn btn-primary mt-3 float-md-right rounded-pill"
                                    style={{
                                        backgroundColor: '#75E7C4',
                                        color: 'black',
                                        padding: '10px 20px',
                                        border: '1px solid black'
                                    }}
                                >
                                    <FormattedMessage id="reserveSpot" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Events;
