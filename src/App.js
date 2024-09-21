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
          <img class='ada' src='image.png'/>
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
            <li><img  src='profile.jpeg'/></li>
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
                  <img src="profile.jpeg" />
                  <div className="details">
                    <span className="username">John Doe</span>
                    <span className="score">1500 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">2</div>
                <div className="user-info">
                  <img src="profile.jpeg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Jane Smith</span>
                    <span className="score">1450 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">3</div>
                <div className="user-info">
                  <img src="user-avatar.jpeg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Alice Johnson</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">4</div>
                <div className="user-info">
                  <img src="user-avatar.jpeg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Sarah</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">5</div>
                <div className="user-info">
                  <img src="user-avatar.jpeg" alt="User Avatar" />
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
          
            <div class='a1'>Venus League</div>
            <div class='a2'>Ends in 3d 7h</div>
            <img  class='lock' src='cube2.jpeg' />
            <img  class='lock' src='cube2.jpeg' />
            <img  class='lock' src='lock1.jpeg' />
            <img  class='lock' src='lock1.jpeg' />
            <img  class='lock' src='lock1.jpeg' />
            <img  class='lock' src='lock1.jpeg' />
            
          </div>
          <div className='earn-xp'>
          <h2>Earn XP</h2>
          <div>
          <h3 class='box'>Keep your Streak  <img class='comp'     src='right.png'/> <p>From 6 XP  </p></h3>
         
          </div>   
          <div>
          <h3 class='box'>Complete a lesson <img class='comp'     src='right.png'/> <p> +10 XP  </p></h3>
         
          </div> 
          <div>
          <h3 class='box'>Keep your Streak  <img class='comp'     src='right.png'/> <p>+ 6 XP  </p></h3>
         
          </div> 
          <div>
          <h3 class='box'>Solve a Code coach  <img class='comp'     src='right.png'/> <p>+5 XP  </p></h3>
         
          </div> 
  
       </div>


          </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;

