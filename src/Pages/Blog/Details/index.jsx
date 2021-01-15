import HeroPart from '../../../components/HeroPart';
import BloGOne from './../../../assets/img/blogs/blog_1.jpg';
import BloGTwo from './../../../assets/img/blogs/blog_2.jpg';
import BloGThree from './../../../assets/img/blogs/blog_3.jpg';
import PersonOne from './../../../assets/img/person/person_1.png';
import PersonTwo from './../../../assets/img/person/person_2.png';
import PersonThree from './../../../assets/img/person/person_3.png';
import Footer from './../../../components/Footer';
import Nav from './../../../components/Nav';

function BlogDetails() {
  return (
    <>

    <Nav />

    <main>

      <HeroPart />

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 py-3">
              <article className="blog-single-entry">
                <div className="post-thumbnail">
                  <img src={BloGOne} alt="" />
                </div>
                <div className="post-date">
                  Posted on <a href="#">Jan 19, 2020</a>
                </div>
                <h1 className="post-title">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</h1>
                <div className="entry-meta mb-4">
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
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea voluptatibus perspiciatis quis voluptatem dolor. Optio harum fugiat neque. Placeat, eligendi omnis! Ipsa qui nemo eveniet, dignissimos ullam aut molestiae.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea voluptatibus perspiciatis quis voluptatem dolor. Optio harum fugiat neque. Placeat, eligendi omnis! Ipsa qui nemo eveniet, dignissimos ullam aut molestiae.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea voluptatibus perspiciatis quis voluptatem dolor. Optio harum fugiat neque. Placeat, eligendi omnis! Ipsa qui nemo eveniet, dignissimos ullam aut molestiae.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea voluptatibus perspiciatis quis voluptatem dolor. Optio harum fugiat neque. Placeat, eligendi omnis! Ipsa qui nemo eveniet, dignissimos ullam aut molestiae.</p>
                </div>
              </article>

              {/* Comments */}
              <div className="comment-area">
                <h3 className="mb-5">6 Comments</h3>
                {/* Comment List */}
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                    <img src={PersonOne} alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                    <h3>Jacob Smith</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                    <img src={PersonTwo} alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                    <h3>Chris Meyer</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <p><a href="#" className="reply">Reply</a></p>
                    </div>

                    <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                      <img src={PersonThree} alt="Image placeholder" />
                      </div>
                      <div className="comment-body">
                      <h3>Chintan Patel</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                      <p><a href="#" className="reply">Reply</a></p>
                      </div>

                      <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                        <img src={PersonTwo} alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                        <h3>Jean Doe</h3>
                        <div className="meta">January 9, 2018 at 2:21pm</div>
                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p><a href="#" className="reply">Reply</a></p>
                        </div>

                        <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                          <img src={PersonOne} alt="Image placeholder" />
                          </div>
                          <div className="comment-body">
                          <h3>Ben Afflick</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                          <p><a href="#" className="reply">Reply</a></p>
                          </div>
                        </li>
                        </ul>
                      </li>
                      </ul>
                    </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                    <img src={PersonThree} alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="">
                    <div className="form-row form-group">
                      <div className="col-md-6">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea name="msg" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Post Comment" className="btn btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
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
            </div>

          </div>
        </div>
      </div>

    </main>

    <Footer />

    </>
  )
}

export default BlogDetails
