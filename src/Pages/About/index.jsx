import HeroPart from '../../components/HeroPart';
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

function About() {
  return (
    <>

      <Nav />

      <main className="bg-light">

      <HeroPart title="About Us" parantLink="Home" childLink="About" />

        <div className="page-section pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card-page">
                  <h5 className="fg-primary">Stories</h5>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                  <div className="text-center py-5">
                    <embed className="embed-video" src="https://www.youtube.com/embed/k1D0_wFlXgo?list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX" />
                  </div>

                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-page mt-3">
                  <h5 className="fg-primary">Meet Our Teams</h5>
                  <hr />

                  <div className="row justify-content-center">
                    <div className="col-lg-3 py-3">
                      <div className="team-item">
                        <div className="team-avatar">
                          <img src={PersonOne} alt="" />
                        </div>
                        <h5 className="team-name">Sugar Elliot</h5>
                        <span className="fg-gray fs-small">Creative Director</span>
                      </div>
                    </div>
                    <div className="col-lg-3 py-3">
                      <div className="team-item">
                        <div className="team-avatar">
                          <img src={PersonTwo} alt="" />
                        </div>
                        <h5 className="team-name">John Doe</h5>
                        <span className="fg-gray fs-small">UI/UX Designer</span>
                      </div>
                    </div>
                    <div className="col-lg-3 py-3">
                      <div className="team-item">
                        <div className="team-avatar">
                          <img src={PersonThree} alt="" />
                        </div>
                        <h5 className="team-name">Ellysa</h5>
                        <span className="fg-gray fs-small">Product Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-page mt-3">
                  <h5 className="fg-primary">Partners</h5>
                  <hr />

                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5">
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientSport} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientService} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientPhoto} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientGlobalTV} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientNetSportTV} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientNetNewsTV} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={ClientSpaBeauty} alt="" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="img-place client-img">
                        <img src={Clienttrivier} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />

    </>
  )
}
export default About;