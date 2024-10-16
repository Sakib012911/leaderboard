// import React from 'react';
// import './App.css'; // Import your CSS file or you can use inline styles

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <div className="logo">
//           <img src="logo.svg" alt="Sololearn Logo" />
//           <h1>sololearn</h1>
//         </div>
//         <nav>
//           <ul>
//             <li><a href="">Courses</a></li>
//             <li><a href="">Leaderboard</a></li>
//             <li><a href="">Code Bits</a></li>
//             <li><a href="">Discuss</a></li>
//             <li><a href="">Blog</a></li>
//             <li><button>Go PRO</button></li>
//           </ul>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="main">
//           <h2>Leaderboard</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'; 
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img className='ada' src='image.png' alt="Logo"/>
          <h1>sololearn</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Code Playground</a></li>
            <li><a href="#">Discuss</a></li>
            <li><a href="#">Blog</a></li>
            <li><button>Go PRO</button></li>
            <li><p>465</p></li>
            <li><img src='profile.jpg' alt="Profile" /></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <h2>Leaderboard</h2>
        <div className="main">
          <div className="leaderboard">
            <ul>
              <li>
                <div className="rank">1</div>
                <div className="user-info">
                  <img src="profile.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">John Doe</span>
                    <span className="score">1500 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">2</div>
                <div className="user-info">
                  <img src="profile.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Jane Smith</span>
                    <span className="score">1450 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">3</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Alice Johnson</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">4</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Sarah</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">5</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Johnson</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              {/* Add more list items for other users */}
            </ul>
          </div>
          <div className='right-box'>
            <div className='mercury-league'>
              <div className='a1'>Venus League</div>
              <div className='a2'>Ends in 3d 7h</div>
              <img className='lock' src='cube2.jpeg' alt="League Icon" />
              <img className='lock' src='cube2.jpeg' alt="League Icon" />
              <img className='lock' src='lock1.jpeg' alt="Lock Icon" />
              <img className='lock' src='lock1.jpeg' alt="Lock Icon" />
              <img className='lock' src='lock1.jpeg' alt="Lock Icon" />
              <img className='lock' src='lock1.jpeg' alt="Lock Icon" />
            </div>
            <div className='earn-xp'>
              <h2>Earn XP</h2>
              <div>
                <h3 className='box'>
                  Keep your Streak  
                  <img className='comp' src='right.png' alt="Check Icon" /> 
                  <p>From 6 XP</p>
                </h3>
              </div>   
              <div>
                <h3 className='box'>
                  Complete a lesson 
                  <img className='comp' src='right.png' alt="Check Icon" /> 
                  <p>+10 XP</p>
                </h3>
              </div> 
              <div>
                <h3 className='box'>
                  Keep your Streak  
                  <img className='comp' src='right.png' alt="Check Icon" /> 
                  <p>+ 6 XP</p>
                </h3>
              </div> 
              <div>
                <h3 className='box'>
                  Solve a Code coach  
                  <img className='comp' src='right.png' alt="Check Icon" /> 
                  <p>+5 XP</p>
                </h3>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
