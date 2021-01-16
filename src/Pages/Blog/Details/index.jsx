import HeroPart from '../../../components/HeroPart';
import SideBar from '../../../components/SideBar';
import BloGOne from './../../../assets/img/blogs/blog_1.jpg';
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

    <HeroPart title="Blog Details" parantLink="Home" childLink="Blog Details" />

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

            <SideBar />

          </div>
        </div>
      </div>

    </main>

    <Footer />

    </>
  )
}

export default BlogDetails
