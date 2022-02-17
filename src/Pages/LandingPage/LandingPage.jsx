import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Searcher from "../../components/Searcher/Searcher";
import {CardList} from "../../components/CardList/CardList"
function LandingPage() {
    return (
        <div className="App">
            <Header/>
            <Searcher/>
            <CardList/>
            <Footer/>
        </div>
    );
}

export default LandingPage