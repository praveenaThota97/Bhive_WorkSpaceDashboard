
import BhiveAmenities from "./BHiveAmenities";
import BHiveHeader from "./BHiveHeader";
import BHiveTitle from "./BHiveTitle";
import BhiveWorkspace from "./BHiveSpaceDashboard";
import BhiveAppDownloadInfo from "./BhiveAppDownload";
function BhiveWebsite(){
    return(
        <div className="container">
            <BHiveHeader/>
            <BHiveTitle/>
            <BhiveAmenities/>
            <BhiveWorkspace/>
            <BhiveAppDownloadInfo/>
            <div className="websiteFooter">
                © Copyright 2024. Bhive Private Limited
            </div>
        </div>
    )
}

export default BhiveWebsite;