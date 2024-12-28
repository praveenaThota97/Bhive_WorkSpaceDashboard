
import './BhiveAppDownloadInfo.css';
function BhiveAppDownloadInfo(){
    return(
        <div className="appDownloadInfoContainer">
            <h2>Download Our App now</h2>
            <div className='appInfoContainer'>
                <img className='device' src='public/images/mobileDevice.png'></img>
                <span>
                    <p>
                        Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                    </p>
                </span>
                <div className='storeContainer'>
                        <a href='https://play.google.com/store/games' target='_blank'><img src='public/images/playStore.png' alt='playStore'/></a>
                        <a href='https://www.apple.com/in/app-store/' target='_blank'><img src='public/images/appStore.png' alt='appStore'/></a>
                        
                </div>
            </div>
        </div>
    )
}

export default BhiveAppDownloadInfo;