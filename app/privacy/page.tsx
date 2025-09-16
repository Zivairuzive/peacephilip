import Banner from "../components/banner";
import { privacyPageData } from "../data/siteData";

export default function Policy() {
    return (
        <div>
            <div>
                <Banner
                    text={privacyPageData.banner.text}
                    url={privacyPageData.banner.url}
                />
            </div>
            <div>Policy</div>
        </div>
    );
}
