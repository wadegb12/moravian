import React from 'react'

export default ({title}) => {
    return (
        <li class="nav-item">
            <a class="nav-link" href="#">{title}
                <span class="sr-only">(current)</span>
            </a>
        </li>
    )
}