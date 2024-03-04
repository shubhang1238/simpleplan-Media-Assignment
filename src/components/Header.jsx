function Header() {
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <div className="header-item">
              <h3 className="heading">Hobbies</h3>
              <img style={{ width: "50px" }} src="./heart.png" alt="" />
              <h3 className="heading">Happiness</h3>
              <img src="Subtract.svg" alt="" />

              <h3 className="heading">Home</h3>
            </div>
            <div className="header-paragraph">
              <p>
                A Nordic startup which brings incredibly interesting hobbies
                from around the world to people of all ages.
              </p>
            </div>

            <div>
              <div className="email">
                <input
                  className="email-input"
                  type="email"
                  placeholder="Enter your email"
                />

                <button className="email-button">
                  start exploring
                  <svg className="rightarrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <g clipPath="url(#clip0_1104_30771)">
                      <path
                        d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 13.3337L13.3333 10.0003L10 6.66699"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66797 10H13.3346"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1104_30771">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="background-img">
              <svg className="redbg"
                width="589"
                height="598"
                viewBox="0 0 589 598"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.6557 181.159C60.2517 117.878 148.404 122.04 217.23 94.5232C295.719 63.1429 372.977 -30.367 446.528 11.2923C520.51 53.1958 470.651 170.356 494.961 251.831C518.114 329.429 612.653 393.029 582.901 468.344C552.996 544.048 448.774 546.886 370.123 567.849C297.652 587.166 221.627 615.432 154.186 582.615C85.8571 549.366 53.4245 474.309 29.6033 402.15C5.58169 329.385 -18.245 246.579 21.6557 181.159Z"
                  fill="#FB7356"
                />
              </svg>
              <img className="family-img" src="./img.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="side-img">
          <img className="green" src="./side.svg" alt="" />
            <svg
              className="arrow"
              width="120"
              height="116"
              viewBox="0 0 120 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M70.4663 101.71C73.2934 99.7514 75.3821 97.4224 76.8259 94.8597C78.274 92.2947 79.0762 89.4927 79.3357 86.5871C79.5998 83.6792 79.3179 80.6712 78.596 77.692C77.8729 74.7117 76.7108 71.757 75.2065 68.9658C74.3161 67.3118 73.3106 65.722 72.1974 64.2083C71.0746 62.6806 69.8277 61.2479 68.4693 59.925C67.1108 58.6105 65.6384 57.4222 64.0525 56.4159C62.4688 55.4095 60.7739 54.5807 58.9747 53.9806C57.8706 53.613 56.447 53.3075 54.9288 53.1605C53.4127 53.0157 51.7987 53.0305 50.3225 53.3103C48.8464 53.5902 47.5026 54.1317 46.5249 55.0357C45.5472 55.9398 44.9312 57.2064 44.9082 58.941C44.8893 60.1943 45.3118 61.4166 46.1019 62.3939C46.8581 63.362 47.9196 64.1477 49.1114 64.7815C50.3022 65.4164 51.6279 65.895 52.9135 66.2432C54.0854 66.5586 55.2803 66.7792 56.4867 66.9028C58.1863 67.067 59.8968 67.0724 61.5958 66.919C63.3174 66.7632 65.0203 66.4504 66.6834 65.9844C68.3488 65.5157 69.9673 64.8922 71.4955 64.1151C73.017 63.348 74.4487 62.4154 75.7647 61.3341C77.1954 60.1612 78.451 58.7898 79.4938 57.2613C80.4798 55.8118 81.239 54.2197 81.7455 52.5397C84.8969 42.0673 77.5835 32.1283 70.8581 24.841C67.5285 21.2357 64.1071 17.7165 60.6669 14.2185C57.1312 10.6171 53.4328 7.18207 49.5807 3.92245"
                stroke="#FFDD00"
                stroke-width="6"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M82.8201 104.153C76.0689 102.613 70.6298 106.694 64.0168 106.514C66.1918 101.969 70.187 92.5511 69.436 87.2857"
                stroke="#FFDD00"
                stroke-width="6"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          <h1 className="explore">
            Explore. Enroll. Have Fun. Repeat - here hobby meets happiness
          </h1>
        </div>
        {/* <div>
          <img style={{ width: "100px" }} src="heart.png" alt="" />
        </div> */}
      </div>
    );
  }
  
  export default Header;
  