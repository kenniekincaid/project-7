import React, { Component } from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="header"></span>
        </header>
    )
}