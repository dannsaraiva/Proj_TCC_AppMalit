import React, { useState, useEffect } from 'react';


export const testeMaleta = () => {

    for (let i = 1; i <= 9; i++) {
        const testeCompartimento = useEffect(() => {
            update(ref(bd, 'maleta/' + "C1"), {


                led_status: true,
            })
                .then(() => {

                    console.log("Salvo")
                }).catch((error) => {

                    console.log(error);
                })
        });

    }
};

