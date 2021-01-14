import AppPreview from '../../assets/img/app_preview_2.png';
import AppShowCase from './../../assets/img/app_showcase.svg';
import HeroBG from './../../assets/img/bg_hero_2.svg';
import ClientSport from './../../assets/img/clients/alter_sport.png';
import ClientService from './../../assets/img/clients/cleaning_service.png';
import ClientPhoto from './../../assets/img/clients/creative_photo.png';
import ClientGlobalTV from './../../assets/img/clients/global_tv.png';
import ClientNetSportTV from './../../assets/img/clients/net_sport_tv.png';
import ClientNetNewsTV from './../../assets/img/clients/news_digital_tv.png';
import ClientSpaBeauty from './../../assets/img/clients/spa_beauty.png';
import Clienttrivier from './../../assets/img/clients/trivier_group.png';
import PersonOne from './../../assets/img/person/person_1.png';
import PersonTwo from './../../assets/img/person/person_2.png';
import PersonThree from './../../assets/img/person/person_3.png';
// Components
import Footer from './../../components/Footer';
import Nav from './../../components/Nav';

function Home() {
  return (
    <>

    <Nav />

    <div className="page-hero-section bg-image hero-home-2" style={{ backgroundImage: `url(${HeroBG})`}}>
      <div className="hero-caption">
        <div className="container fg-white h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 wow fadeInUp">
              <div className="badge badge-soft mb-2">#1 Finances App on 2020</div>
              <h1 className="mb-4 fw-normal">Best app for your modern lifestyle</h1>
              <p className="mb-4">Mobster has features to view and manage <br />
              our finances, such as transfer, and statistics.</p>

              <a href="#" className="btn btn-dark">Get Started</a>

            </div>
            <div className="col-lg-6 d-none d-lg-block wow zoomIn">
              <div className="img-place mobile-preview shadow floating-animate">
                <img src={AppShowCase} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>Powerful Features</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                  <div
                    className="iconic-md iconic-text bg-warning fg-white rounded-circle"
                  >
                    <span className="mai-analytics"></span>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>Fully Secured</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                  <div
                    className="iconic-md iconic-text bg-info fg-white rounded-circle"
                  >
                    <span className="mai-shield-checkmark"></span>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>Easy Monitoring</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                  <div
                    className="iconic-md iconic-text bg-indigo fg-white rounded-circle"
                  >
                    <span className="mai-desktop-outline"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="img-place mobile-preview shadow">
                <img src={AppPreview} alt="" />
              </div>
            </div>
            <div className="col-lg-4 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div
                    className="iconic-md iconic-text bg-warning fg-white rounded-circle"
                  >
                    <span className="mai-speedometer-outline"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Powerful Features</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div
                    className="iconic-md iconic-text bg-success fg-white rounded-circle"
                  >
                    <span className="mai-aperture"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Fully Secured</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div
                    className="iconic-md iconic-text bg-indigo fg-white rounded-circle"
                  >
                    <span className="mai-stats-chart-outline"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Easy Monitoring</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <hr />

    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center text-center wow fadeInUp">
          <div className="col-lg-6">
            <h2 className="mb-3">Get awesome features, without extra charges</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              non magnam, quis aliquid dolor magni
            </p>

            <div
              className="btn-group btn-group-toggle rounded-pill btn-switch"
              data-toggle="buttons"
            >
              <label className="btn active">
                <input type="radio" name="options" id="option1" />
                Monthly
              </label>
              <label className="btn">
                <input type="radio" name="options" id="option2" /> Annually
              </label>
            </div>
          </div>
        </div>
        <div className="pricing-table mt-5 wow fadeInUp">
          <div className="pricing-item active no-transform">
            <div className="pricing-header">
              <h5>Business Plan</h5>
              <h1 className="fw-normal">$49.00</h1>
            </div>
            <div className="pricing-body">
              <ul className="theme-list">
                <li className="list-item">Push Notification</li>
                <li className="list-item">Unlimited Bandwith</li>
                <li className="list-item">Realtime Database</li>
                <li className="list-item">Monthly Backup</li>
                <li className="list-item">24/7 Support</li>
              </ul>
            </div>
            <button className="btn btn-dark">Choose Plan</button>
          </div>
          <div className="pricing-item">
            <div className="pricing-header">
              <h5>Starter Plan</h5>
              <h1 className="fw-normal">$24.00</h1>
            </div>
            <div className="pricing-body">
              <ul className="theme-list">
                <li className="list-item">Push Notification</li>
                <li className="list-item">Unlimited Bandwith</li>
                <li className="list-item">Realtime Database</li>
                <li className="list-item">Monthly Backup</li>
                <li className="list-item">24/7 Support</li>
              </ul>
            </div>
            <button className="btn btn-dark">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6 wow fadeIn">
            <h2>Meet client satisfaction by using product</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="owl-carousel stack-carousel mt-5 wow fadeInUp">
          <div className="item">
            <div className="ratings fs-small py-3">
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star-half"></span>
            </div>

            <div className="caption">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              distinctio esse eum laudantium necessitatibus autem perferendis
              quod ipsum eaque.
            </div>

            <div className="avatar mt-3">
              <div className="avatar-img">
                <img src={PersonOne} alt="" />
              </div>
              <div className="avatar-caption">
                <p className="mb-0 fw-medium fg-primary">Galih Raugana</p>
                <div className="fs-vsmall fw-medium">UI Designer</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ratings fs-small py-3">
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star-half"></span>
            </div>

            <div className="caption">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              distinctio esse eum laudantium necessitatibus autem perferendis
              quod ipsum eaque.
            </div>

            <div className="avatar mt-3">
              <div className="avatar-img">
                <img src={PersonTwo} alt="" />
              </div>
              <div className="avatar-caption">
                <p className="mb-0 fw-medium fg-primary">Galih Raugana</p>
                <div className="fs-vsmall fw-medium">Graphic Designer</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ratings fs-small py-3">
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="icon mai-star"></span>
              <span className="mai-star"></span>
            </div>

            <div className="caption">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              distinctio esse eum laudantium necessitatibus autem perferendis
              quod ipsum eaque.
            </div>

            <div className="avatar mt-3">
              <div className="avatar-img">
                <img src={PersonThree} alt="" />
              </div>
              <div className="avatar-caption">
                <p className="mb-0 fw-medium fg-primary">Galih Raugana</p>
                <div className="fs-vsmall fw-medium">Data Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="page-section">
      <div className="container">
        <div className="text-center wow fadeIn">
          <h2 className="mb-4">Our partners</h2>
          <p>Become a <a href="#">partners?</a></p>
        </div>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5"
        >
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientSport} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientService} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientPhoto} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientGlobalTV} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientNetSportTV} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientNetNewsTV} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={ClientSpaBeauty} alt="" />
            </div>
          </div>
          <div className="p-3 wow zoomIn">
            <div className="img-place client-img">
              <img src={Clienttrivier} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}
export default Home;