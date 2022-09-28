import "./App.css";
import "./components/Header.css";
import "./components/Hero.css";
import "./components/Digital.css";
import "./components/Articles.css";
import "./components/Footer.css";
import myImage from './images/logo.svg';
import myImageFooter from './images/footer.svg';
import Phones from './images/phones.png';
import Banking from './images/banking.png';
import Budget from './images/budget.png';
import Onboard from './images/onboard.png';
import ApiPng from './images/api.png';
import Money from './images/money.png';




function App() {
  return (
    <div className={"App"}>
     <header className="header">
    <div className="container">
      <div className="header__intro">
        <a className="image" href="#logo"><img src={myImage} alt="site logo">
          </img></a>

        <nav className="header__navbar">
          <ul className="header__list">
            <li className="header__item"><a className="header__link" href="#asd">Home</a></li>
            <li className="header__item"><a className="header__link" href="#sad">About</a></li>
            <li className="header__item"><a className="header__link" href="#asd">Contact</a></li>
            <li className="header__item"><a className="header__link" href="#asd">Blog</a></li>
            <li className="header__item"><a className="header__link" href="#asdas">Careers</a></li>
          </ul>
        </nav>

        <button className="menu"><img className={"menu_img"} src="./img/mwnu.png" alt="menu">
          </img></button>

        <button className="header__invite" type="button">Request Invite</button>
      </div>

    </div>
  </header>

  <main>
    <section className="digital">
      <div className="container">
        <div className="digital__intro">
          <div className="digital__text">
            <h1 className="digital__heading">Next generation
              digital banking</h1>

            <p className="digital__textt">Take your financial life online. Your Easybank account will be a one-stop-shop for
              spending, saving,
              budgeting, investing, and much more.</p>

            <a href="#sdfs" className="digital__invite">Request Invite</a>
          </div>

          <img className="digital__phones" src={Phones} alt="phones" width="728" height="899">

          </img>

          <img className="digital__phones-2" src={Phones} alt="phones">

          </img>
        </div>
      </div>
    </section>

    <section className="hero">
      <div className="container">
        <div className="hero__intro">

          <div className="hero__text-div">
            <h2 className="hero__heading">Why choose Easybank?</h2>

            <p className="hero__text">We leverage Open Banking to turn your bank account into your financial hub. Control
              your finances like never before.</p>

          </div>


          <ul className="hero__list">
            <li className="hero__item">
              <img className="hero__item-img" src={Banking} alt="banking" width="72" height="72">

              </img>
              <p className="hero__item-p">Online Banking</p>

              <p className="hero__item-text">Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.</p>
            </li>

            <li className="hero__item">
              <img className="hero__item-img" src={Budget} alt="budgeting" width="72" height="72">

              </img>
              <p className="hero__item-p">Simple Budgeting</p>

              <p className="hero__item-text">See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.</p>
            </li>

            <li className="hero__item">
              <img className="hero__item-img" src={Onboard} alt="onboard" width="72" height="72">

              </img>
              <p className="hero__item-p">Fast Onboarding</p>

              <p className="hero__item-text">We don't do branches. Open your account in minutes online and start taking
                control of your finances right away.</p>
            </li>

            <li className="hero__item">
              <img className="hero__item-img" src={ApiPng} alt="api" width="72" height="72">

              </img>
              <p className="hero__item-p">Open API</p>

              <p className="hero__item-text">Manage your savings, investments, pension, and much more from one account.
                Tracking your money has never been easier.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>

    <section className="articles">
      <div className="container">
        <div className="articles__inner">
          <h2 className="articles__heading">Latest Articles</h2>

          <ul className="articles__list">
            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">

              <p className="articles__p"> <span className="articles__p--span">By Claire Robinson</span>
                Receive money in any currency with no fees
              </p>

              <p className="articles__text">The world is getting smaller and we're becoming more mobile. So why should you
                be forced to only
                receive money in a single …</p>
              </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Wilson Hutton</span>
                Treat yourself without worrying about money
              </p>

              <p className="articles__text">Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …</p>
                </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Claire Robinson</span>
                Take your Easybank card wherever you go
              </p>

              <p className="articles__text">We want you to enjoy your travels. This is why we don’t charge any fees on
                purchases while you're abroad. We'll even show you …</p>
                </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Claire Robinson</span>
                Our invite-only Beta accounts are now live!
              </p>

              <p className="articles__text">After a lot of hard work by the whole team, we're excited to launch our closed
                beta. It's easy to request an invite through the site ...</p>
                </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div className="container">
      <div className="footer__inner">

        <div className="footer__div-1">
          <a href="#dsfsdfs" className="footer__logo"><img className="footer__logo-img" src={myImageFooter} alt="footer">
            </img></a>

          <ul className="footer__list">


            <li className="footer__item"><a className="footer__item-link" href="#sdfs">
                <svg className="footer__image-networks" width="20" height="20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path id="facebook"
                    d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
                    fill="white" />
                </svg></a></li>
            <li className="footer__item"><a className="footer__item-link" href="#dfs">
                <svg className="footer__image-networks" width="21" height="20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path id="youtube" fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.3333 0C4.81081 0 0.333313 4.4775 0.333313 10C0.333313 15.5225 4.81081 20 10.3333 20C15.8558 20 20.3333 15.5225 20.3333 10C20.3333 4.4775 15.8558 0 10.3333 0ZM14.0341 14.0767C12.2825 14.1967 8.38081 14.1967 6.63165 14.0767C4.73498 13.9467 4.51415 13.0183 4.49998 10C4.51415 6.97583 4.73748 6.05333 6.63165 5.92333C8.38081 5.80333 12.2833 5.80333 14.0341 5.92333C15.9316 6.05333 16.1516 6.98167 16.1666 10C16.1516 13.0242 15.9291 13.9467 14.0341 14.0767ZM12.7641 9.99667L8.66665 8.04833V11.9517L12.7641 9.99667Z"
                    fill="white" />
                </svg>
              </a></li>
            <li className="footer__item"><a className="footer__item-link" href="#dfs">
                <svg className="footer__image-networks" width="20" height="20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path id="pinterest"
                    d="M10 0C4.4775 0 0 4.47667 0 10C0 14.2367 2.63583 17.855 6.35583 19.3117C6.26833 18.5208 6.18917 17.3075 6.39083 16.4442C6.5725 15.6633 7.56333 11.4733 7.56333 11.4733C7.56333 11.4733 7.26417 10.8742 7.26417 9.98833C7.26417 8.59833 8.07 7.56 9.07333 7.56C9.92583 7.56 10.3383 8.20083 10.3383 8.96833C10.3383 9.82583 9.7925 11.1083 9.51 12.2975C9.27417 13.2925 10.0092 14.105 10.9908 14.105C12.7683 14.105 14.1342 12.2308 14.1342 9.52583C14.1342 7.13167 12.4142 5.4575 9.9575 5.4575C7.1125 5.4575 5.4425 7.59167 5.4425 9.79667C5.4425 10.6558 5.77333 11.5783 6.18667 12.0783C6.26833 12.1775 6.28 12.265 6.25583 12.3658L5.97833 13.4992C5.93417 13.6825 5.83333 13.7217 5.64333 13.6333C4.39417 13.0517 3.61333 11.2258 3.61333 9.75917C3.61333 6.605 5.905 3.7075 10.2208 3.7075C13.69 3.7075 16.3858 6.18 16.3858 9.48333C16.3858 12.93 14.2133 15.7033 11.1967 15.7033C10.1833 15.7033 9.23083 15.1775 8.905 14.555L8.28167 16.9325C8.05583 17.8017 7.44667 18.8908 7.03833 19.5542C7.975 19.8433 8.96917 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47667 15.5225 0 10 0Z"
                    fill="white" />
                </svg>
              </a></li>
            <li className="footer__item"><a className="footer__item-link" href="#dfs">
                <svg className="footer__image-networks" width="21" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path id="twitter"
                    d="M20.6667 2.79746C19.9309 3.12412 19.14 3.34412 18.31 3.44329C19.1575 2.93579 19.8084 2.13162 20.1142 1.17329C19.3217 1.64329 18.4434 1.98496 17.5084 2.16912C16.7609 1.37162 15.6934 0.873291 14.5134 0.873291C11.8642 0.873291 9.91752 3.34496 10.5159 5.91079C7.10669 5.73996 4.08335 4.10662 2.05919 1.62412C0.984187 3.46829 1.50169 5.88079 3.32835 7.10246C2.65669 7.08079 2.02335 6.89662 1.47085 6.58912C1.42585 8.48996 2.78835 10.2683 4.76169 10.6641C4.18419 10.8208 3.55169 10.8575 2.90835 10.7341C3.43002 12.3641 4.94502 13.55 6.74169 13.5833C5.01669 14.9358 2.84335 15.54 0.666687 15.2833C2.48252 16.4475 4.64002 17.1266 6.95669 17.1266C14.575 17.1266 18.8792 10.6925 18.6192 4.92162C19.4209 4.34246 20.1167 3.61996 20.6667 2.79746Z"
                    fill="white" />
                </svg>
              </a></li>
            <li className="footer__item"><a className="footer__item-link" href="#dfs">
                <svg className="footer__image-networks" width="21" height="20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path id="instagram" fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.3334 0C7.61754 0 7.27754 0.0116667 6.21087 0.06C2.57921 0.226667 0.560874 2.24167 0.394207 5.87667C0.345041 6.94417 0.333374 7.28417 0.333374 10C0.333374 12.7158 0.345041 13.0567 0.393374 14.1233C0.560041 17.755 2.57504 19.7733 6.21004 19.94C7.27754 19.9883 7.61754 20 10.3334 20C13.0492 20 13.39 19.9883 14.4567 19.94C18.085 19.7733 20.1084 17.7583 20.2725 14.1233C20.3217 13.0567 20.3334 12.7158 20.3334 10C20.3334 7.28417 20.3217 6.94417 20.2734 5.8775C20.11 2.24917 18.0925 0.2275 14.4575 0.0608333C13.39 0.0116667 13.0492 0 10.3334 0ZM10.3334 1.8025C13.0034 1.8025 13.32 1.8125 14.375 1.86083C17.085 1.98417 18.3509 3.27 18.4742 5.96C18.5225 7.01417 18.5317 7.33083 18.5317 10.0008C18.5317 12.6717 18.5217 12.9875 18.4742 14.0417C18.35 16.7292 17.0875 18.0175 14.375 18.1408C13.32 18.1892 13.005 18.1992 10.3334 18.1992C7.66337 18.1992 7.34671 18.1892 6.29254 18.1408C3.57587 18.0167 2.31671 16.725 2.19337 14.0408C2.14504 12.9867 2.13504 12.6708 2.13504 10C2.13504 7.33 2.14587 7.01417 2.19337 5.95917C2.31754 3.27 3.58004 1.98333 6.29254 1.86C7.34754 1.8125 7.66337 1.8025 10.3334 1.8025ZM5.19837 10C5.19837 7.16417 7.49754 4.865 10.3334 4.865C13.1692 4.865 15.4684 7.16417 15.4684 10C15.4684 12.8367 13.1692 15.1358 10.3334 15.1358C7.49754 15.1358 5.19837 12.8358 5.19837 10ZM10.3334 13.3333C8.49254 13.3333 7.00004 11.8417 7.00004 10C7.00004 8.15917 8.49254 6.66667 10.3334 6.66667C12.1742 6.66667 13.6667 8.15917 13.6667 10C13.6667 11.8417 12.1742 13.3333 10.3334 13.3333ZM14.4709 4.6625C14.4709 4 15.0084 3.4625 15.6717 3.4625C16.3342 3.4625 16.8709 4 16.8709 4.6625C16.8709 5.325 16.3342 5.8625 15.6717 5.8625C15.0084 5.8625 14.4709 5.325 14.4709 4.6625Z"
                    fill="white" />
                </svg>

              </a>
            </li>


          </ul>
        </div>

        <ul className="footer__list-2">
          <li className="footer__item-2">
            <a className="footer__link-2" href="#ewr">About Us</a>
          </li>
          <li className="footer__item-2">
            <a className="footer__link-2" href="#wer">Contact</a>
          </li>
          <li className="footer__item-2">
            <a className="footer__link-2" href="#wer">Blog</a>
          </li>
        </ul>

        <ul className="footer__list-3">
          <li className="footer__item-3">
            <a className="footer__link-3" href="wer#">Careers</a>
          </li>
          <li className="footer__item-3">
            <a className="footer__link-3" href="#dasda">Support</a>
          </li>
          <li className="footer__item-3">
            <a className="footer__link-3" href="#dasdsa">Privacy Policy</a>
          </li>
        </ul>


        <div className="footer__div-3">
          <ar className="footer__invite" href="#asd">Request Invite</ar>

          <p className="footer__div-p">© Easybank. All Rights Reserved</p>
        </div>


      </div>
    </div>
  </footer>

    </div>
  );
}

export default App;
