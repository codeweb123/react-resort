import React, { Component } from 'react'
import { FaLeaf, FaHiking, FaConciergeBell, FaCoffee } from "react-icons/fa";
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaLeaf/>,
                title: "Spa Services",
                info: ' Offering the very best using restorative powers of local herbs, organic chocolate and spices to relax and restore. '
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: ' Start by discovering the best of Tortuga Bay by hiking on a guided excursion. Expert leaders share secrets about the distinct island ecosystem. '
            },
            {
                icon:<FaConciergeBell/>,
                title: "International Cuisine",
                info: ' Tortuga Bay offers breakfast, lunch and dinner in a refined environment where guests will enjoy beautiful views of the sea and inspiring menus.'
            },
            {
                icon:<FaCoffee/>,
                title: "Superior Coffee",
                info: ' Start your day with a cup of cappuccino or coffee at Tortuga Bay Coffee Shop. Choose from refreshing smoothies or even a glass of wine. '
            }
        ]
    };
render() {
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
            {this.state.services.map((item,index) => {
                return (
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
        );
        })}
        </div>
        </section>
        );
    }
}