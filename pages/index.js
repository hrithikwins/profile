import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import {motion} from 'framer-motion';

const Home = () =>
pug`
.d-flex.flex-column.justify-content-center.align-content-center.vh-100.w-100.px-4
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 60}})
        h1#intro Hey! This is Hrithik&#x1F44B;&#x1F44B;
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 60}})
        p A student and will always be dedicated to learn new skills and implement his knowledge trying our new stuffs. What he believes is that The potential lies in the magnitude of your determination which is affected by your character not your appearance and behaviour.
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 120}})
        h2#react-flutter Reactivity is important but React &amp; Flutter developers are necessary
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 120}})
        p I develop primarily React.js Websites and Progressive Web Applications and also believe Declarative Programming is well preferred by the the Technically sound softwares and applications and there I come up with being a Flutter Developer as well.
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 150}})
        h2#full-stack Full Stack but with Node
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 150}})
        p
        | Node.js is what the market trusts and I want people to trust me and my work so I chose Node.js and the most popular Express for developing REST APIs efficiently.
`;

export default Home;
