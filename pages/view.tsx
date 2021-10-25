import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from "react";
import { getCheetahs } from '../backend/database';
import * as cheerio from 'cheerio';

export default function View(props) {
  return (
    <div>
        {
            props.cheetahs.map(
                (cheetah) => {
                    return (
                        <div>
                            <h1>{ cheetah.name }</h1>
                            <h1>{ cheetah.hairColor }</h1>
                            <h1>{ cheetah.favouriteFood }</h1>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}

export async function getServerSideProps() {
    const data = await getCheetahs();



    console.log('data', data);
    const cheetahs = data.map(
        (cheetah) => {
            return {
                id: cheetah._id.toString(),
                name: cheetah.name,
                pattern: cheetah.pattern,
                speed: cheetah.speed,
                country: cheetah.country
            }
        }
    )

    console.log('cheetahs', cheetahs);                          

    return {
        props: {
            flamingos: []
        }
  }
}
