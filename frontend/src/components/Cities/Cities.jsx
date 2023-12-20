import React from 'react';
import PropTypes from "prop-types";
import "./Cities.css"
export default function ClickCollect({ restaurant }) {
    const restaurantsFiltred = [];
    restaurant.map((rest) => {
        const isExist = restaurantsFiltred.includes(rest.ville);
        if (!isExist) restaurantsFiltred.push(rest.ville);
    });
    console.log('restaurants.Filtred', restaurantsFiltred);

    return (
        <>
            <div className='cities'>
                <h3 className='title-where'>Tu veux manger où ?</h3>
                {restaurantsFiltred.map((res, i) => (
                    <button className='btn-cities' key={i} type="button" name={res}>{res}</button>
                ))}

            </div>

        </>
    )

}
