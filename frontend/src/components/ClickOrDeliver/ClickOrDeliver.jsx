import React from 'react';
import './ClickOrDeliver.css';

export default function ClickOrDeliver() {
    return (
        <>
            <h2>Tu es plutôt...</h2>
            <section className='btnClickDeliver'>
                <button className='btn-cod'>
                    Click and Collect
                </button>
                <button className='btn-cod'>
                    Livraison
                </button>
            </section>
        </>
    )
}


