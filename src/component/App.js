import React from 'react';
import UserList from '../container/user-list';
import UserDetails from '../container/user-details';
import MovieList from '../container/movie-list';
const App = () => (
    
    <div>
        <h1>User Name List</h1>
        <UserList />
        <hr/>

        <h1>User Details</h1>
        <UserDetails />
        <hr/>

        <h1>Movie List</h1>
        <MovieList />
        <hr/>
        
        <h1>Movie Details</h1>

    </div>
);

export default App;