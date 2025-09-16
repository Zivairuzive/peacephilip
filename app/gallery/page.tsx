import Banner from "../components/banner";
import { galleryPageData } from "../data/siteData";

export default function Gallery() {
    return (
        <div>
            <div>
                <Banner
                    text={galleryPageData.banner.text}
                    url={galleryPageData.banner.url}
                />
            </div>
        </div>
    );
}
