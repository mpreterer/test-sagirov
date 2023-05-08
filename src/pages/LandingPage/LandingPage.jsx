import { Profit } from "../../components/Profit/Profit";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <main className="landing">
      <div className="landing__background" />
      <div className="landing__cover" />
      <div className="landing__container">
        <div className="landing__left-side">
          <div className="landing__text">
            <h1 className="landing__title">Путешествие</h1>
            <span className="landing__caption">На красную планету</span>
          </div>
          <button className="landing__button">
            <div className="landing__button-cover">
              <span className="landing__background-button">
                Начать путешествие
              </span>
            </div>
          </button>
        </div>
        <div className="landing__right-side">
          <div className="landing__profits">
            <Profit title="мы" number="1" description="на рынке" />
            <Profit
              title="гарантируем"
              number="50%"
              description="безопасность"
            />
            <Profit
              title="календарик за"
              number="2001"
              specialText="г."
              description="на рынке"
            />
            <Profit title="путешествие" number="597" description="дней" />
            <div className="landing__profits-cover" />
          </div>
        </div>
        <div className="landing__container-line" />
      </div>
    </main>
  );
};

export { LandingPage };
