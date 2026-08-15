import Header from "../../Components/Header/Header";



function TRPage(){
    return (
        <div className="trPage">
            <Header className="trPageHeader"/>
            <h1>Welcome to the Teardown & Repair hub</h1>
            <div className="trprojects">
                {/* Project cards will be displayed here */}
            </div>
            
        </div>
    );
}

export default TRPage;