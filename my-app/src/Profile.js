import React, { useState, useEffect } from 'react';
import Login from './Login'
import axios from 'axios'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function Profile(props) {
 let {loggedInUser, setLoggedInUser} = props;
 let [usersJournalEntries, setUsersJournalEntries] = useState([]);

 const handleError = err => { debugger } 

 useEffect(() => {
    const getProfile = () => {
        axios.get('https://reqres.in/api/user')
          .then(response => {
            // Need a backend URL, for now using fake data
            //  console.log(response.data.data)
            let usersJournalEntries = [
                {
                    title: 'My Encounter with a Penguin in South Africa',
                    image: 'https://images.unsplash.com/photo-1562651139-65ae77130306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                    author: 'By You',
                    date: 'Jan 1, 2020'
                },
                {
                    title: 'Bali: The Good, The Bad, The Ugly',
                    image: 'https://images.unsplash.com/photo-1588665555327-a67c73b3cc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80',
                    author: 'By You',
                    date: 'Feb 1, 2020'
               },
               {
                    title: 'Sunshine and Sailing in the South of France',
                    image: 'https://images.unsplash.com/photo-1505080857763-eec772cd197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                    author: 'By You',
                    date: 'Mar 1, 2020'
               }
            //    {
            //         title: 'Expat Expert: 5 Tips for Those Considering Expat Life',
            //         image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80',
            //         author: 'By You',
            //         date: 'Apr 1, 2020'
            //    },
            //    {
            //         title: 'Expat Expert: 5 Tips for Those Considering Expat Life',
            //         image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80',
            //         author: 'By You',
            //         date: 'Apr 1, 2020'
            //     },
            //     {
            //         title: 'Expat Expert: 5 Tips for Those Considering Expat Life',
            //         image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80',
            //         author: 'By You',
            //         date: 'Apr 1, 2020'
            //    }
            ];
           setUsersJournalEntries(usersJournalEntries);
          })
          .catch(handleError)
      }
        getProfile();
    }, []);

 if(loggedInUser.email) {
    return (
        <div>
            <div className='profile-header'>
                <h1>Welcome {loggedInUser.name}</h1>
                <div className='profile-welcome-button'><Button onClick={()=>{setLoggedInUser({})}}>Logout</Button></div>
                <h2>Your Journal Entires</h2>
            </div>
            <div className='cards-container'>
                {
                usersJournalEntries.map((entry) => (
                    <Card>
                    <div key={entry.image}>
                        <div className='image'><CardImg src={entry.image} alt='Journal entry'/></div>
                        <CardBody>
                            <CardTitle><div className='card-title'>{entry.title}</div></CardTitle>
                            <CardSubtitle><div className='card-subtitle'>{entry.author} | {entry.date}</div></CardSubtitle>
                            <Button><div className='card-button'>Edit</div></Button>
                        </CardBody>
                    </div>
                    </Card>  
                ))
                }
            </div>
        </div>
    )
 } else {
    return (
        <div>
            <Login setLoggedInUser = {setLoggedInUser}/>
        </div>
    )
 }
}