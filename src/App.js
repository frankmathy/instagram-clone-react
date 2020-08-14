import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'cleverqazi',
      caption: 'Wow day three',
      imageUrl:
        'https://lp-cms-production.imgix.net/2019-06/28206231.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'
    },
    {
      username: 'frank',
      caption: 'Yes cool',
      imageUrl:
        'https://ik.imagekit.io/grgdihc3l/Miami/media/Locations/Beaches/South%20Beach/Aerials/South_Beach_Ocean_Drive_neon_lights_1440x900.jpg?ext=.jpg'
    },
    {
      username: 'tammy',
      caption: 'Wanna go there',
      imageUrl:
        'https://thumbnails.expedia.com/dDGkAaZt4dG5b9vtlSvDprtzLZ4=/536x384/smart/filters:quality(60)/thumbnails.expedia.com/6Nto6MM9nH0zuX8xigOquEwLxYQ=/cs-content-hub.s3-website-us-west-2.amazonaws.com/fullimages/20d7c445a0779b45bff3bae27cb2a90b.jpeg'
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Logo"
        />
      </div>

      <h1>HELLO CLEVER PROGRAMMER Let's Build an Instagram Clone</h1>

      {posts.map(post => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      <Post
        username="cleverqazi"
        caption="Wow day three"
        imageUrl="https://lp-cms-production.imgix.net/2019-06/28206231.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
      />

      <Post
        username="frank"
        caption="Yes cool"
        imageUrl="https://ik.imagekit.io/grgdihc3l/Miami/media/Locations/Beaches/South%20Beach/Aerials/South_Beach_Ocean_Drive_neon_lights_1440x900.jpg?ext=.jpg"
      />

      <Post
        username="tammy"
        caption="Wanna go there"
        imageUrl="https://thumbnails.expedia.com/dDGkAaZt4dG5b9vtlSvDprtzLZ4=/536x384/smart/filters:quality(60)/thumbnails.expedia.com/6Nto6MM9nH0zuX8xigOquEwLxYQ=/cs-content-hub.s3-website-us-west-2.amazonaws.com/fullimages/20d7c445a0779b45bff3bae27cb2a90b.jpeg"
      />
    </div>
  );
}

export default App;
