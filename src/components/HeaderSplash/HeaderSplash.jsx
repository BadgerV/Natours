import "./headerSplash.scss";

const HeaderSplash = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src="/assets/logo-white.png" alt="Logo" class="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>

        <a href="#" className="btn btn-white button-animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default HeaderSplash;
