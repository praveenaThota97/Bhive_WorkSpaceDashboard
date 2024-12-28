
import { useState, useEffect } from 'react';
import './BhiveWorkspace.css'

function BhiveWorkspace() {
    const [workspaceDetails, setWorkSpaceDetails] = useState([]);
    const fetchData = async function () {
        const apiresponse = await fetch('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json');
        const jsonResposne = await apiresponse.json();
        setWorkSpaceDetails(jsonResposne);
        console.log(jsonResposne);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const calculateDiscount=(dayPrice)=>{
        let bulkAmount= dayPrice*10;
        return (bulkAmount -((bulkAmount*20)/100));
    };
    return (
        <div className="workspace">
            <h2 className="workspaceHeader">Our Space Overview</h2>
            <div className='workspaceCardsContainer'>
                {
                    workspaceDetails && workspaceDetails.map((workspace) => (
                        <div className='workspaceCard' key={workspace.id}>
                            <header className='workspaceCardHeader'>
                                <p className='workspaceName'>{workspace.name}</p>
                                <p className='direction'>
                                    <a href={workspace.google_maps_url} target='_blank' rel="noopener noreferrer">
                                        <img src='./images/direction.png' alt='direction' />
                                    </a>
                                </p>
                            </header>
                            <article className='workspaceImage'>
                                <img src={`https://github.com/MujtabaKably/bhive-interview-project-data/raw/main/${workspace.images[0]}`} />
                            </article>
                            <footer className='workspaceFooter'>
                            <div className="dailyPass">
                                    <div className="bulkContent">
                                        <div className="textBlock">
                                            <p>Day Pass</p>
                                            <p>₹<strong className="price">{workspace.day_pass_price}</strong>/Day</p>
                                        </div>
                                        <div className="passicon">
                                            <img src="./images/Passicon.png" alt="Pass Icon"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bulkPass">
                                    <div className="discountBadge">20% discount</div>
                                    <div className="bulkContent">
                                        <div className="textBlock">
                                            <p>Bulk Pass</p>
                                            <p>₹<strong className="price">{calculateDiscount(workspace.day_pass_price)}</strong>/10 Days</p>
                                        </div>
                                        <div className="passicon">
                                            <img src="./images/Passicon.png" alt="Pass Icon"/>
                                        </div>
                                    </div>
                                </div>


                            </footer>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BhiveWorkspace;