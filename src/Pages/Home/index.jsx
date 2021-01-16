import AppPreviewMiddle from '../../assets/img/app_preview_2.png';
import AppPreview from '../../assets/img/app_preview_4.png';
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
import Concept from './../../assets/img/icons/concept.png';
import Customizable from './../../assets/img/icons/customizable.png';
import Payment from './../../assets/img/icons/payment.png';
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

    {/* Our Main featureses */}
    <div className="page-section no-scroll">
      <div className="container">
        <h2 className="text-center wow fadeIn">Our Main Features</h2>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 py-3 wow fadeInLeft">
                <div className="card card-body border-0 text-center shadow pt-5">
                  <div className="svg-icon mx-auto mb-4">
                    <img src={Payment} alt="" />
                  </div>
                  <h5 className="fg-gray">Secure Payment</h5>
                  <p className="fs-small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint voluptates esse, sunt reprehenderit
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                <div className="card card-body border-0 text-center shadow pt-5">
                  <div className="svg-icon mx-auto mb-4">
                    <img src={Customizable} alt="" />
                  </div>
                  <h5 className="fg-gray">Easily Customizable</h5>
                  <p className="fs-small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint voluptates esse, sunt reprehenderit
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 py-3 wow fadeInRight">
                <div className="card card-body border-0 text-center shadow pt-5">
                  <div className="svg-icon mx-auto mb-4">
                    <img src={Concept} alt="" />
                  </div>
                  <h5 className="fg-gray">Powerful Concept</h5>
                  <p className="fs-small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint voluptates esse, sunt reprehenderit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* All kind of business tools */}
    <div className="page-section no-scroll">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 wow fadeIn">
            <div className="img-place">
              <img src={AppPreview} alt="" />
            </div>
          </div>
          <div className="col-lg-5 pl-lg-5 wow fadeInUp">
            <h2 className="mb-4">All kind of business tools integration</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              repellendus illo, possimus magni cumque, voluptatem et
              necessitatibus consequatur perspiciatis laborum temporibus sint
              dolorem porro, eaque quo sequi. Tempora, voluptates quibusdam?
            </p>
            <a href="#" className="btn btn-outline-primary rounded-pill">See Addons</a>
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
                <img src={AppPreviewMiddle} alt="" />
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

    {/* Pricing Table */}
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

    {/* Testimonials */}
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


    {/* FAQ */}
    <div className="page-section bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 py-3 wow fadeInUp">
            <h2 className="mb-4">
              Frequently <br />
              asked question
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              minus id consectetur accusantium illum necessitatibus, non quia
              sit laboriosam aut libero. Maiores neque velit modi, mollitia
              nostrum alias quibusdam et.
            </p>

            <p className="fg-primary fw-medium">Need more helps?</p>
            <a href="#" className="btn btn-gradient btn-split-icon rounded-pill">
              <span className="icon mai-call-outline"></span> Contact Us
            </a>
          </div>
          <div className="col-lg-7 py-3 no-scroll-x">
            <div className="accordion accordion-gap" id="accordionFAQ">
              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingFour">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    Payment types that won't work
                  </button>
                </div>
                <div
                  id="collapse1"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <p>You can't add these payment methods to Google Pay:</p>
                    <ul>
                      <li>Wire transfers</li>
                      <li>Bank transfers</li>
                      <li>Western Union</li>
                      <li>Moneygram</li>
                      <li>Virtual credit cards (VCC)</li>
                      <li>Health savings account (HSA)</li>
                      <li>Any escrow type of payment</li>
                      <li>Prepaid cards if you use automatic payments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingFive">
                  <button
                    className="btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    Already seeing payment methods
                  </button>
                </div>
                <div
                  id="collapse2"
                  className="collapse show"
                  aria-labelledby="headingFive"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <p>
                      New to Google Pay and already seeing payment methods? If
                      you paid for something through Google in the past, Google
                      Pay saved your card.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingSix">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Your transaction cannot be completed
                  </button>
                </div>
                <div
                  id="collapse3"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <p>
                      If you see this error message, wait 24 hours and try to
                      add your card again.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingSeven">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    Credit & Debit cards
                  </button>
                </div>
                <div
                  id="collapse4"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <ul>
                      <li>American Express</li>
                      <li>MasterCard</li>
                      <li>Visa</li>
                      <li>Discover (U.S. only)</li>
                      <li>JCB (Japan and U.S. only)</li>
                      <li>Visa Electron (outside U.S. only)</li>
                      <li>
                        Elo credit cards (Brazil only; Elo debit cards aren’t
                        accepted)
                      </li>
                    </ul>
                    <p>
                      The types of cards accepted by Google services vary by
                      location and product.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingEight">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    Send money to friends or family
                  </button>
                </div>
                <div
                  id="collapse5"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <p>
                      This feature is only available in the US. For the US
                      territories, this is supported only if the debit card was
                      issued under a US-licensed bank. If you'd like to know in
                      advance whether your payment to or from a US territory
                      will go through, please check with your card issuing bank.
                    </p>

                    <p>
                      You can use Google Pay to send money to friends and family
                      or to someone using their email address or phone number.
                      Google Pay charges no fees.
                    </p>

                    <p>
                      If you have a problem sending money, here is a list of
                      likely reasons.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item wow fadeInRight">
                <div className="accordion-trigger" id="headingNine">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    How long it usually takes to send or receive money
                  </button>
                </div>
                <div
                  id="collapse6"
                  className="collapse"
                  aria-labelledby="headingNine"
                  data-parent="#accordionFAQ"
                >
                  <div className="accordion-content">
                    <p>
                      For the best Google Pay experience, we recommend using a
                      debit card whenever you send or receive money from friends
                      and family. With a debit card, sending and receiving money
                      is usually the fastest option.
                    </p>
                  </div>
                </div>
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