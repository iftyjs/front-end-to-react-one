import HeroMini from './../assets/img/hero_mini.svg';
function HeroPart({title, parantLink, childLink}) {
  return (
    <div className="page-hero-section bg-image hero-mini" style={{backgroundImage: `url(${HeroMini})`}}>
      <div className="hero-caption">
        <div className="container fg-white h-100">
          <div className="row justify-content-center align-items-center text-center h-100">
            <div className="col-lg-6">
              <h3 className="mb-4 fw-medium">{title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                  <li className="breadcrumb-item"><a href="index.html">{parantLink}</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{childLink}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPart;
