import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (
            <div className="menu-container">
                <section class="menu-items-container">
                    <div>
                        <ul class="list-one">
                            {/* 54E */}
                            <li>All American Burger</li>
                            <li>Spicy Jalapeno Burger</li>
                            <li>Blue Cheese Burger</li>
                            <li>Bacon Ranch Burger</li>
                            <li>Double Stack Burger</li>
                            <li>Vegetarian Burger</li>
                        </ul>
                    </div>
                    <div class="button-list ">
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                    </div>
                    <div>
                        <ul class="list-two">
                            <li>Hot Dog</li>
                            <li>Chili Dog</li>
                            <li>Corn Dog</li>
                            <li>Vanilla Milkshake</li>
                            <li>Chocolate Milkshake</li>
                            <li>Strawberry Milkshake</li>
                        </ul>
                    </div>
                    <div class="button-list ">
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                        <button class="details-btn">details</button>
                    </div>
                    <Link to=""><button className="redButton">Add</button></Link>
                </section>
                <section class="sidebar">
                    <a href="#">Logout</a> {/* 54H */}
                </section>
            </div>
        )
    }
}