import BloGOne from './../assets/img/blogs/blog_1.jpg';
import BloGTwo from './../assets/img/blogs/blog_2.jpg';
import BloGThree from './../assets/img/blogs/blog_3.jpg';
function SideBar() {
  return (
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
  )
}

export default SideBar
