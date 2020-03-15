<template>
    <b-container class="p-3">
        <h2>Project requirements:</h2>
        <p>ApiURL: http://52.221.118.28/api/appointments</p>
        <p>Has pagination</p>
        <p>Has searching</p>
        <p>Has filter (Search with email)</p>
        <p>Labeled data row with API's color data</p>
        <p>Inspired by <b>Material Design</b></p>
        <!--  -->
        <h2>Features:</h2>
        <p>Using <b>VueX</b> as state management system</p>
        <p>Store loaded data to state so it won't call the API again after navigating back to Home page</p>
        <p><b>Conditional text print for logical data:</b></p>
        <ul>
            <li>Status (1/ -1) is printed as "Available and Unavailable"</li>
            <li>Numeric datas are printed with singular and plural form (doctor/ doctors, message/ messages)</li>
        </ul>
        <p><b>Missed the "repeat" and "is_shadow" since i don't know what to do with it</b></p>
        <!--  -->
        <h2>Project's structure</h2>
        <p><b>Custom style:</b> /src/assets/scss</p>
        <p><b>Common component (Navbar, Footer,...):</b> /src/common/layout</p>
        <p><b>Pages AKA Views:</b> /src/pages</p>
        <p><b>Router:</b> /src/router</p>
        <p><b>VueX-Store:</b> /src/store</p>
        <p><b>Main component:</b> /src/App.vue</p>
        <p><b>Configuration file:</b> /src/main.js</p>
        <!--  -->
        <h2>Used packages</h2>
        <p><b>Bootstrap for Vue</b></p>
        <p><b>Fontawesome for Vue</b></p>
        <p><b>Moment.JS</b></p>
        <p><b>Axios</b></p>
        <p><b>VueX</b></p>
        <p><b>Vue-Router</b></p>
        <br>
    </b-container>
</template>