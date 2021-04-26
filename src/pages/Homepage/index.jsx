import FeedbackSection from "./FeedbackSection/FeedbackSection";
import ImproveSection from "./ImproveSection/ImproveSection";
import RateSection from "./RateSection/RateSection";
import FeatureSection from "./FeaturesSection/FeatureSection";
import PracticeSection from "./PracticeSection/PracticeSection";

function Homepage() {
    return(
        <>
            <section>
                <ImproveSection />
            </section>

            <section style={{backgroundColor: '#F5F6FA'}}>
                <RateSection />
            </section>

            <section>
                <FeedbackSection />
            </section>

            <section style={{backgroundColor: '#F5F6FA'}}>
                <FeatureSection />
            </section>

            <section>
                <PracticeSection />
            </section>
        </>
    )
}

export default Homepage;