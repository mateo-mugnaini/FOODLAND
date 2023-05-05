import React from "react";

import Stock from "../../Components/Stock/Stock";

const StockViews = () => {
return(
    <div className="svContainer">
        <div className="svTitle">
            <h1>Stock:</h1>
        </div>
        <div>
            <Stock/>
        </div>
    </div>
)
}

export default StockViews