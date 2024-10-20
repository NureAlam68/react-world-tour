import CountryData from "../CountryData/CountryData";

// prop drilling-1
// const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
//     return (
//         <div>
//             <h4>Country details</h4>
//             <hr />
//             <CountryData
//             country={country}
//             handleVisitedCountry={handleVisitedCountry}
//             handleVisitedFlags={handleVisitedFlags}
//             ></CountryData>
//         </div>
//     );
// };


// or
const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country details</h4>
            <hr />
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;