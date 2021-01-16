import { Link } from "@reach/router";
import HeroPart from '../../components/HeroPart';
// Components
import SideBar from '../../components/SideBar';
import BloGFour from './../../assets/img/blogs/blog_4.jpg';
import BloGFive from './../../assets/img/blogs/blog_5.jpg';
import BloGSix from './../../assets/img/blogs/blog_6.jpg';
import Footer from './../../components/Footer';
import Nav from './../../components/Nav';
function Blog() {
  return (
    <>
      <Nav />
      <main>

      <HeroPart title="Blog" parantLink="Home" childLink="Blog" />

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 py-3">
              <article className="blog-entry">
                <div className="entry-header">
                  <div className="post-thumbnail">
                    <img src={BloGFour} alt="" />
                  </div>
                  <div className="post-date">
                    <h3>20</h3>
                    <span>Feb</span>
                  </div>
                </div>
                <div className="post-title"><Link to="/blog/details">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</Link></div>
                <div className="entry-meta mb-2">
                  <div className="meta-item entry-author">
                    <div className="icon">
                      <span className="mai-person"></span>
                    </div>
                    by <a href="#">Admin</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-pricetags"></span>
                    </div>
                    Category:
                    <a href="#">Business</a>,
                    <a href="#">Finances</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-chatbubble-ellipses"></span>
                    </div>
                    <a href="#">24 Comments</a>
                  </div>
                </div>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                </div>
                <Link to="/blog/details" className="btn btn-primary">Continue Reading</Link>
              </article>

              <article className="blog-entry">
                <div className="entry-header">
                  <div className="post-thumbnail">
                    <img src={BloGFive} alt="" />
                  </div>
                  <div className="post-date">
                    <h3>20</h3>
                    <span>Feb</span>
                  </div>
                </div>
                <div className="post-title"><Link to="/blog/details">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</Link></div>
                <div className="entry-meta mb-2">
                  <div className="meta-item entry-author">
                    <div className="icon">
                      <span className="mai-person"></span>
                    </div>
                    by <a href="#">Admin</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-pricetags"></span>
                    </div>
                    Category:
                    <a href="#">Business</a>,
                    <a href="#">Finances</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-chatbubble-ellipses"></span>
                    </div>
                    <a href="#">24 Comments</a>
                  </div>
                </div>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                </div>
                <Link to="/blog/details" className="btn btn-primary">Continue Reading</Link>
              </article>

              <article className="blog-entry">
                <div className="entry-header">
                  <div className="post-thumbnail">
                    <img src={BloGSix} alt="" />
                  </div>
                  <div className="post-date">
                    <h3>06</h3>
                    <span>Jan</span>
                  </div>
                </div>
                <div className="post-title"><Link to="/blog/details">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</Link></div>
                <div className="entry-meta mb-2">
                  <div className="meta-item entry-author">
                    <div className="icon">
                      <span className="mai-person"></span>
                    </div>
                    by <a href="#">Admin</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-pricetags"></span>
                    </div>
                    Category:
                    <a href="#">Business</a>,
                    <a href="#">Finances</a>
                  </div>
                  <div className="meta-item">
                    <div className="icon">
                      <span className="mai-chatbubble-ellipses"></span>
                    </div>
                    <a href="#">0 Comments</a>
                  </div>
                </div>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                </div>
                <Link to="/blog/details" className="btn btn-primary">Continue Reading</Link>
              </article>
            </div>

            <SideBar />

          </div>
        </div>
      </div>


      </main>

      <Footer />
    </>
  )
}

export default Blog
