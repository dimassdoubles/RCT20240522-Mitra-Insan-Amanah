import { missions } from "../constants";

const Missions = () => {
  return (
    <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
        <div className="overlay-main bg-secondry opacity-09" />
        <div className="bg-changer">
            {missions.map((item, index) => (
                <div key={index} className={`section-bg ${index === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${item.image})` }} />
            ))}
        </div>
        <div className="container">
            {/* TITLE START*/}
            <div className="section-head text-center text-white">
                <h2 data-title="Misi Kami">Misi Kami</h2>
                <div className="mt-separator-outer">
                    <div className="mt-separator site-bg-primary" />
                </div>
            </div>
            {/* TITLE END*/}
            <div className="section-content">
                <div className="row">
                    {missions.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                <div className="icon-md radius m-b15">
                                    <span className="icon-cell  text-white"><i className={item.icon} /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="mt-tilte  m-b15 site-text-primary">
                                        {item.title}
                                    </h4>
                                    <p className="text-white">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Missions
