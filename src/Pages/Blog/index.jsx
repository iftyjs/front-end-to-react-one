import { Link } from "@reach/router";
import BloGOne from './../../assets/img/blogs/blog_1.jpg';
import BloGTwo from './../../assets/img/blogs/blog_2.jpg';
import BloGThree from './../../assets/img/blogs/blog_3.jpg';
import BloGFour from './../../assets/img/blogs/blog_4.jpg';
import BloGFive from './../../assets/img/blogs/blog_5.jpg';
import BloGSix from './../../assets/img/blogs/blog_6.jpg';
import HeroMini from './../../assets/img/hero_mini.svg';
// Components
import Footer from './../../components/Footer';
import Nav from './../../components/Nav';
function Blog() {
  return (
    <>
      <Nav />
      <main>

      <div className="page-hero-section bg-image hero-mini" style={{backgroundImage: `url(${HeroMini})`}}>
        <div className="hero-caption">
          <div className="container fg-white h-100">
            <div className="row justify-content-center align-items-center text-center h-100">
              <div className="col-lg-6">
                <h3 className="mb-4 fw-medium">Blog</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

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


            {/* Sidebar */}
            <div className="col-lg-4 py-3">
              <div className="widget-wrap">
                <form action="#" className="search-form">
                  <h3 className="widget-title">Search</h3>
                  <div className="form-group">
                    <span className="icon mai-search"></span>
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>

                <div className="widget-wrap">
                  <h3 className="widget-title">Jobs</h3>
                  <ul className="categories">
                    <li><a href="#">Graphic Designer <span>12</span></a></li>
                    <li><a href="#">Visual Assistant <span>22</span></a></li>
                    <li><a href="#">Programing <span>37</span></a></li>
                    <li><a href="#">Office Admin <span>42</span></a></li>
                    <li><a href="#">Web Designer <span>14</span></a></li>
                    <li><a href="#">Language <span>140</span></a></li>
                  </ul>
                </div>

                <div className="widget-wrap">
                  <h3 className="widget-title">Recent Blog</h3>
                  <div className="blog-widget">
                    <div className="blog-img">
                      <img src={BloGOne} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                      <div className="meta">
                        <a href="#"><span className="icon-calendar"></span> July 12, 2018</a>
                        <a href="#"><span className="icon-person"></span> Admin</a>
                        <a href="#"><span className="icon-chat"></span> 19</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <div className="blog-img">
                      <img src={BloGTwo} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                      <div className="meta">
                        <a href="#"><span className="icon-calendar"></span> July 12, 2018</a>
                        <a href="#"><span className="icon-person"></span> Admin</a>
                        <a href="#"><span className="icon-chat"></span> 19</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <div className="blog-img">
                      <img src={BloGThree} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                      <div className="meta">
                        <a href="#"><span className="icon-calendar"></span> July 12, 2018</a>
                        <a href="#"><span className="icon-person"></span> Admin</a>
                        <a href="#"><span className="icon-chat"></span> 19</a>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="widget-wrap">
                <h3 className="widget-title">Tag Cloud</h3>
                <div className="tag-clouds">
                  <a href="#" className="tag-cloud-link">dish</a>
                  <a href="#" className="tag-cloud-link">menu</a>
                  <a href="#" className="tag-cloud-link">food</a>
                  <a href="#" className="tag-cloud-link">sweet</a>
                  <a href="#" className="tag-cloud-link">tasty</a>
                  <a href="#" className="tag-cloud-link">delicious</a>
                  <a href="#" className="tag-cloud-link">desserts</a>
                  <a href="#" className="tag-cloud-link">drinks</a>
                </div>
              </div>

              <div className="widget-wrap">
                <h3 className="widget-title">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div> {/* end sidebar */}
          </div>
        </div>
      </div>


      </main>

      <Footer />
    </>
  )
}

export default Blog
