import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavigationBar(props) {
  return (
    <nav class="primary-nav">
      <ul>
        <li><NavLink to="/">Link 1</NavLink></li>
        <li><NavLink to="/">Link 2</NavLink></li>
      </ul>
    </nav>
  );
}
